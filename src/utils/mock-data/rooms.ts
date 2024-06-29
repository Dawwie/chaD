import { RoomsType } from "@/screens/rooms/types/rooms";

export const mockData: RoomsType = {
  rooms: [
    { id: "room1", name: "Conference Room" },
    { id: "room2", name: "Meeting Room" },
    { id: "room3", name: "Break Room" },
  ],
  user: {
    email: "john.doe@example.com",
    firstName: "John",
    id: "user1",
    lastName: "Doe",
    role: "Manager",
  },
};
