import { ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, useColors } from "@/utils/theme";

interface LoadingIndicatorProps {
  size?: number | "small" | "large";
}

export const LoadingIndicator = ({ size = "large" }: LoadingIndicatorProps) => {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={{ marginBottom: insets.top }}
    >
      <ActivityIndicator size={size} color={colors.darkestPlum} />
    </Box>
  );
};
