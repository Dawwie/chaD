import { useQuery } from "@apollo/client";

import { RoomsList } from "./components/RoomsList";
import { RoomsType } from "./types/rooms";

import { GET_ROOMS } from "@/api/rooms";
import Phone from "@/assets/icons/phone.svg";
import Videocall from "@/assets/icons/videocall.svg";
import { Header } from "@/components/Header";
import { Box } from "@/utils/theme";

export const RoomsScreen = () => {
  const { data, loading } = useQuery<RoomsType>(GET_ROOMS);

  return (
    <>
      <Header headerTitle="Rooms">
        <Box flexDirection="row" columnGap="s">
          <Phone />
          <Videocall />
        </Box>
      </Header>
      <RoomsList rooms={data!.usersRooms?.rooms} isLoading={loading} />
    </>
  );
};
