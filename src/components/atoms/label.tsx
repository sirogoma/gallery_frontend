import React from 'react'

/**
 * ラベル要素１個
 */

type props = {
  children: JSX.Element | JSX.Element[]
  forId: string
}

export const Label = (props: props): JSX.Element => {
  return (
    <label htmlFor={props.forId} className="flex flex-row">
      {props.children}
    </label>
  )
}
