import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackNavigatorPresets } from "./presets/StackNavigatorPresets";

import { MessagesScreen } from "@/screens/messages/MessagesScreen";
import { Box } from "@/utils/theme";

const AppStack = createNativeStackNavigator();

export const AppStackNavigation = () => {
  return (
    <Box flex={1} backgroundColor="lightBlue">
      <AppStack.Navigator
        initialRouteName="MESSAGES"
        {...StackNavigatorPresets.modalNavigator}
      >
        <AppStack.Screen name="MESSAGES" component={MessagesScreen} />
      </AppStack.Navigator>
    </Box>
  );
};
