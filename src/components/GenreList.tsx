import { Button, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameStore from '../store';

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameStore(s => s.setGenreId);
  const navigate = useNavigate();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List width="full">
      {data?.results.slice(0, 15).map(genre => (
        <ListItem key={genre.id}>
          <Button
            alignItems="center"
            borderRadius={10}
            fontSize="lg"
            fontWeight={genre.id == selectedGenreId ? 'bold' : 'normal'}
            gap={3}
            justifyContent="flex-start"
            onClick={() => {
              navigate('/');
              setSelectedGenreId(genre.id);
            }}
            width="full"
            px={4}
            variant={`${
              genre.id === selectedGenreId ? 'outlineBorder' : 'Link'
            }`}
          >
            <Image
              borderRadius={3}
              boxSize={6}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Text isTruncated>{genre.name}</Text>
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
