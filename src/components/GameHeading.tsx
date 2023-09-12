import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameStore from '../store';

function GameHeading() {
  const genreId = useGameStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `
    ${platform?.name || ''} 
    ${genre?.name || ''} Games
  `;

  return (
    <Heading as="h1" fontSize="4xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
