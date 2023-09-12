import { HStack, Show } from '@chakra-ui/react';
import GameHeading from './GameHeading';
import SearchInput from './SearchInput';

function Navbar() {
  return (
    <HStack p={4}>
      <Show below="lg">
        <SearchInput />
      </Show>
      <Show above="lg">
        <GameHeading />
      </Show>
    </HStack>
  );
}

export default Navbar;
