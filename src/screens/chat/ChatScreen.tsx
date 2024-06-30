import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ChatHeader } from "./components/ChatHeader";
import { ChatMessages } from "./components/ChatMessages";

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

export const ChatScreen = ({ route }: ChatScreenProps) => {
  const insets = useSafeAreaInsets();
  const {
    params: { roomId },
  } = route;
  return (
    <DismissKeyboard>
      <Box flex={1} justifyContent="space-between">
        <ChatHeader username="The Widlarz Group" />
        <Box flex={1} style={{ marginBottom: insets.top }}>
          <ChatMessages />
        </Box>
      </Box>
    </DismissKeyboard>
  );
};
