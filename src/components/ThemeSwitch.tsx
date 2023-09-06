import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react';

function ThemeSwitch() {
  const { colorMode, setColorMode } = useColorMode();

  const buttonStyles = {
    borderRadius: '9px',
    px: '6',
    py: '2',
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
        <SunIcon mr={2} />
        Light
      </Button>
      <Button
        {...buttonStyles}
        bgColor={colorMode === 'dark' ? 'gray.600' : 'transparent'}
        onClick={() => setColorMode('dark')}
      >
        <MoonIcon mr={2} />
        Dark
      </Button>
    </ButtonGroup>
  );
}

export default ThemeSwitch;
