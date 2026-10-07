import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import {
  speakText,
  stopSpeaking,
  subscribeVoiceStatus,
  getVoiceStatus,
  type VoiceStatus,
} from '../utils/humanVoice';

interface ReadAloudButtonProps {
  /** Raw text to speak (LaTeX/markdown is cleaned automatically) */
  text: string;
  /** Unique key: when it changes, any playing audio stops */
  stopKey?: string | number;
  label?: string;
  className?: string;
}

/**
 * Speaker button that reads text aloud with a human Kokoro neural voice.
 * First tap downloads the voice model once (~90MB, cached); afterwards it's instant.
 */
export const ReadAloudButton: React.FC<ReadAloudButtonProps> = ({
  text,
  stopKey,
  label = 'Read aloud',
  className = '',
}) => {
  const [status, setStatus] = useState<VoiceStatus>(getVoiceStatus());
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => subscribeVoiceStatus((s, p) => {
    setStatus(s);
    if (typeof p === 'number') setProgress(p);
    if (s === 'error') setFailed(true);
  }), []);

  // Stop playback when the underlying content changes (e.g. next question)
  useEffect(() => {
    stopSpeaking();
  }, [stopKey]);

  useEffect(() => () => stopSpeaking(), []);

  const handleClick = async () => {
    if (status === 'speaking') {
      stopSpeaking();
      return;
    }
    setFailed(false);
    try {
      await speakText(text);
    } catch {
      setFailed(true);
    }
  };

  const isLoading = status === 'loading';
  const isSpeaking = status === 'speaking';

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      title={isSpeaking ? 'Stop reading' : failed ? 'Voice failed — tap to retry' : label}
      aria-label={isSpeaking ? 'Stop reading aloud' : label}
      className={`read-aloud-btn ${isSpeaking ? 'is-speaking' : ''} ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="spin" />
          <span>Loading voice{progress > 0 ? ` ${progress}%` : '…'}</span>
        </>
      ) : isSpeaking ? (
        <>
          <VolumeX size={16} />
          <span>Stop</span>
        </>
      ) : (
        <>
          <Volume2 size={16} />
          <span>{failed ? 'Retry voice' : label}</span>
        </>
      )}
    </button>
  );
};
