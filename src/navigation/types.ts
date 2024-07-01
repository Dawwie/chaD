import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NoParams = undefined;

export type AppStackParamList = {
  LOGIN: NoParams;
  SIGNUP: NoParams;
};

export type AuthStackParamList = {
  ROOMS: NoParams;
  CHAT: { roomId: string };
};
/* components Props */
export type ChatScreenRouteProp = RouteProp<AuthStackParamList, "CHAT">;

/* useNavigation */
export type RoomsScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "ROOMS"
>;

export type ChatScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "CHAT"
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "LOGIN"
>;

export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "SIGNUP"
>;
