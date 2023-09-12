import { HStack } from '@chakra-ui/react';
import { GameQuery } from '../App';
import GameHeading from './GameHeading';

interface NavbarProps {
  gameQuery: GameQuery;
}

function Navbar({ gameQuery }: NavbarProps) {
  return (
    <HStack p={4}>
      <GameHeading gameQuery={gameQuery} />
    </HStack>
  );
}

export default Navbar;
