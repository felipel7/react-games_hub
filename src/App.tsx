import { Grid, GridItem, HStack, Show, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import ThemeSwitch from './components/ThemeSwitch';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '276px 1fr',
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <VStack
            justifyContent="space-between"
            pos="sticky"
            top={6}
            left={0}
            p={4}
            minH="calc(100vh - 24px)"
          >
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
            />
            <ThemeSwitch />
          </VStack>
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <HStack spacing={4}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={platform =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
