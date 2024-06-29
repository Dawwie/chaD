import { useQuery } from "@apollo/client";

import { RoomsList } from "./components/RoomsList";
import { RoomsType } from "./types/rooms";

import { GET_ROOMS } from "@/api/rooms";
import Rooms from "@/assets/icons/rooms.svg";
import Search from "@/assets/icons/search.svg";
import { Header } from "@/components/Header";
import { Box } from "@/utils/theme";

export const RoomsScreen = () => {
  const { data, loading } = useQuery<RoomsType>(GET_ROOMS);

  return (
    <>
      <Header headerTitle="Rooms">
        <Box flexDirection="row" columnGap="s">
          <Search />
          <Rooms />
        </Box>
      </Header>
      <RoomsList rooms={data!.usersRooms?.rooms} isLoading={loading} />
    </>
  );
};
