import gql from "graphql-tag";

export const GET_SHELTER = gql`
  query Shelters($id: ID) {
    shelters(id: $id) {
      _id
      name
      voivodeship
      city
      description
      phone
      address
      email
      images {
        name
        publicId
      }
      pets {
        _id
        name
      }
    }
  }
`;

export const SEND_EMAIL = gql`
  mutation SendEmail(
    $userEmail: String!
    $shelterEmail: String!
    $subject: String!
    $message: String!
  ) {
    sendEmail(
      userEmail: $userEmail
      shelterEmail: $shelterEmail
      subject: $subject
      message: $message
    ) {
      done
    }
  }
`;
