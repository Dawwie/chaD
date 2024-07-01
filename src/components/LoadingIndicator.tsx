import { ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Colors, useColors } from "@/utils/theme";

interface LoadingIndicatorProps {
  size?: number | "small" | "large";
  withInsets?: boolean;
  color?: Colors;
  flexContainer?: boolean;
}

export const LoadingIndicator = ({
  withInsets,
  color,
  size = "large",
  flexContainer = true,
}: LoadingIndicatorProps) => {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  return (
    <Box
      flex={flexContainer ? 1 : undefined}
      justifyContent="center"
      alignItems="center"
      style={{ marginBottom: withInsets ? insets.top : undefined }}
    >
      <ActivityIndicator size={size} color={color ?? colors.darkestPlum} />
    </Box>
  );
};
