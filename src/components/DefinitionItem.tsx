import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: DefinitionItemProps) {
  return (
    <Box marginBlock={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
