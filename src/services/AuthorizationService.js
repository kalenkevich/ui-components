import gql from 'graphql-tag';
import UserFragment from '../fragments/userFragment';
import makeBackendGraphQLConnector from './BackendGraphQLConnector';

class AuthorizationService {
  constructor(authUrl) {
    this.backendGraphQLConnector = makeBackendGraphQLConnector(authUrl);
  }

  async authorize() {
    const { authorize: user } = await this.backendGraphQLConnector.query({
      query: gql`
        query Authorize {
          authorize {
            ...UserFragment
          }
        }
        ${UserFragment}
      `,
    });

    return user;
  }

  async signUp(name, email, password) {
    const { signUp: user } = await this.backendGraphQLConnector.mutate({
      variables: {
        signUpData: {
          name,
          email,
          password,
        },
      },
      mutation: gql`
        mutation SignUp($signUpData: UserSignUpInput!) {
          signUp(signUpData: $signUpData) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `,
    });

    return user;
  }

  async signIn(email, password) {
    const { signIn: user } = await this.backendGraphQLConnector.mutate({
      variables: {
        signInData: {
          email,
          password,
        },
      },
      mutation: gql`
        mutation SignIn($signInData: UserSignInInput!) {
          signIn(signInData: $signInData) {
            ...UserFragment
          }
        }
        ${UserFragment}
      `,
    });

    return user;
  }

  async signOut() {
    const { signOut: result } = await this.backendGraphQLConnector.query({
      query: gql`
        query SignOut {
        signOut
      }
      `,
    });

    return result;
  }
}

export default authUrl => new AuthorizationService(authUrl);
