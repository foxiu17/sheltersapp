import gql from "graphql-tag";

export const LOG_IN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userID
      token
      tokenExpiration
      type
    }
  }
`;
