import gql from "graphql-tag";

export const EDIT_ACCOUNT = gql`
  mutation EditAccount(
    $email: String!
    $newPassword: String
    $oldPassword: String!
  ) {
    editAccount(
      email: $email
      newPassword: $newPassword
      oldPassword: $oldPassword
    ) {
      done
    }
  }
`;
