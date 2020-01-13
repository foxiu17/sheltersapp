import gql from "graphql-tag";

export const ADD_PET = gql`
  mutation AddPet(
    $type: String
    $name: String
    $age: Int
    $description: String
    $shelter: ID
  ) {
    addPet(
      type: $type
      name: $name
      age: $age
      description: $description
      shelter: $shelter
    ) {
      name
      type
      description
    }
  }
`;

export const GET_SHELTERS = gql`
  {
    shelters {
      _id
      name
      lat
      lng
      city
      description
    }
  }
`;
