export interface SingleRoomType {
  id: string;
  name: string;
}

export interface UserType {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
}

export interface RoomsType {
  usersRooms: {
    rooms: SingleRoomType[];
    user: UserType;
  };
}

export interface RoomType {
  id: string;
  messages: Message[];
  name: string;
  user: UserType;
}
export interface Message {
  id: string;
  body: string;
  insertedAt: string;
  user: UserType;
}

export interface GetRoomDetailsResponse {
  room: RoomType | null;
}
