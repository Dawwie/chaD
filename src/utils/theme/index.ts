import {
  createBox,
  createText,
  useTheme as useRestyleTheme,
} from "@shopify/restyle";

import { themeConfig } from "./themeConfig";
import typography from "./typography";

export const theme = {
  ...themeConfig,
  typography,
};

export type Theme = typeof theme;
export type Colors = keyof Theme["colors"];
export type Spacing = keyof Theme["spacing"];
export type Typography = keyof Omit<typeof typography, "defaults">;

export const useTheme = () => useRestyleTheme<Theme>();
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useColors = () => useTheme().colors;
