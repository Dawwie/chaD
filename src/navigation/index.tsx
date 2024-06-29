import { NavigationContainer } from "@react-navigation/native";
import { enableFreeze } from "react-native-screens";

import { AppStackNavigation } from "./AppStackNavigation";

import { useLoadFonts } from "@/utils/fontConfig";
import { Box } from "@/utils/theme";

export const AppNavigation = () => {
  const { fontsLoaded, fontError, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  enableFreeze();

  return (
    <Box flex={1} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </Box>
  );
};
