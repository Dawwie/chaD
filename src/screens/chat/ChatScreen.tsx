import { ChatFooter } from "./components/ChatFooter";
import { ChatHeader } from "./components/ChatHeader";

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
  const {
    params: { roomId },
  } = route;
  return (
    <DismissKeyboard>
      <Box flex={1} justifyContent="space-between">
        <ChatHeader username="The Widlarz Group" />
        <ChatFooter />
      </Box>
    </DismissKeyboard>
  );
};
