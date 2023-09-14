import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import GameScore from './GameScore';
import PlatformIconList from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card
      overflow="hidden"
      bg={useColorModeValue('light.btnGroupBg', 'dark.btnGroupBg')}
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBlockEnd={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map(p => p.platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" isTruncated noOfLines={3} whiteSpace="normal">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
