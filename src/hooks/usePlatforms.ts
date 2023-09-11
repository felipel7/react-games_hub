import useData from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  return useData<Platform>('/platforms/lists/parents');
}

export default usePlatforms;
