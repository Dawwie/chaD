import React from "react";

import { Box, Text } from "@/utils/theme";

interface Props {
  time?: string;
}

export const RoomBadge: React.FC<Props> = ({ time }) => {
  return (
    <Box position="absolute" right={16} top={12}>
      {time ? (
        <Text variant="specialText" color="mediumGray">
          {time}
        </Text>
      ) : (
        <Box backgroundColor="active" borderRadius="l" height={12} width={12} />
      )}
    </Box>
  );
};
