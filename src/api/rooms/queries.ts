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
