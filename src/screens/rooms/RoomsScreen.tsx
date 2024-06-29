import { RoomsList } from "./components/RoomsList";

import Phone from "@/assets/icons/phone.svg";
import Videocall from "@/assets/icons/videocall.svg";
import { Header } from "@/components/Header";
import { mockData } from "@/utils/mock-data/rooms";
import { Box } from "@/utils/theme";

export const RoomsScreen = () => {
  return (
    <>
      <Header headerTitle="Rooms">
        <Box flexDirection="row" columnGap="s">
          <Phone />
          <Videocall />
        </Box>
      </Header>

      <RoomsList rooms={mockData.rooms} />
    </>
  );
};
