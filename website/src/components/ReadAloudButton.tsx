import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speechEngine } from '../utils/speechEngine';

interface ReadAloudButtonProps {
  /** Raw text to speak (LaTeX/markdown is cleaned automatically) */
  text: string;
  /** Unique key: when it changes, any playing audio stops */
  stopKey?: string | number;
  label?: string;
  className?: string;
}

/**
 * Speaker button that reads text aloud with the device's best voice —
 * instant, no downloads. (The pre-rendered human voice MP3s, generated
 * overnight for all questions, will take over this button when they land.)
 */
export const ReadAloudButton: React.FC<ReadAloudButtonProps> = ({
  text,
  stopKey,
  label = 'Listen',
  className = '',
}) => {
  const [speaking, setSpeaking] = useState(false);

  // Stop playback when the underlying content changes (e.g. next question)
  useEffect(() => {
    speechEngine.stop();
    setSpeaking(false);
  }, [stopKey]);

  useEffect(() => () => speechEngine.stop(), []);

  const handleClick = () => {
    if (speaking) {
      speechEngine.stop();
      setSpeaking(false);
      return;
    }
    speechEngine.speak(text, {
      rate: 0.95,
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={speaking ? 'Stop reading' : label}
      aria-label={speaking ? 'Stop reading aloud' : label}
      className={`read-aloud-btn ${speaking ? 'is-speaking' : ''} ${className}`}
    >
      {speaking ? (
        <>
          <VolumeX size={16} />
          <span>Stop</span>
        </>
      ) : (
        <>
          <Volume2 size={16} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
