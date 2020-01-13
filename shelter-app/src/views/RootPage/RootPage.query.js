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
      pets {
        type
        name
        age
        description
      }
    }
  }
`;
