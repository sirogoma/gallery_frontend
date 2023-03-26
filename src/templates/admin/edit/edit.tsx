import React, { ChangeEventHandler, useState } from 'react'
import { storage } from '../../../common/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const AdminEdit = () => {
  const [imgSrc, setImgSrc] = useState('')
  //TODO: Dynamic Rooting

  // Storage側のディレクトリ参照（ポインタのようなもの）
  const imagesRef = ref(storage, 'images')
  const fileName = 'mark_network_status_benkyouchu.png'
  const spaceRef = ref(imagesRef, fileName)

  // 参照URLを取得している　ガンガン叩くと怖いのでコメントアウト
  // https://firebase.google.com/docs/storage/web/upload-files?authuser=2&hl=ja
  // https://www.azukipan.com/posts/firebase-storage-get-preview/
  // const srcPath = getDownloadURL(spaceRef)
  // srcPath.then((response) => {
  //   console.log(response)
  //   setImgSrc(response)
  // })

  // console.log('getDownloadURL', srcPath)

  // ファイル登録するとアップロード動くので注意
  const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files
    if (!files || files?.length === 0) return
    const file = files[0]
    console.log('file:', file)

    const uploadFilePath = ref(imagesRef, file.name)

    console.log(uploadFilePath)

    uploadBytes(uploadFilePath, file).then((snapshot) => {
      console.log('Uploaded a blob or file!')

      const uploadFileRef = ref(snapshot.ref)
      const url = getDownloadURL(uploadFileRef)
      url.then((url) => {
        console.log(url)
        setImgSrc(url)
      })
    })
  }

  return (
    <>
      <h1 className="mb-11">（ギャラリー名）</h1>

      <label htmlFor="avatar">Choose a profile picture:</label>
      <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleFiles} />

      <img src={imgSrc} />
    </>
  )
}
