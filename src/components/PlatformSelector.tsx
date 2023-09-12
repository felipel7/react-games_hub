import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameStore from '../store';

function PlatformSelector() {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  const setSelectedPlatformId = useGameStore(s => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        variant="dropdownButton"
      >
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
