import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GamesGrid from './components/GamesGrid';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import Sidebar from './components/Sidebar';
import SortSelector from './components/SortSelector';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '276px 1fr',
      }}
      gridTemplateRows="auto 1fr"
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <HStack spacing={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
