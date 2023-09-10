import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

function GenreList() {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

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
