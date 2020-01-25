import gql from "graphql-tag";

export const GET_SHELTERS = gql`
  {
    shelters {
      _id
      name
      lat
      lng
      city
      images {
        name
        publicId
      }
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
