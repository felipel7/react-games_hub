import {
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BiSearch size={20} color={'#4D546B'} />} />
      <Input
        bg={useColorModeValue('light.btnGroupBg', 'dark.btnGroupBg')}
        borderRadius={10}
        placeholder="Search..."
        variant="filled"
      />
    </InputGroup>
  );
}

export default SearchInput;
