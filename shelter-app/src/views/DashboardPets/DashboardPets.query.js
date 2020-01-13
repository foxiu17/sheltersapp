import gql from "graphql-tag";

export const GET_PETS = gql`
  {
    pets {
      _id
      name
      type
      age
      description
      shelter {
        voivodeship
        city
        name
      }
    }
  }
`;

export const REMOVE_PET = gql`
  mutation RemovePet($id: ID) {
    removePet(id: $id) {
      done
    }
  }
`;
