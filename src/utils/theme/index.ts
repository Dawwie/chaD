import {
  createBox,
  createText,
  useTheme as useRestyleTheme,
} from "@shopify/restyle";

import textVariants from "./textVariants";
import { themeConfig } from "./themeConfig";

export const theme = {
  ...themeConfig,
  textVariants,
};

export type Theme = typeof theme;
export type Colors = keyof Theme["colors"];
export type Spacing = keyof Theme["spacing"];
export type TextVariants = keyof Omit<typeof textVariants, "defaults">;

export const useTheme = () => useRestyleTheme<Theme>();
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useColors = () => useTheme().colors;
