import { HStack, Icon } from '@chakra-ui/react';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from '../hooks/useGames';

interface PlatformIconListProps {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: PlatformIconListProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginBlock={1}>
      {platforms.map(platform => (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.id}
          color="gray.500"
          height="19px"
          width="15px"
          shapeRendering="geometricPrecision"
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
