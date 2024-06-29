import { FlashList, FlashListProps } from "@shopify/flash-list";
import React from "react";

import { RoomItem } from "./RoomItem";
import { SingleRoomType } from "../types/rooms";

import { Box, useTheme } from "@/utils/theme";

const ESTIMATED_ITEM_SIZE = 96;

interface RoomsListProps {
  rooms: SingleRoomType[];
}

export const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
  const { spacing } = useTheme();

  const renderItem: FlashListProps<SingleRoomType>["renderItem"] = ({
    item,
  }) => <RoomItem room={item} />;

  const renderItemSeparator = () => {
    return <Box height={spacing.s} />;
  };

  const keyExtractor = (item: SingleRoomType) => item.id;

  return (
    <Box flex={1} marginTop="xl">
      <FlashList
        data={rooms}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={ESTIMATED_ITEM_SIZE}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </Box>
  );
};
