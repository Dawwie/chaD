import { useQuery } from "@apollo/client";
import { LogBox } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ChatHeader } from "./components/ChatHeader";
import { ChatMessages } from "./components/ChatMessages";

import { GET_ROOM_DETAILS } from "@/api/queries/rooms";
import { GetRoomDetailsResponse } from "@/api/types/rooms";
import { DismissKeyboard } from "@/components/DismissKeyboard";
import {
  ChatScreenNavigationProp,
  ChatScreenRouteProp,
} from "@/navigation/types";
import { Box } from "@/utils/theme";

interface ChatScreenProps {
  route: ChatScreenRouteProp;
  navigation: ChatScreenNavigationProp;
}

/*
COMMENT: ignore GiftedChat warning regarding defaultProps
TODO: remove this once the library fixes the issue (https://github.com/FaridSafi/react-native-gifted-chat/issues/2498)
*/
LogBox.ignoreLogs([
  "Warning: Avatar: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",
]);

export const ChatScreen = ({ route }: ChatScreenProps) => {
  const insets = useSafeAreaInsets();
  const {
    params: { roomId },
  } = route;

  const { data } =
    useQuery<GetRoomDetailsResponse>(GET_ROOM_DETAILS, {
      variables: { id: roomId },
      pollInterval: 500,
    }) || {};

  return (
    <DismissKeyboard>
      <Box flex={1} justifyContent="space-between">
        <ChatHeader username={data?.room?.name} />
        <Box flex={1} style={{ marginBottom: insets.top }}>
          <ChatMessages roomId={roomId} messagesList={data?.room?.messages} />
        </Box>
      </Box>
    </DismissKeyboard>
  );
};
