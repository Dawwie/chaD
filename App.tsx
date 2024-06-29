import { ThemeProvider } from "@shopify/restyle";
import * as SplashScreen from "expo-splash-screen";

import { AppNavigation } from "@/navigation";
import { theme } from "@/utils/theme";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
}
