import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GamesGrid from './components/GamesGrid';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import Sidebar from './components/Sidebar';
import SortSelector from './components/SortSelector';
import { Platform } from './hooks/useGames';
import { Genre } from './hooks/useGenres';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={platform =>
              setGameQuery({ ...gameQuery, platform })
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
