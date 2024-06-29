import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Messages } from "@/screens/messages/Messages";

const AppStack = createNativeStackNavigator();

export const AppStackNavigation = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Messages"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="Messages" component={Messages} />
    </AppStack.Navigator>
  );
};
