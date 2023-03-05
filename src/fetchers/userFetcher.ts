import { FetcherBase } from './fetcherBase'
import { ApolloQueryResult, gql } from '@apollo/client'
import { QueryTryLoginAuthArgs, TryLoginAuthQuery } from '../graphql/graphql'

export class UserFetcher extends FetcherBase {
  public tryLoginAuth = async (val: QueryTryLoginAuthArgs): Promise<ApolloQueryResult<TryLoginAuthQuery>> => {
    const query = gql`
      query TryLoginAuth($password: String!, $login_id: String!) {
        tryLoginAuth(password: $password, login_id: $login_id)
      }
    `
    const result: ApolloQueryResult<TryLoginAuthQuery> = await this.fetch(query, val)

    return result
  }
}
