import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackNavigatorPresets } from "./presets/StackNavigatorPresets";

import { RoomsScreen } from "@/screens/rooms/RoomsScreen";
import { Box } from "@/utils/theme";

const AppStack = createNativeStackNavigator();

export const AppStackNavigation = () => {
  return (
    <Box flex={1} backgroundColor="lightBlue">
      <AppStack.Navigator
        initialRouteName="ROOMS"
        {...StackNavigatorPresets.modalNavigator}
      >
        <AppStack.Screen name="ROOMS" component={RoomsScreen} />
      </AppStack.Navigator>
    </Box>
  );
};
