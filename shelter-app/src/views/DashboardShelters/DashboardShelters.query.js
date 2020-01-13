import gql from "graphql-tag";

export const GET_SHELTERS = gql`
  {
    shelters {
      _id
      name
      lat
      lng
      city
      description
      voivodeship
      pets {
        type
        name
        age
        description
      }
    }
  }
`;

export const REMOVE_SHELTER = gql`
  mutation RemoveShelter($id: ID) {
    removeShelter(id: $id) {
      done
    }
  }
`;
