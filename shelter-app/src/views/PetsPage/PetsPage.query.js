import gql from "graphql-tag";

export const GET_PETS = gql`
  query Pets(
    $shelterId: ID
    $type: String
    $voivodeship: String
    $city: String
    $age: Int
    $name: String
  ) {
    pets(
      shelterId: $shelterId
      type: $type
      voivodeship: $voivodeship
      city: $city
      age: $age
      name: $name
    ) {
      _id
      type
      name
      age
      description
      sex
      images {
        name
        publicId
      }
      shelter {
        _id
        name
        voivodeship
        city
      }
      accounts {
        _id
      }
    }
  }
`;

export const REMOVE_FAVORITE = gql`
  mutation RemoveFavorite($id: ID, $userID: ID) {
    removeFavoritePet(id: $id, userID: $userID) {
      done
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation AddFavorite($id: ID, $userID: ID) {
    addFavoritePet(id: $id, userID: $userID) {
      done
    }
  }
`;
