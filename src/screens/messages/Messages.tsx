import { Text } from "react-native";

import { Box, useTheme } from "@/utils/theme";

export const Messages = () => {
  const { typography } = useTheme();
  return (
    <Box flex={1}>
      <Text style={typography.heading1}>Messages</Text>
    </Box>
  );
};
