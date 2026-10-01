import React, { useEffect, useState } from 'react';
import { Users, Activity } from 'lucide-react';
import { recordAndGetVisitorStats } from '../utils/visitorStats';
import { CountUp } from './reactbits';

export const VisitorCounter: React.FC = () => {
  const [stats, setStats] = useState<{ todayVisits: number; totalVisits: number } | null>(null);

  useEffect(() => {
    // Record client visit and obtain initialized counts
    const initialStats = recordAndGetVisitorStats();
    setStats({
      todayVisits: initialStats.todayVisits,
      totalVisits: initialStats.totalVisits
    });

    // Optionally fetch live server counts if API is present
    fetch('/api/visitors')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.today === 'number' && typeof data.total === 'number') {
          setStats(prev => ({
            todayVisits: Math.max(prev?.todayVisits || 0, data.today),
            totalVisits: Math.max(prev?.totalVisits || 0, data.total)
          }));
        }
      })
      .catch(() => {
        // Silently use client stats
      });
  }, []);

  if (!stats) {
    return (
      <div className="visitor-counter-container">
        <span className="visitor-badge-loading">
          <Activity size={13} className="text-emerald animate-pulse" />
          <span>Tracking live visits...</span>
        </span>
      </div>
    );
  }

  return (
    <div className="visitor-counter-container" title="Live engineering student visitor analytics">
      <div className="visitor-stats-badge">
        <div className="visitor-stat-item">
          <span className="pulse-dot-green" />
          <span className="visitor-label">Today:</span>
          <strong className="visitor-number">
            <CountUp to={stats.todayVisits} duration={1.2} />
          </strong>
        </div>

        <span className="visitor-stat-divider">·</span>

        <div className="visitor-stat-item">
          <Users size={13} className="visitor-icon text-indigo" />
          <span className="visitor-label">Total Visits:</span>
          <strong className="visitor-number">
            <CountUp to={stats.totalVisits} duration={1.5} />
          </strong>
        </div>
      </div>
    </div>
  );
};
