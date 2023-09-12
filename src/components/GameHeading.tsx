import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

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
