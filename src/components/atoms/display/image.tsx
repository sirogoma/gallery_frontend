import React from 'react'
import Image from 'next/image'

/**
 * 画像1個
 */

type props = {
  src: string
  alt?: string
  width?: number
  height?: number
  styleType: StyleTypes
}

type StyleTypes = 'login' | 'admin'

enum Styles {
  login = '',
  admin = ''
}

export const ImageParts = (props: props): JSX.Element => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={Styles[props.styleType]}
    />
  )
}
