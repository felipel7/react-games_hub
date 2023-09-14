import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store';

function SearchInput() {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameStore(s => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current && ref.current.value.trim() !== '') {
          setSearchText(ref.current.value);
          navigate('/');
        }
      }}
      style={{ width: '100%' }}
    >
      <InputGroup>
        <InputLeftElement
          as="button"
          children={<BiSearch size={20} color="#4D546B" />}
          type="submit"
        />
        <Input
          _hover={{ filter: 'brightness(95%)' }}
          _placeholder={{ color: '#4D546B' }}
          bg={useColorModeValue('light.btnGroupBg', 'dark.btnGroupBg')}
          borderRadius={10}
          placeholder="Search games..."
          ref={ref}
          variant="filled"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {value && (
          <InputRightElement
            as="button"
            children={<BiX size={20} color="#4D546B" />}
            onClick={() => {
              setValue('');
              if (ref.current) {
                setSearchText('');
              }
            }}
          />
        )}
      </InputGroup>
    </form>
  );
}

export default SearchInput;
