import { FetcherBase } from './fetcherBase'
import { ApolloQueryResult, gql } from '@apollo/client'
import { MutationAddGalleryArgs, QueryGalleriesArgs, AddGalleryMutation } from '../graphql/graphql'

class GalleryAndWorkFetcher extends FetcherBase {
  // ギャラリー・作品取得
  // TODO:戻り型はフラグメントになる
  public getGalleryAndWorks = async (val: QueryGalleriesArgs): Promise<ApolloQueryResult<any>> => {
    // TODO:fragment
    const query = gql`
      query galleries($userId: Float) {
        galleries(user_id: $userId) {
          name
          works {
            name
            workPages {
              image_url
            }
          }
        }
      }
    `
    return await this.fetch(query, val)
  }

  /**
   * Mutation
   */

  public addGallery = async (val: MutationAddGalleryArgs): Promise<ApolloQueryResult<AddGalleryMutation>> => {
    const mutation = gql`
      mutation addGallery($name: String!, $userId: Float!) {
        addGallery(name: $name, userId: $userId) {
          id
          name
          is_active
          theme_id
          user_id
        }
      }
    `
    // TODO:ここの型安全ってどうすればいいんだろう
    const result = await this.write(mutation, val)
    return result
  }
}

// うーん
export const GalleryAndWorkFetcherIns = new GalleryAndWorkFetcher()
