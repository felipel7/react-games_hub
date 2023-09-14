import { Grid, GridItem, Show } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Breadcrumbs from '../components/Breadcrumbs';

function Layout() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '276px 1fr',
      }}
    >
      <Show below="lg">
        <GridItem area="nav">
          <Navbar />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area="aside">
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main" p={4}>
        <Breadcrumbs />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default Layout;
