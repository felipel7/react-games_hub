import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

function ThemeSwitch() {
  const { colorMode, setColorMode } = useColorMode();

  const buttonStyles = {
    borderRadius: 9,
    gap: 2,
    px: 6,
    py: 2,
    _hover: { filter: 'brightness(90%)' },
  };

  return (
    <ButtonGroup
      borderRadius={12}
      bgColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      p={2}
    >
      <Button
        {...buttonStyles}
        bgColor={colorMode === 'light' ? 'gray.300' : 'transparent'}
        onClick={() => setColorMode('light')}
      >
        <BsFillSunFill size={20} />
        Light
      </Button>
      <Button
        {...buttonStyles}
        bgColor={colorMode === 'dark' ? 'gray.600' : 'transparent'}
        onClick={() => setColorMode('dark')}
      >
        <BsMoonStarsFill size={18} />
        Dark
      </Button>
    </ButtonGroup>
  );
}

export default ThemeSwitch;
