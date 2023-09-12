import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

function PlatformSelector({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

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
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
