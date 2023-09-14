import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface GameScreenshotsProps {
  gameId: number;
}

function GameScreenshots({ gameId }: GameScreenshotsProps) {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={2}>
      {data?.results.map(game => (
        <Image key={game.id} src={game.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
