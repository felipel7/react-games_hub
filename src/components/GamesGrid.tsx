import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface GamesGridProps {
  gameQuery: GameQuery;
}

function GamesGrid({ gameQuery }: GamesGridProps) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      paddingBlock={4}
      spacing={4}
    >
      {isLoading &&
        skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
      {!isLoading &&
        data?.results.map(game => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
}

export default GamesGrid;
