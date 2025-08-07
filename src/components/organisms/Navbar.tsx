"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Games', href: '/games' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        GameHub
                    </Link>
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link href={link.href} className={`font-medium transition-colors duration-300 hover:text-primary ${isActive ? 'text-primary' : 'text-light'}`}>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-light focus:outline-none">
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <ul className="flex flex-col items-center gap-4 py-4 bg-dark/90">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={`font-medium text-lg transition-colors duration-300 hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-light'}`}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}