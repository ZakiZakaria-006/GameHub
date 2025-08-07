import React from 'react';
import Link from 'next/link';
import RatingStars from './RatingStars';
import Badge from '../atoms/Badge';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const releaseYear = game.released ? new Date(game.released).getFullYear() : '-';

  return (
    <Link href={`/games/${game.id}`} className="block h-full">
      <div className="bg-black/20 rounded-lg overflow-hidden shadow-lg border border-white/10 flex flex-col group transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary/20 h-full">
        <div className="relative">
          <img src={game.background_image} alt={game.name} className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold text-lg">Lihat Detail</p>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex gap-1 mb-2 flex-wrap">
            {game.genres.slice(0, 2).map(genre => (
              <Badge key={genre.id} variant="category">{genre.name}</Badge>
            ))}
          </div>
          <h3 className="text-lg font-bold text-light mb-2 flex-grow truncate" title={game.name}>
            {game.name}
          </h3>
          <div className="mt-auto flex justify-between items-center">
            <RatingStars rating={game.rating} maxRating={5} />
            <span className="text-sm font-medium text-gray-400">{releaseYear}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}