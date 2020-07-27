import { gql } from '@apollo/client/core';

export const userRequests = {
  query: {
    users: gql`
      query {
        users {
          hits {
            id
            email
            fullname
            username
          }
          nbHits
        }
      }
    `,
  },
  mutation: {
    createUser: gql`
      mutation userCreate($data: UserInput) {
        userCreate(data: $data) {
          id
          uuid
          email
          fullname
          username
        }
      }
    `,
  },
  subscription: {
    onUserCreated: gql`
      subscription onUserCreated {
        userCreated {
          id
          uuid
          email
          fullname
          username
        }
      }
    `,
  }
};
