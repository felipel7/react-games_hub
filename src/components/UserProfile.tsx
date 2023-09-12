import {
  Avatar,
  AvatarBadge,
  Link,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';

function UserProfile() {
  const githubProfileLink = 'https://github.com/felipel7';
  const avatarSrc = 'https://avatars.githubusercontent.com/felipel7';

  return (
    <Wrap
      alignItems="center"
      borderRadius={16}
      p={4}
      w="full"
      border="1px"
      borderColor={useColorModeValue('light.borderColor', 'dark.borderColor')}
    >
      <WrapItem alignSelf="center">
        <Avatar src={avatarSrc} name="Felipe Silva" size="sm">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
      </WrapItem>
      <WrapItem flexDir="column" letterSpacing="wide">
        <Text fontWeight="bold">Felipe Silva</Text>
        <Link
          color={useColorModeValue('light.textInactive', 'dark.textInactive')}
          fontSize="sm"
          href={githubProfileLink}
          display="flex"
          alignItems="center"
          gap="2px"
          letterSpacing="wider"
          isExternal
        >
          Github Profile <BiLinkExternal size={14} />
        </Link>
      </WrapItem>
    </Wrap>
  );
}

export default UserProfile;
