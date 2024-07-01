import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { enableFreeze } from "react-native-screens";

import { AppStackNavigation } from "./AppStackNavigation";
import { AuthStackNavigation } from "./AuthStackNavigation";

import { useAuth } from "@/contexts/AuthContext";
import { useLoadFonts } from "@/utils/fontConfig";
import { Box, useTheme } from "@/utils/theme";

export const AppNavigation = () => {
  const { colors } = useTheme();
  const { fontsLoaded, fontError, onLayoutRootView } = useLoadFonts();
  const { isAuthenticated } = useAuth();

  const navigatorTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.veryLightBlue,
    },
  };

  enableFreeze();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Box flex={1} onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigatorTheme}>
        {isAuthenticated ? <AuthStackNavigation /> : <AppStackNavigation />}
      </NavigationContainer>
    </Box>
  );
};
