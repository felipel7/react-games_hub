import { Grid, GridItem, Show, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import GamesGrid from './components/GamesGrid';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import ThemeSwitch from './components/ThemeSwitch';
import { Genre } from './hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
              onSelectGenre={setSelectedGenre}
              selectedGenre={selectedGenre}
            />
            <ThemeSwitch />
          </VStack>
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <PlatformSelector />
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
