import { HStack } from '@chakra-ui/react';
import GameHeading from './GameHeading';

function Navbar() {
  return (
    <HStack p={4}>
      <GameHeading />
    </HStack>
  );
}

export default Navbar;
