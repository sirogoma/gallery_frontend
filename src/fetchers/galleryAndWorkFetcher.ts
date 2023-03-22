import { FetcherBase } from './fetcherBase'
import { ApolloQueryResult, DocumentNode, gql } from '@apollo/client'
import { MutationAddGalleryArgs, QueryGalleriesArgs, AddGalleryMutation, GalleriesQuery } from '../graphql/graphql'

class GalleryAndWorkFetcher extends FetcherBase {
  // ギャラリー・作品取得
  // TODO:戻り型はフラグメントになる
  public getGalleryAndWorks = async (
    val: QueryGalleriesArgs,
    fragment: DocumentNode,
    fragmentName: string
  ): Promise<ApolloQueryResult<GalleriesQuery>> => {
    const query = gql`
      query galleries($userId: Float) {
        galleries(user_id: $userId) {
          ...${fragmentName}
        }
      }
      ${fragment}
    `
    return await this.fetch(query, val)
  }

  /**
   * Mutation
   */

  public addGallery = async (
    val: MutationAddGalleryArgs,
    fragment: DocumentNode,
    fragmentName: string
  ): Promise<ApolloQueryResult<AddGalleryMutation>> => {
    const mutation = gql`
      mutation addGallery($name: String!, $userId: Float!) {
        addGallery(name: $name, userId: $userId) {
          ...${fragmentName}
        }
      }
      ${fragment}
    `
    // TODO:ここの型安全ってどうすればいいんだろう
    const result = await this.write(mutation, val)
    return result
  }
}

// うーん
export const GalleryAndWorkFetcherIns = new GalleryAndWorkFetcher()
