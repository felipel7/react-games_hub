import { Divider, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import GenreList from './GenreList';
import SearchInput from './SearchInput';
import ThemeSwitch from './ThemeSwitch';
import UserProfile from './UserProfile';

function Sidebar() {
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
      <SearchInput />
      <Divider marginBlock={4} />
      <Text
        px={4}
        color={useColorModeValue('light.textInactive', 'dark.textInactive')}
      >
        Genres
      </Text>
      <GenreList />
      <ThemeSwitch />
    </VStack>
  );
}

export default Sidebar;
