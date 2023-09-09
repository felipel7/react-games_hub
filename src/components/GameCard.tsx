import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hook/useGames';
import PlatformIconList from './PlatformIconList';
import GameScore from './GameScore';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
