import { FlashList, FlashListProps } from "@shopify/flash-list";
import React from "react";
import { ActivityIndicator } from "react-native";

import { RoomItem } from "./RoomItem";
import { SingleRoomType } from "../types/rooms";

import { LoadingIndicator } from "@/components/LoadingIndicator";
import { Box, useTheme } from "@/utils/theme";

const ESTIMATED_ITEM_SIZE = 96;

interface RoomsListProps {
  rooms: SingleRoomType[];
  isLoading?: boolean;
}

export const RoomsList = ({ rooms, isLoading }: RoomsListProps) => {
  const { spacing } = useTheme();

  const renderItem: FlashListProps<SingleRoomType>["renderItem"] = ({
    item,
  }) => <RoomItem roomId={item.id} />;

  const renderItemSeparator = () => {
    return <Box height={spacing.s} />;
  };

  const keyExtractor = (item: SingleRoomType) => item.id;

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Box flex={1} marginTop="xl">
          <FlashList
            data={rooms}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            estimatedItemSize={ESTIMATED_ITEM_SIZE}
            ItemSeparatorComponent={renderItemSeparator}
          />
        </Box>
      )}
    </>
  );
};
