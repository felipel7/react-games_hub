import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { MdHome, MdOutlineChevronRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const { pathname } = useLocation();

  const segments = useMemo(() => {
    return pathname
      .split('/')
      .filter(Boolean)
      .map(s => s.toUpperCase());
  }, [pathname]);

  return (
    <Breadcrumb
      separator={<MdOutlineChevronRight size={16} />}
      fontSize="xs"
      color="gray.500"
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          <MdHome size={16} />
        </BreadcrumbLink>
      </BreadcrumbItem>

      {segments.map((segment, index) => {
        const path = `/${segments
          .slice(0, index + 1)
          .join('/')
          .toLowerCase()}`;
        const isCurrentPage = pathname === path;

        return (
          <BreadcrumbItem key={index} isCurrentPage={isCurrentPage}>
            {isCurrentPage ? (
              <Text isTruncated>{segment}</Text>
            ) : (
              <BreadcrumbLink as={Link} to={path}>
                {segment}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumbs;
