import { useQuery } from "@apollo/client";
import { useEffect } from "react";

import { RoomHeader } from "./components/RoomHeader";
import { RoomsList } from "./components/RoomsList";

import { GET_ROOMS } from "@/api/rooms";
import { useUser } from "@/contexts/UserProvider";
import { RoomsType } from "@/types/rooms";

export const RoomsScreen = () => {
  const { data, loading } = useQuery<RoomsType>(GET_ROOMS);
  const { setUser } = useUser();

  useEffect(() => {
    if (data?.usersRooms.user) setUser(data.usersRooms.user);
  }, [data?.usersRooms.user]);

  return (
    <>
      <RoomHeader />
      <RoomsList rooms={data?.usersRooms.rooms} isLoading={loading} />
    </>
  );
};
