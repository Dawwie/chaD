import React from "react";

import { formatDateDistnace } from "@/utils/formatDateDistnace";
import { Box, Text } from "@/utils/theme";

interface RoomBadgeProps {
  time?: string;
}

export const RoomBadge = ({ time }: RoomBadgeProps) => {
  return (
    <Box position="absolute" right={16} top={12}>
      {time ? (
        <Text variant="specialText" color="mediumGray">
          {formatDateDistnace(time)}
        </Text>
      ) : (
        <Box backgroundColor="active" borderRadius="l" height={12} width={12} />
      )}
    </Box>
  );
};
