import { Link, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import useGameStore from '../store';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GamesGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const clearFilters = useGameStore(s => s.clearFilters);
  const skeletons = [...Array(12).keys()].map(i => i);

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
      style={{ overflow: 'initial' }}
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
              {page.results.length > 0 ? (
                page.results.map(game => <GameCard key={game.id} game={game} />)
              ) : (
                <Text>
                  No results found.{' '}
                  <Link onClick={clearFilters}>Clear filters</Link>
                </Text>
              )}
            </Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GamesGrid;
