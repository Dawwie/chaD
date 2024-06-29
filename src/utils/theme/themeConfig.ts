import { createTheme } from "@shopify/restyle";

import { colors } from "./colors";

export const themeConfig = createTheme({
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  colors,
  breakpoints: {},
  borderRadii: {
    xs: 2,
    s: 4,
    m: 8,
    l: 12,
    xl: 24,
    full: 9999,
  },
  zIndices: {},
  fontSize: {
    xs: 10,
    sm: 12,
    base: 16,
    lg: 22,
    xl: 28,
    "2xl": 36,
  },
  fontFamily: {
    poppinsBold: "Poppins-Bold",
    poppinsSemiBold: "Poppins-SemiBold",
    poppinsMedium: "Poppins-Medium",
    poppinsRegular: "Poppins-Regular",
    sfCompactTextRegular: "SF-Compact-Text-Regular",
    sfCompactDisplayBold: "SF-Compact-Display-Bold",
    sfCompactDisplayRegular: "SF-Compact-Display-Regular",
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
});

export type ThemeConfig = typeof themeConfig;
