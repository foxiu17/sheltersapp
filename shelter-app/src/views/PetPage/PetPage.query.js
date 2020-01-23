import gql from "graphql-tag";

export const GET_PET = gql`
  query Pets($id: ID) {
    pets(id: $id) {
      _id
      type
      age
      name
      description
      shelter {
        _id
        name
        city
        voivodeship
        description
        phone
        address
      }
    }
  }
`;