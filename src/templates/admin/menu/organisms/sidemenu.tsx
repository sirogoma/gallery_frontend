import { gql } from '@apollo/client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { loginUserContext } from '../../../../context/loginUserContext'
import { GalleryAndWorkFetcherIns } from '../../../../fetchers/galleryAndWorkFetcher'
import { QueryGalleriesArgs } from '../../../../graphql/graphql'

export const SideMenu = (): JSX.Element => {
  const context = useContext(loginUserContext)

  return (
    <>
      <nav id="sidemenu" className="h-full w-56 bg-slate-200 px-9">
        <ul className="mt-36">
          <li className="mb-14">welcome back {context.name}</li>
          <li className="mb-10">
            <Link href="/admin/add">＋ギャラリーを作る</Link>
          </li>
          <GalleryList />
          <li>ユーザー設定</li>
        </ul>
      </nav>
    </>
  )
}

/**
 * 以下、べっちゃべちゃに書いてるので分けること・・・・
 */
export const useGalleryList = () => {
  const galleryListByUserFlagment = gql`
    fragment galleryListByUser on Gallery {
      id
      name
      is_active
    }
  `

  const getGalleryList = async (stateSetter: any) => {
    const val: QueryGalleriesArgs = {
      user_id: 5
    }

    const result = await GalleryAndWorkFetcherIns.getGalleryAndWorks(
      val,
      galleryListByUserFlagment,
      'galleryListByUser'
    )

    stateSetter(result.data.galleries)
  }

  return { getGalleryList }
}

const initialState = [
  {
    id: 0,
    name: 'gallery'
  }
]

const GalleryList = (): JSX.Element => {
  const { getGalleryList } = useGalleryList()
  const [galleryList, setGalleryList] = useState(initialState)

  getGalleryList(setGalleryList)

  return (
    <li className="mb-10">
      ギャラリー
      <ul>
        {galleryList.map((gallery) => {
          return (
            <li
              className="ml-3 text-xs
            "
              key={gallery.id}
            >
              {gallery.name}
            </li>
          )
        })}
      </ul>
    </li>
  )
}
