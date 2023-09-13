import { HStack } from '@chakra-ui/react';
import SearchInput from './SearchInput';

function Navbar() {
  return (
    <HStack p={4}>
      <SearchInput />
    </HStack>
  );
}

export default Navbar;
