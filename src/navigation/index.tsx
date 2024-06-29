import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { enableFreeze } from "react-native-screens";

import { AppStackNavigation } from "./AppStackNavigation";

import { useLoadFonts } from "@/utils/fontConfig";
import { Box, useTheme } from "@/utils/theme";

export const AppNavigation = () => {
  const { colors } = useTheme();
  const { fontsLoaded, fontError, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  enableFreeze();

  const navigatorTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.veryLightBlue,
    },
  };

  return (
    <Box flex={1} onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigatorTheme}>
        <AppStackNavigation />
      </NavigationContainer>
    </Box>
  );
};
