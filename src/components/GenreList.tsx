import { Button, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: GenreListProps) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id}>
          <Button
            alignItems="center"
            borderRadius={10}
            fontSize="lg"
            gap={3}
            justifyContent="flex-start"
            onClick={() => onSelectGenre(genre)}
            px={4}
            py={2}
            width="100%"
            variant={`${
              genre.id === selectedGenre?.id ? 'outlineBorder' : 'Link'
            }`}
          >
            <Image
              borderRadius={3}
              boxSize="24px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
