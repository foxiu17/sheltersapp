import gql from "graphql-tag";

export const ADD_SHELTER = gql`
  mutation AddShelter(
    $name: String
    $voivodeship: String
    $city: String
    $phone: String
    $address: String
    $lat: String
    $lng: String
    $description: String
    $images: String
  ) {
    addShelter(
      name: $name
      voivodeship: $voivodeship
      city: $city
      phone: $phone
      address: $address
      lat: $lat
      lng: $lng
      description: $description
      images: $images
    ) {
      name
      city
      description
    }
  }
`;
