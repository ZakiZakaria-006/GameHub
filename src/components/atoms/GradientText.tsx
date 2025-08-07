import React from 'react';

interface GradientTextProps {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ as: Component = 'span', children, className = '' }: GradientTextProps) {
  const classes = `bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent ${className}`;
  
  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}