import { gql } from "@apollo/client";
import { pageInfoFragment } from "~/features/auth/fragments/pageInfo";
import { fragmentUser } from "~/features/auth/fragments/user";

export const userDetailsQuery = gql`
  ${fragmentUser}
  ${pageInfoFragment}
  query UserDetails($id: ID!, $after: String, $before: String, $last: Int) {
    user(id: $id) {
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
`;
