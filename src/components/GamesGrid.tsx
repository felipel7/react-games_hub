import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface GamesGridProps {
  gameQuery: GameQuery;
}

function GamesGrid({ gameQuery }: GamesGridProps) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => {
      return total + page.results.length;
    }, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
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
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GamesGrid;
