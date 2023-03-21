import { ApolloQueryResult } from '@apollo/client'
import { useEffect, useReducer } from 'react'
import { GalleryAndWorkFetcherIns } from '../../../fetchers/galleryAndWorkFetcher'
import { Work, Gallery, MutationAddGalleryArgs } from '../../../graphql/graphql'

type RemoveGalleryType = 'user' | 'works'

// ギャラリーを１つと作品を複数追加する
type AdminAddStateType = {
  inputGalleryName: string
  gallery: Omit<Gallery, RemoveGalleryType>
  works?: Work[] | null // WorkPagesはこれの子供 初期値Null、戻り値undefinedありえる
}

const initialState: AdminAddStateType = {
  inputGalleryName: '',
  gallery: {
    id: 0,
    name: '',
    is_active: false,
    theme_id: 0,
    user_id: 0
  },
  works: null
}

type Actions =
  | {
      type: 'INPUT_GALLERY_NAME'
      payload: Pick<AdminAddStateType, 'inputGalleryName'>
    }
  | {
      type: 'SET_GALLERY'
      payload: Omit<Gallery, RemoveGalleryType>
    }

const reducer = (AdminAddState: AdminAddStateType, action: Actions): AdminAddStateType => {
  switch (action.type) {
    case 'INPUT_GALLERY_NAME':
      return { ...AdminAddState, ...action.payload }
    case 'SET_GALLERY':
      return { ...AdminAddState, gallery: action.payload }
    default:
      return AdminAddState
  }
}

export const useAdminAdd = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setInputGalleryName = (value: string): void => {
    dispatch({ type: 'INPUT_GALLERY_NAME', payload: { inputGalleryName: value } })
  }
  const setGallery = async (value: Omit<Gallery, RemoveGalleryType>) => {
    dispatch({ type: 'SET_GALLERY', payload: { ...value } })
  }

  // ギャラリーを登録し、galleryIDをStateにセット
  const addGalleryAndSetGallery = async (): Promise<void> => {
    const parms: MutationAddGalleryArgs = {
      name: state.inputGalleryName,
      userId: 5 // TODO:動的にUserIdにする
    }
    const result = await GalleryAndWorkFetcherIns.addGallery(parms)
    setGallery(result.data.addGallery)
  }

  return { state, setInputGalleryName, setGallery, addGalleryAndSetGallery }
}
