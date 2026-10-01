import React from 'react';
import './ShinyText.css';

export interface ShinyTextProps {
  text?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  pauseOnHover?: boolean;
  gradient?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  children,
  disabled = false,
  speed = 4.5,
  className = '',
  color = '#4338ca',
  shineColor = '#ffffff',
  spread = 120,
  pauseOnHover = true,
  gradient
}) => {
  const content = text ?? (typeof children === 'string' ? children : '');

  // White shine over indigo base - zero red/pink
  const backgroundImage = gradient
    ? gradient
    : `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`;

  const style: React.CSSProperties & { [key: string]: string | number } = {
    backgroundImage,
    '--shiny-speed': `${speed}s`,
    animationPlayState: disabled ? 'paused' : 'running'
  };

  return (
    <span
      className={`shiny-text ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`}
      style={style}
    >
      {content || children}
    </span>
  );
};

export default ShinyText;
