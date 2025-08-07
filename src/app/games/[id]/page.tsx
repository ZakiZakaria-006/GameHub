import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import RatingStars from '@/components/molecules/RatingStars';
import ImageGallery from '@/components/organisms/ImageGallery';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import { Game } from '@/types/game'; 

async function getGame(id: string): Promise<Game> {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`);
    if (!response.ok) {
        return notFound();
    }
    return response.json();
}

async function getGameScreenshots(id: string) {
    const response = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`);
    if (!response.ok) {
        return { results: [] };
    }
    return response.json();
}

export default async function GameDetailPage({ params }: { params: { id: string } }) {
    const game = await getGame(params.id);
    const screenshots = await getGameScreenshots(params.id);
    const imageUrls = [game.background_image, ...screenshots.results.map((ss: any) => ss.image)];

    return (
        <div className="font-sans bg-dark text-light min-h-screen p-4 sm:p-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="mb-8">
                    <Link href="/games" className="text-primary hover:text-light transition-colors duration-300 group">
                        <i className="fas fa-arrow-left mr-2 transition-transform duration-300 group-hover:-translate-x-1"></i>
                        Kembali ke Semua Game
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    <ImageGallery images={imageUrls} title={game.name} />

                    <div className="flex flex-col">
                        <div className="flex gap-2 mb-2">
                            {game.genres.map(genre => <Badge key={genre.id} variant="category">{genre.name}</Badge>)}
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-light mb-4">{game.name}</h1>
                        <div dangerouslySetInnerHTML={{ __html: game.description }} className="text-gray-300 leading-relaxed mb-6" />
                        
                        <div className="flex items-center gap-4 mb-6">
                            <RatingStars rating={game.rating} maxRating={5} />
                            <span className="text-sm text-green-400 font-medium">(Berdasarkan {game.ratings_count} ulasan)</span>
                        </div>

                        <div className="bg-black/20 border border-white/10 rounded-lg p-4 mb-6">
                           <p className="text-sm text-gray-400">Dirilis pada: {game.released}</p>
                           <p className="text-sm text-gray-400">Pengembang: {game.developers.map(dev => dev.name).join(', ')}</p>
                        </div>
                        
                        <div className="mt-auto">
                           <Button href={game.website || '#'} className="w-full text-lg">
                               <i className="fas fa-globe mr-3"></i>
                               Kunjungi Situs Web
                           </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}