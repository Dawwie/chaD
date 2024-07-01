import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { getItemAsync } from "expo-secure-store";
import { useEffect, useRef, useState } from "react";
import { enableFreeze } from "react-native-screens";

import { AppStackNavigation } from "./AppStackNavigation";
import { AuthStackNavigation } from "./AuthStackNavigation";

import { useLoadFonts } from "@/utils/fontConfig";
import { Box, useTheme } from "@/utils/theme";

export const AppNavigation = () => {
  const { colors } = useTheme();
  const { fontsLoaded, fontError, onLayoutRootView } = useLoadFonts();
  const [isUserLogged, setIsUserLogged] = useState(false);

  const navigatorTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.veryLightBlue,
    },
  };
  enableFreeze();

  const navigationRef: any = useRef();
  const routeNameRef = useRef();

  useEffect(() => {
    const checkIsUserLogged = async () => {
      const token = await getItemAsync("token");
      return token ? setIsUserLogged(true) : setIsUserLogged(false);
    };
    checkIsUserLogged();
  }, [setIsUserLogged]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Box flex={1} onLayout={onLayoutRootView}>
      <NavigationContainer
        theme={navigatorTheme}
        ref={navigationRef}
        onReady={() => {
          if (routeNameRef) {
            routeNameRef.current = navigationRef.current.getCurrentRoute();
          }
        }}
        onStateChange={() => {
          const currentRouteName = navigationRef.current.getCurrentRoute();
          routeNameRef.current = currentRouteName;
        }}
      >
        {isUserLogged ? <AuthStackNavigation /> : <AppStackNavigation />}
      </NavigationContainer>
    </Box>
  );
};
