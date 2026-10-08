import React, { useEffect, useState } from 'react';
import { Users, Activity } from 'lucide-react';
import { pingAndGetStats, LiveVisitorData, getLocalFallbackStats } from '../utils/visitorStats';
import { CountUp } from './reactbits';

export const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<LiveVisitorData | null>(null);

  useEffect(() => {
    // 1. Initial quick paint with fallback or cached stats
    setStats(getLocalFallbackStats());

    // 2. Initial visit count registration
    let isMounted = true;
    pingAndGetStats(false).then(data => {
      if (isMounted) setStats(data);
    });

    // 3. Heartbeat every 60 s while the tab is visible (the server keeps a visitor live for 90 s).
    //    Background tabs send nothing, which keeps server load flat as traffic grows.
    const BEAT_MS = 60000;
    let last = Date.now();
    const beat = () => {
      if (document.hidden) return;
      last = Date.now();
      pingAndGetStats(true).then((data) => {
        if (isMounted) setStats(data);
      });
    };
    const interval = setInterval(beat, BEAT_MS);
    const onVisible = () => {
      if (!document.hidden && Date.now() - last > BEAT_MS) beat();
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      isMounted = false;
      clearInterval(interval);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  if (!stats) {
    return (
      <div className="visitor-counter-container">
        <span className="visitor-badge-loading">
          <Activity size={13} className="text-emerald animate-pulse" />
          <span>Connecting live counter...</span>
        </span>
      </div>
    );
  }

  return (
    <div 
      className="visitor-counter-container" 
      title={stats.configured ? "Live synchronized visitor analytics (Upstash KV)" : "Local visit tracker (connect Upstash Redis in Vercel for cross-device sync)"}
    >
      <div className="visitor-stats-badge">
        {/* Live Active Now */}
        <div className="visitor-stat-item" title="Active users currently on the site">
          <span className="pulse-dot-green" />
          <strong className="visitor-number">
            <CountUp to={stats.live} duration={0.8} />
          </strong>
          <span className="visitor-sublabel">Live</span>
        </div>

        <span className="visitor-stat-divider">·</span>

        {/* Today's Visits */}
        <div className="visitor-stat-item" title="Unique visits today (resets at midnight)">
          <span className="visitor-label">Today:</span>
          <strong className="visitor-number">
            <CountUp to={stats.today} duration={1.2} />
          </strong>
        </div>

        <span className="visitor-stat-divider">·</span>

        {/* Total Visits */}
        <div className="visitor-stat-item" title="Cumulative visits all-time">
          <Users size={12} className="visitor-icon text-indigo" />
          <span className="visitor-label">Total:</span>
          <strong className="visitor-number">
            <CountUp to={stats.total} duration={1.5} />
          </strong>
        </div>
      </div>
    </div>
  );
};
