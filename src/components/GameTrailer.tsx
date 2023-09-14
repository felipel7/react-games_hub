import { Spinner } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface GameTrailerProps {
  gameId: number;
}

function GameTrailer({ gameId }: GameTrailerProps) {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
}

export default GameTrailer;
