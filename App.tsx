import { ThemeProvider } from "@shopify/restyle";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, View } from "react-native";

import { useLoadFonts } from "@/utils/fontConfig";
import { theme } from "@/utils/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, fontError, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container} onLayout={onLayoutRootView} />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
