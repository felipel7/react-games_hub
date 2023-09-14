import { Flex, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" pb={16}>
      <Heading>Oops...</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? 'This page does not exist.'
          : 'An unexpected error ocurred.'}
      </Text>
    </Flex>
  );
}

export default ErrorPage;
