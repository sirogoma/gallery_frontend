import React from 'react'

/**
 * ボタン1個
 */

type props = {
  caption: string
  event: Function
}

export const Button = (props: props): JSX.Element => {
  return (
    <button
      className="h-11 rounded-full bg-blue-600 px-8 text-white transition-all hover:bg-blue-300"
      onClick={() => props.event()}
    >
      {props.caption}
    </button>
  )
}
