import gql from "graphql-tag";

export const GET_SHELTERS = gql`
  query Shelters($name: String, $voivodeship: String, $city: String) {
    shelters(name: $name, voivodeship: $voivodeship, city: $city) {
      _id
      name
      voivodeship
      city
      description
      phone
      address
      images {
        name
        publicId
      }
      pets {
        name
      }
    }
  }
`;
