import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find(g => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

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
