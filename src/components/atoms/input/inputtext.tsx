import React from 'react'

/**
 * テキストボックス1個
 */

type props = {
  maxLength: number
  value: string
  setValue: Function
  styleType: StyleTypes
  placeholder?: string
}

type StyleTypes = 'login' | 'admin'

enum Styles {
  login = 'border border-solid border-gray-400 px-2 py-1',
  admin = 'mb-3 w-full border border-t-0 border-l-0 border-r-0 border-black py-4'
}

export const InputText = (props: props): JSX.Element => {
  return (
    <input
      type="text"
      maxLength={props.maxLength}
      className={Styles[props.styleType]}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(e) => props.setValue(e.target.value)}
    />
  )
}
