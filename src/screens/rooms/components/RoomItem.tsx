import { useQuery } from "@apollo/client";
import React from "react";
import { TouchableOpacity } from "react-native";

import { RoomBadge } from "./RoomBadge";
import { RoomDetailsType, SingleRoomType } from "../types/rooms";

import { GET_ROOM_DETAILS } from "@/api/rooms";
import { Avatar } from "@/components/Avatar";
import { Text, Box } from "@/utils/theme";

interface RoomItemProps {
  roomId: SingleRoomType["id"];
}

export const RoomItem = ({ roomId }: RoomItemProps) => {
  const { data } = useQuery<RoomDetailsType>(GET_ROOM_DETAILS, {
    variables: { id: roomId },
  });

  const { name, messages } = data?.room || {};
  const lastMessage = messages && messages[messages.length - 1];

  return (
    <TouchableOpacity onPress={() => console.log(`Room ${name} pressed`)}>
      <Box
        borderRadius="l"
        flexDirection="row"
        backgroundColor="white"
        padding="m"
      >
        <RoomBadge time={lastMessage?.insertedAt} />
        <Avatar />
        <Box justifyContent="center" marginLeft="m" rowGap="xs" maxWidth="65%">
          <Text variant="titleInput" numberOfLines={1}>
            {name}
          </Text>
          <Text variant="bodyText" numberOfLines={1}>
            {lastMessage?.body}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
