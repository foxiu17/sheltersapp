import gql from "graphql-tag";

export const ADD_SHELTER = gql`
  mutation AddShelter(
    $name: String
    $voivodeship: String
    $city: String
    $lat: String
    $lng: String
    $description: String
  ) {
    addShelter(
      name: $name
      voivodeship: $voivodeship
      city: $city
      lat: $lat
      lng: $lng
      description: $description
    ) {
      name
      city
      description
    }
  }
`;
