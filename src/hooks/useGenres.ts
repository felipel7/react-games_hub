import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Genre } from '../entities/Genre';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default useGenres;
