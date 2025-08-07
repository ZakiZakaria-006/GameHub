import React from 'react';
import Link from 'next/link';
import GradientText from '../atoms/GradientText';

export default function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 text-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-xl font-bold mb-2">
              <GradientText as="span">GameHub</GradientText>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Platform terbaik untuk menemukan dan menjelajahi dunia game PC.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Halaman</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/games" className="text-gray-400 hover:text-primary transition-colors">Games</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GameHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}