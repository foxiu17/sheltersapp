import gql from "graphql-tag";

export const GET_FAVORITE_PETS = gql`
  query UserPets(
    $userID: ID
    $type: String
    $voivodeship: String
    $city: String
    $age: Int
    $name: String
  ) {
    userPets(
      userID: $userID
      type: $type
      voivodeship: $voivodeship
      city: $city
      age: $age
      name: $name
    ) {
      _id
      name
      type
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
