import gql from 'graphql-tag';

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      password
      email
    }
  }
`;