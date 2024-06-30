import { GiftedChat } from "react-native-gifted-chat";

import { ChatBubble } from "./ChatBubble";
import { ChatFooter } from "./ChatFooter";
import { useChatMessages } from "../hooks/useChatMessages";

import { Message } from "@/types/rooms";

interface ChatMessagesProps {
  messagesList?: Message[];
}

export const ChatMessages = ({ messagesList = [] }: ChatMessagesProps) => {
  const { messages, text, setText, handleSend } = useChatMessages({
    messagesList,
  });

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
        _id: 1,
      }}
      renderInputToolbar={renderCustomInputToolbar}
      renderBubble={(props) => <ChatBubble {...props} />}
    />
  );
};
