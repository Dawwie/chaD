import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackNavigatorPresets } from "./presets/StackNavigatorPresets";
import { AuthStackParamList } from "./types";

import { ChatScreen } from "@/screens/chat/ChatScreen";
import { RoomsScreen } from "@/screens/rooms/RoomsScreen";
import { Box } from "@/utils/theme";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigation = () => {
  return (
    <Box flex={1} backgroundColor="lightBlue">
      <AuthStack.Navigator
        initialRouteName="ROOMS"
        {...StackNavigatorPresets.modalNavigator}
      >
        <AuthStack.Screen name="ROOMS" component={RoomsScreen} />
        <AuthStack.Screen name="CHAT" component={ChatScreen} />
      </AuthStack.Navigator>
    </Box>
  );
};
