import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

import { RoomBadge } from "./RoomBadge";
import { SingleRoomType } from "../types/rooms";

import { Avatar } from "@/components/Avatar";
import { Text, Box } from "@/utils/theme";

interface RoomItemProps {
  room: SingleRoomType;
}

export const RoomItem: React.FC<RoomItemProps> = ({ room: { name } }) => {
  return (
    <TouchableOpacity onPress={() => console.log(`Room ${name} pressed`)}>
      <Box
        borderRadius="l"
        flexDirection="row"
        backgroundColor="white"
        padding="m"
      >
        <RoomBadge />
        <Avatar />
        <Box justifyContent="center" marginLeft="m" rowGap="xs" maxWidth="65%">
          <Text variant="titleInput" numberOfLines={1}>
            {name}
          </Text>
          <Text variant="bodyText" numberOfLines={1}>
            {name}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
