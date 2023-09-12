import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameStore from '../store';

function SortSelector() {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const sortOrder = useGameStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameStore(s => s.setSortOrder);
  const currentSortOrder = sortOrders.find(({ value }) => value === sortOrder);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        variant="dropdownButton"
      >
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
