import { useMutation } from "@apollo/client";
import { useState, useEffect, useCallback } from "react";
import { IMessage, GiftedChat } from "react-native-gifted-chat";
import uuid from "react-native-uuid";

import { transformMessages } from "../helpers/transformMessages";

import { SEND_MESSAGE } from "@/api/queries/chat";
import { Message } from "@/api/types/rooms";
import { useUser } from "@/contexts/UserProvider";

interface ChatMessagesHookProps {
  messagesList: Message[];
  roomId: string;
}

export const useChatMessages = ({
  messagesList,
  roomId,
}: ChatMessagesHookProps) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const { user } = useUser();
  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    const transformedMessages = transformMessages(messagesList);
    setMessages(transformedMessages);
  }, [messagesList]);

  const onSend = useCallback(async (messages: IMessage[] = []) => {
    const body = messages[0].text;
    try {
      await sendMessage({ variables: { body, roomId } });
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
      );
      setText("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
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
