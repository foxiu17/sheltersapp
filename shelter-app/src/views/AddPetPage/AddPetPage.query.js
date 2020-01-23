import gql from "graphql-tag";

export const ADD_PET = gql`
  mutation AddPet(
    $type: String
    $name: String
    $age: Int
    $description: String
    $sex: String
    $shelter: ID
    $images: ImageInput
    
  ) {
    addPet(
      type: $type
      name: $name
      age: $age
      description: $description
      sex: $sex
      shelter: $shelter
      images: $images

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
