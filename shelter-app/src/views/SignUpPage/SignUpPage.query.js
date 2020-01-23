import gql from "graphql-tag";

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $email: String!
    $name: String
    $surname: String
    $password: String!
  ) {
    createAccount(
      email: $email
      name: $name
      surname: $surname
      password: $password
    ) {
      password
      email
      name
      surname
    }
  }
`;
