import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
    return (
        <img 
            src={src} 
            alt={alt}
            className="w-64 h-64 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/50 transition-transform duration-300 hover:scale-105"
        />
    );
}