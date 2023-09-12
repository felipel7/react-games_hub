import { Divider, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { GameQuery } from '../App';
import GenreList from './GenreList';
import SearchInput from './SearchInput';
import ThemeSwitch from './ThemeSwitch';
import UserProfile from './UserProfile';

interface SidebarProps {
  gameQuery: GameQuery;
  setGameQuery: Dispatch<SetStateAction<GameQuery>>;
}

function Sidebar({ gameQuery, setGameQuery }: SidebarProps) {
  return (
    <VStack
      pos="sticky"
      top={0}
      p={4}
      gap={3}
      minH="100vh"
      alignItems="flex-start"
    >
      <UserProfile />
      <SearchInput
        onSearch={searchText =>
          setGameQuery({
            ...gameQuery,
            searchText,
          })
        }
      />
      <Divider marginBlock={4} />
      <Text
        px={4}
        color={useColorModeValue('light.textInactive', 'dark.textInactive')}
      >
        Genres
      </Text>
      <GenreList
        selectedGenreId={gameQuery.genreId}
        onSelectGenre={genre =>
          setGameQuery({ ...gameQuery, genreId: genre.id })
        }
      />
      <ThemeSwitch />
    </VStack>
  );
}

export default Sidebar;
