import { Button, SimpleGrid, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface GamesGridProps {
  gameQuery: GameQuery;
}

function GamesGrid({ gameQuery }: GamesGridProps) {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      paddingBlock={4}
      spacing={4}
    >
      {isLoading &&
        skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
      {!isLoading &&
        data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </Fragment>
        ))}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </SimpleGrid>
  );
}

export default GamesGrid;
