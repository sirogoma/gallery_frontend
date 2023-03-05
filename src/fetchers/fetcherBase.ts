import { ApolloClient, InMemoryCache, ApolloQueryResult, DocumentNode } from '@apollo/client'

/**フェッチャー基底クラス */

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

export class FetcherBase {
  public fetch = async (gql: DocumentNode, valiables: any): Promise<ApolloQueryResult<any>> => {
    const result = await client
      .query({
        query: gql,
        variables: valiables
      })
      .then((result) => {
        return result
      })
    return result
  }
}
