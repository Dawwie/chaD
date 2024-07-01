import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query GetRooms {
    usersRooms {
      rooms {
        id
        name
      }
      user {
        email
        firstName
        id
        lastName
        role
      }
    }
  }
`;

export const GET_ROOM_DETAILS = gql`
  query GetRoomDetails($id: ID!) {
    room(id: $id) {
      name
      messages {
        id
        body
        insertedAt
        user {
          firstName
          id
          lastName
        }
      }
    }
  }
`;