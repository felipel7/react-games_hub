import { Badge } from '@chakra-ui/react';

interface GameScoreProps {
  score: number;
}

function GameScore({ score }: GameScoreProps) {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge
      colorScheme={color}
      fontSize={14}
      paddingInline={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
}

export default GameScore;
