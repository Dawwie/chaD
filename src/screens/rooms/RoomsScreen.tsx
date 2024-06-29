import { RoomsList } from "./components/RoomsList";

import { useFetchRooms } from "@/api/rooms/useFetchRooms";
import Phone from "@/assets/icons/phone.svg";
import Videocall from "@/assets/icons/videocall.svg";
import { Header } from "@/components/Header";
import { Box } from "@/utils/theme";

export const RoomsScreen = () => {
  const { data, loading } = useFetchRooms();

  console.log(data);
  return (
    <>
      <Header headerTitle="Rooms">
        <Box flexDirection="row" columnGap="s">
          <Phone />
          <Videocall />
        </Box>
      </Header>

      <RoomsList rooms={data?.usersRooms?.rooms} isLoading={loading} />
    </>
  );
};
