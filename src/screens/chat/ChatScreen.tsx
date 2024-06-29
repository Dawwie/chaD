import { ChatHeader } from "./components/ChatHeader";

import {
  ChatScreenNavigationProp,
  ChatScreenRouteProp,
} from "@/navigation/types";

interface ChatScreenProps {
  route: ChatScreenRouteProp;
  navigation: ChatScreenNavigationProp;
}

export const ChatScreen = ({ route }: ChatScreenProps) => {
  const {
    params: { roomId },
  } = route;
  return (
    <>
      <ChatHeader username="The Widlarz Group" />
    </>
  );
};
