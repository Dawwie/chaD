import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const StackNavigatorPresets: {
  modalNavigator: {
    screenOptions: NativeStackNavigationOptions;
    presentation: "modal" | "transparentModal";
  };
} = {
  modalNavigator: {
    screenOptions: {
      headerShown: false,
    },
    presentation: "transparentModal",
  },
};
