"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GameCard from '@/components/molecules/GameCard';
import SkeletonCard from '@/components/molecules/SkeletonCard';
import { Game } from '@/types/game'; 

const featuresData = [
    { icon: 'fas fa-gamepad', title: 'Ribuan Game', desc: 'Jelajahi katalog game yang luas dari berbagai genre.' },
    { icon: 'fas fa-star', title: 'Rating Terpercaya', desc: 'Lihat rating dan ulasan dari jutaan pemain di seluruh dunia.' },
    { icon: 'fas fa-tags', title: 'Penawaran Terbaik', desc: 'Temukan diskon dan penawaran menarik untuk game favoritmu.' }
];

export default function HomePage() {
    const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedGames = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page_size=3&ordering=-action`);
                const data = await response.json();
                setFeaturedGames(data.results);
            } catch (error) {
                console.error("Failed to fetch featured games:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFeaturedGames();
    }, []);

    return (
        <main className="font-sans text-light overflow-x-hidden bg-animated-gradient">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 flex flex-col gap-24 md:gap-32">
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                            Temukan<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text"> Game </span> Terbaik
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl">
                            Jelajahi koleksi game terbaru dan terpopuler. Dari AAA hingga indie, temukan petualanganmu selanjutnya di sini.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/games" className="inline-block font-semibold py-3 px-8 rounded-full transition-all duration-300 mx-2 text-lg border-2 border-primary text-light hover:bg-primary">Jelajahi Game</Link>
                            <Link href="/about" className="inline-block font-semibold py-3 px-8 rounded-full transition-all duration-300 mx-2 text-lg border-2 border-primary text-light hover:bg-primary">Tentang Kami</Link>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
                        <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" alt="Featured Game" className="rounded-3xl shadow-2xl shadow-primary/20 object-cover" />
                    </motion.div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {featuresData.map((feature, index) => (
                        <motion.div key={feature.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="bg-black/20 p-8 rounded-2xl border border-white/10">
                            <i className={`${feature.icon} text-4xl text-primary mb-4`}></i>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </section>

                <section className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Paling <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text">Populer</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Game-game ini menjadi favorit para pemain. Lihat mengapa mereka sangat menyukainya.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {loading ? (
                            [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
                        ) : (
                            featuredGames.map(game => <GameCard key={game.id} game={game} />)
                        )}
                    </div>
                    <Link href="/games" className="inline-block font-semibold py-3 px-8 rounded-full transition-all duration-300 mx-2 bg-gradient-to-r from-primary to-secondary text-light hover:shadow-lg hover:shadow-primary/40">Lihat Semua Game</Link>
                </section>
            </div>
        </main>
    );
}