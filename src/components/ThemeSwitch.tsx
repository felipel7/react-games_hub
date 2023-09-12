import {
  Button,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import theme from '../theme';

function ThemeSwitch() {
  const { colorMode, setColorMode } = useColorMode();
  const colors = theme.colors[colorMode];

  const buttonStyles = {
    _hover: { filter: 'brightness(90%)' },
    borderRadius: 9,
    gap: 2,
    px: 6,
    py: 2,
  };

  return (
    <ButtonGroup
      borderRadius={12}
      bgColor={colors.btnGroupBg}
      p={2}
      marginTop="auto"
    >
      <Button
        {...buttonStyles}
        bgColor={useColorModeValue(colors.btnActive, 'transparent')}
        color={useColorModeValue(colors.textActive, colors.textInactive)}
        onClick={() => setColorMode('light')}
      >
        <BsFillSunFill size={20} />
        Light
      </Button>
      <Button
        {...buttonStyles}
        bgColor={useColorModeValue('transparent', colors.btnActive)}
        color={useColorModeValue(colors.textInactive, colors.textActive)}
        onClick={() => setColorMode('dark')}
      >
        <BsMoonStarsFill size={18} />
        Dark
      </Button>
    </ButtonGroup>
  );
}

export default ThemeSwitch;
