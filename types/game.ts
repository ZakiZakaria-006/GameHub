// Buat folder `types` di root proyek Anda
export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  ratings_count: number;
  released: string;
  description: string;
  website: string;
  genres: { id: number; name: string }[];
  developers: { id: number; name: string }[];
  platforms: { platform: { id: number, name: string } }[];
}