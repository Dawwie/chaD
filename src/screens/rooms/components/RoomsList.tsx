import { FlashList, FlashListProps } from "@shopify/flash-list";
import React from "react";

import { RoomItem } from "./RoomItem";

import { LoadingIndicator } from "@/components/LoadingIndicator";
import { SingleRoomType } from "@/api/types/rooms";
import { Box, useTheme } from "@/utils/theme";

const ESTIMATED_ITEM_SIZE = 96;

interface RoomsListProps {
  rooms: SingleRoomType[] | undefined;
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
        <Box flex={1} marginTop="3xl">
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
