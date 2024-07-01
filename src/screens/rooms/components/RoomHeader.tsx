import React from "react";

import Rooms from "@/assets/icons/rooms.svg";
import Search from "@/assets/icons/search.svg";
import { Header } from "@/components/Header";
import { Text, Box } from "@/utils/theme";

export const RoomHeader = () => (
  <Header>
    <Box flexDirection="row" alignItems="center">
      <Text variant="heading2" color="darkPlum">
        Rooms
      </Text>
    </Box>
    <Box flexDirection="row" columnGap="s">
      <Search />
      <Rooms />
    </Box>
  </Header>
);
