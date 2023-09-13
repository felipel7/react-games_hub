import { HStack } from '@chakra-ui/react';
import GameHeading from '../components/GameHeading';
import GamesGrid from '../components/GamesGrid';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

function HomePage() {
  return (
    <>
      <GameHeading />
      <HStack spacing={4}>
        <PlatformSelector />
        <SortSelector />
      </HStack>
      <GamesGrid />
    </>
  );
}

export default HomePage;
