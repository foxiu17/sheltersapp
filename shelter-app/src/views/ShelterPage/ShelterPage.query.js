import gql from "graphql-tag";

export const GET_SHELTER = gql`
  query Shelters($id: ID) {
    shelters(id: $id) {
      _id
      name
      voivodeship
      city
      description
      pets {
        _id
        name
      }
    }
  }
`;
