import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackNavigatorPresets } from "./presets/StackNavigatorPresets";
import { AppStackParamList } from "./types";

import { LoginScreen } from "@/screens/login/LoginScreen";
import { SignUpScreen } from "@/screens/signup/SignUpScreen";
import { Box } from "@/utils/theme";

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppStackNavigation = () => {
  return (
    <Box flex={1}>
      <AppStack.Navigator
        initialRouteName="LOGIN"
        {...StackNavigatorPresets.modalNavigator}
      >
        <AppStack.Screen name="LOGIN" component={LoginScreen} />
        <AppStack.Screen name="SIGNUP" component={SignUpScreen} />
      </AppStack.Navigator>
    </Box>
  );
};
