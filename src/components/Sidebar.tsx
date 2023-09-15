import { Divider, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import GenreList from './GenreList';
import SearchInput from './SearchInput';
import ThemeSwitch from './ThemeSwitch';
import UserProfile from './UserProfile';

function Sidebar() {
  return (
    <VStack
      alignItems="flex-start"
      gap={3}
      h="100vh"
      overflowX="hidden"
      overflowY="auto"
      p={4}
      pos="sticky"
      top={0}
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
