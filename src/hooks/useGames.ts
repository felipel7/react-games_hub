import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { FetchResponse } from '../services/api-client';
import useGameStore from '../store';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  background_image: string;
  description_raw: string;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  slug: string;
}

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : null;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
