import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hook/useGames';
import GameCard from './GameCard';

function GamesGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        paddingInline="4"
      >
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GamesGrid;
