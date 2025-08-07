import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'category';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variants = {
    primary: "bg-primary text-white",
    category: "bg-gray-700 text-gray-200 hover:bg-gray-600",
  };
  
  const baseClasses = "text-xs font-bold px-2.5 py-1 rounded-full inline-block";

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}