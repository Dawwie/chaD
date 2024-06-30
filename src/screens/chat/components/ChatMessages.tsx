import { useCallback, useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

import { ChatBubble } from "./ChatBubble";
import { ChatFooter } from "./ChatFooter";

import { Avatar } from "@/components/Avatar";
import { Message } from "@/types/rooms";

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: () => <Avatar size="s" />,
        },
      },
      {
        _id: Math.floor(Math.random() * 1000000),
        text: "Test message",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "You",
          avatar: () => <Avatar />,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, messages);
    });
    setText("");
  }, []);

  const handleSend = (messageText: string) => {
    const newMessage: IMessage = {
      _id: Math.floor(Math.random() * 1000000),
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "You",
        avatar: () => <Avatar />,
      },
    };
    onSend([newMessage]);
  };

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
