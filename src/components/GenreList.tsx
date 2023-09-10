import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

function GenreList() {
  const { genres } = useGenres();

  return (
    <List>
      {genres.map(genre => (
        <ListItem key={genre.id}>
          <HStack py="6px" px={4} alignItems="center">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="24px"
              borderRadius={3}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
