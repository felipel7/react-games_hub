import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BiSearch size={20} color={'#4D546B'} />} />
        <Input
          _hover={{
            filter: 'brightness(96%)',
          }}
          bg={useColorModeValue('light.btnGroupBg', 'dark.btnGroupBg')}
          borderRadius={10}
          placeholder="Search..."
          ref={ref}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
