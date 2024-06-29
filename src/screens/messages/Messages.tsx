import { Text, View } from "react-native";

import { useTheme } from "@/utils/theme";

export const Messages = () => {
  const { typography } = useTheme();
  return (
    <View>
      <Text style={typography.heading1}>Messages</Text>
    </View>
  );
};
