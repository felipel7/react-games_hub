import { Platform } from './Platform';

export interface Game {
  id: number;
  background_image: string;
  description_raw: string;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  slug: string;
}
