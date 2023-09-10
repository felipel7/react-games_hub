import { Grid, GridItem, Show, VStack } from '@chakra-ui/react';
import GamesGrid from './components/GamesGrid';
import Navbar from './components/Navbar';
import ThemeSwitch from './components/ThemeSwitch';
import GenreList from './components/GenreList';

function App() {
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
            <GenreList />
            <ThemeSwitch />
          </VStack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
