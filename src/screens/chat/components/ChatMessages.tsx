import { GiftedChat } from "react-native-gifted-chat";

import { ChatBubble } from "./ChatBubble";
import { ChatFooter } from "./ChatFooter";
import { useChatMessages } from "../hooks/useChatMessages";

import { useUser } from "@/contexts/UserProvider";
import { Message } from "@/types/rooms";

interface ChatMessagesProps {
  messagesList?: Message[];
}

export const ChatMessages = ({ messagesList = [] }: ChatMessagesProps) => {
  const { messages, text, setText, handleSend } = useChatMessages({
    messagesList,
  });
  const { user } = useUser();

  const renderCustomInputToolbar = (props: any) => (
    <ChatFooter
      value={text}
      onChangeText={setText}
      onSendMessage={handleSend}
    />
  );

  return (
    <GiftedChat
      messages={messages}
      user={{
        _id: user!.id,
      }}
      renderInputToolbar={renderCustomInputToolbar}
      renderBubble={(props) => <ChatBubble {...props} />}
    />
  );
};
