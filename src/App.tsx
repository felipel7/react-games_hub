import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GamesGrid from './components/GamesGrid';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import Sidebar from './components/Sidebar';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <Navbar gameQuery={gameQuery} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Sidebar gameQuery={gameQuery} setGameQuery={setGameQuery} />
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <HStack spacing={4}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={platform =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrders={sortOrder =>
              setGameQuery({
                ...gameQuery,
                sortOrder,
              })
            }
          />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
