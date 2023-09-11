import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface GamesGridProps {
  selectedGenre: Genre | null;
}

function GamesGrid({ selectedGenre }: GamesGridProps) {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        paddingBlock={4}
        spacing={4}
      >
        {isLoading &&
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {data.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GamesGrid;
