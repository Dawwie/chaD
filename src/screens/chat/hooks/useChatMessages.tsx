import { useState, useEffect, useCallback } from "react";
import { IMessage, GiftedChat } from "react-native-gifted-chat";
import uuid from "react-native-uuid";

import { transformMessages } from "../helpers/transformMessages";

import { useUser } from "@/contexts/UserProvider";
import { Message } from "@/types/rooms";

interface ChatMessagesHookProps {
  messagesList: Message[];
}

export const useChatMessages = ({ messagesList }: ChatMessagesHookProps) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const transformedMessages = transformMessages(messagesList);
    setMessages(transformedMessages);
  }, [messagesList]);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
    setText("");
  }, []);

  const handleSend = (messageText: string) => {
    const newMessage: IMessage = {
      _id: uuid.v4().toString(),
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: user!.id,
        name: `${user?.firstName} ${user?.lastName}`,
      },
    };
    onSend([newMessage]);
  };
  return {
    messages,
    text,
    setText,
    handleSend,
  };
};
