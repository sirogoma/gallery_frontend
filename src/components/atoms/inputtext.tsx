import React from 'react'

/**
 * テキストボックス1個
 */

type props = {
  maxLength: number
  value: string
  setValue: Function
}

export const InputText = (props: props): JSX.Element => {
  return (
    <input
      type="text"
      maxLength={props.maxLength}
      className="border border-solid border-gray-400 px-2 py-1"
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  )
}
