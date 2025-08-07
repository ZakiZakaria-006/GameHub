import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'cart';
}

export default function Button({ children, href, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-block font-semibold py-3 px-8 rounded-full transition-all duration-300 mx-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-blue-400 text-light hover:shadow-lg hover:shadow-primary/40",
    secondary: "border-2 border-primary text-light hover:bg-primary",
    cart: "bg-secondary text-white p-3 rounded-full hover:scale-110 hover:bg-primary",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}