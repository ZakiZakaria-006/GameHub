"use client"

import React, { useState, useEffect } from 'react';
import GameCard from '../molecules/GameCard';
import SkeletonCard from '../molecules/SkeletonCard';
import { Game } from '@/types/game';

interface GameListProps {
  genre: string;
}

export default function GameList({ genre }: GameListProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const genreQuery = genre ? `&genres=${genre}` : '';
        const apiUrl = `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&page_size=40${genreQuery}`;
        
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Gagal mengambil data game");
        
        const data = await response.json();
        setGames(data.results);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchGames();
  }, [genre]); 

  if (error) {
    return <p className="text-red-500 text-center">Gagal memuat game... Coba lagi nanti.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {loading ? (
        [...Array(12)].map((_, index) => <SkeletonCard key={index} />)
      ) : (
        games.map((game) => <GameCard key={game.id} game={game} />)
      )}
    </div>
  );
}