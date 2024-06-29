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
  rooms: SingleRoomType[];
  user: UserType;
}
