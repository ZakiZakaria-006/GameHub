"use client";

import React, { useState } from 'react';
import GradientText from '@/components/atoms/GradientText';
import GameList from '@/components/organisms/GameList';

const genres = [
  { name: 'Semua Genre', slug: '' },
  { name: 'Action', slug: 'action' },
  { name: 'RPG', slug: 'role-playing-games-rpg' },
  { name: 'Strategy', slug: 'strategy' },
  { name: 'Shooter', slug: 'shooter' },
  { name: 'Adventure', slug: 'adventure' },
  { name: 'Puzzle', slug: 'puzzle' },
  { name: 'Racing', slug: 'racing' },
  { name: 'Sports', slug: 'sports' },
];

export default function GamesPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className="font-sans bg-dark text-light min-h-screen p-4 sm:p-8">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
             Jelajahi <GradientText as="span">Game Yang Kamu Inginkan</GradientText>
          </h1>
          <p className="text-lg text-gray-400">Temukan game terbaik dari berbagai genre.</p>
        </header>

        <div className="mb-8 flex justify-end">
          <div className="flex items-center gap-3">
            <label htmlFor="genre" className="text-gray-400 font-medium">Genre:</label>
            <select
              id="genre"
              value={selectedGenre}
              onChange={handleGenreChange}
              className="bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {genres.map(genre => (
                <option key={genre.slug} value={genre.slug}>{genre.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <GameList genre={selectedGenre} />

      </div>
    </div>
  );
}