import React, { useState } from 'react'
import { InputText } from '../../../components/atoms/input/inputtext'
import { Button } from '../../../components/atoms/input/button'
import { ImageParts } from '../../../components/atoms/display/image'
import { useAdminAdd } from './useAdd'

export const AdminAdd = () => {
  // TODO: Workも同じdispatcherにしていいのか？
  const [workName, setWorkName] = useState('')

  const { state, addGalleryAndSetGallery, setInputGalleryName } = useAdminAdd()

  // TODO:テンプレートにべちゃっと書かずに適宜organismに分割？
  return (
    <>
      <h1 className="mb-11">ギャラリーをつくる</h1>
      <section className="mb-12 flex flex-col">
        <h2 className="mb-10">ギャラリーに名前をつけてください </h2>
        <InputText
          maxLength={30}
          value={state.inputGalleryName}
          setValue={setInputGalleryName}
          placeholder="UserName'S Gallery"
          styleType="admin"
        />
        <Button caption="この名前にする" event={addGalleryAndSetGallery} styleType="admin" />
      </section>

      <section>
        <p>
          inputGalleryName: {state.inputGalleryName}
          <br />
          created_gallery_id:{state.gallery.id}
          created_gallery_id:{state.gallery.name}
        </p>
      </section>

      <section>
        <h2>作品を登録</h2>
        <div className="flex flex-col">
          {/*登録候補画像が１件もなければ、登録ボタンを配置。登録候補画像が１件以上あればサムネイルを表示 */}
          <figure>
            <ImageParts src="" alt="" width={100} height={100} styleType="admin" />
          </figure>

          <figcaption>
            <InputText maxLength={30} value={workName} setValue={setWorkName} placeholder="Picture" styleType="admin" />
          </figcaption>
          <Button caption="＋作品を追加する" event={() => console.log()} styleType="admin" />
        </div>
      </section>
    </>
  )
}
