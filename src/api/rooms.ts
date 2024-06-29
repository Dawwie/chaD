import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query GetRooms {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;

export const GET_ROOM_DETAILS = gql`
  query getRoomDetails($id: ID!) {
    room(id: $id) {
      name
      messages {
        body
        insertedAt
      }
    }
  }
`;