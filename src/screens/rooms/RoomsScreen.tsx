import { useQuery } from "@apollo/client";

import { RoomHeader } from "./components/RoomHeader";
import { RoomsList } from "./components/RoomsList";

import { GET_ROOMS } from "@/api/rooms";
import { RoomsType } from "@/types/rooms";

export const RoomsScreen = () => {
  const { data, loading } = useQuery<RoomsType>(GET_ROOMS);

  return (
    <>
      <RoomHeader />
      <RoomsList rooms={data?.usersRooms.rooms} isLoading={loading} />
    </>
  );
};
