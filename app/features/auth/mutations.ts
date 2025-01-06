import { gql } from "@apollo/client";
import { pageInfoFragment } from "~/features/auth/fragments/pageInfo";
import { fragmentUser } from "~/features/auth/fragments/user";

export const tokenAuthMutation = gql`
  ${fragmentUser}
  ${pageInfoFragment}
  mutation TokenAuth(
    $email: String!
    $password: String!
    $after: String
    $before: String
    $last: Int
  ) {
    tokenCreate(email: $email, password: $password) {
      errors: accountErrors {
        code
        field
        message
        user {
          id
          email
        }
      }
      csrfToken
      token
      user {
        ...User
        malls(after: $after, before: $before, first: 100, last: $last) {
          edges {
            node {
              id
              name
            }
          }
          totalCount
          pageInfo {
            ...PageInfoFragment
          }
        }
      }
    }
  }
`;

export const tokenVerifyMutation = gql`
  ${fragmentUser}
  ${pageInfoFragment}
  mutation VerifyToken(
    $token: String!
    $after: String
    $before: String
    $last: Int
  ) {
    tokenVerify(token: $token) {
      payload
      user {
        ...User
        malls(after: $after, before: $before, first: 100, last: $last) {
          edges {
            node {
              id
              name
            }
          }
          totalCount
          pageInfo {
            ...PageInfoFragment
          }
        }
      }
    }
  }
`;
