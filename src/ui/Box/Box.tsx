import React from 'react';
import './style.css';

export interface BoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: 'app' | 'container';
}

function Box({ children, style, variant = 'container' }: BoxProps) {
  return (
    <div className={variant} style={style}>
      {children}
    </div>
  );
}

export default Box;
