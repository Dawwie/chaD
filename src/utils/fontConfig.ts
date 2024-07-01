import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export const useLoadFonts = () => {
  const [fontsLoaded, fontError] = Font.useFonts({
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "SF-Compact-Text-Regular": require("@/assets/fonts/SF-Compact-Text-Regular.otf"),
    "SF-Compact-Display-Bold": require("@/assets/fonts/SF-Compact-Display-Bold.otf"),
    "SF-Compact-Display-Regular": require("@/assets/fonts/SF-Compact-Display-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return {
    fontsLoaded,
    fontError,
    onLayoutRootView,
  };
};
