import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackNavigatorPresets } from "./presets/StackNavigatorPresets";

import { Messages } from "@/screens/messages/Messages";
import { Box } from "@/utils/theme";

const AppStack = createNativeStackNavigator();

export const AppStackNavigation = () => {
  return (
    <Box flex={1} backgroundColor="lightBlue">
      <AppStack.Navigator
        initialRouteName="MESSAGES"
        {...StackNavigatorPresets.modalNavigator}
      >
        <AppStack.Screen name="MESSAGES" component={Messages} />
      </AppStack.Navigator>
    </Box>
  );
};
