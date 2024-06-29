import { ThemeProvider } from "@shopify/restyle";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { AppNavigation } from "@/navigation";
import { theme } from "@/utils/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
