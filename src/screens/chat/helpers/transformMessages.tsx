import { Message } from "@/types/rooms";

export const transformMessages = (apiMessages: Message[]) => {
  return apiMessages.map((message) => ({
    _id: message.id,
    text: message.body,
    createdAt: new Date(message.insertedAt),
    user: {
      _id: message.user.id,
      name: `${message.user.firstName} ${message.user.lastName}`,
    },
  }));
};
