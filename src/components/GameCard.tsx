import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hook/useGames';
import PlatformIconList from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        />
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
