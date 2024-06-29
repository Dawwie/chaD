import { useQuery } from "@apollo/client";

import { GET_ROOMS } from "./queries";

export const useFetchRooms = () => {
  const { data, loading, error } = useQuery(GET_ROOMS);
  return { data, loading, error };
};
