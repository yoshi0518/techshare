import { client } from '@/libs/rpc';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrent = () => {
  const query = useQuery({
    queryKey: ['current'],
    queryFn: async () => {
      const response = await client.api.authentication.current.$get();
      if (!response.ok) return null;
      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
