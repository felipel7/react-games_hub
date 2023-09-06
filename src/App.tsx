import { Grid, GridItem, Show } from '@chakra-ui/react';
import GamesGrid from './components/GamesGrid';
import Navbar from './components/Navbar';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <ThemeSwitch />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
