import React from 'react'

/**
 * ボタン1個
 */

type props = {
  caption: string
  event: Function
  styleType: StyleTypes
}

type StyleTypes = 'login' | 'admin'

enum Styles {
  login = 'h-11 rounded-full bg-blue-600 px-8 text-white transition-all hover:bg-blue-300',
  admin = 'ml-auto w-fit bg-slate-200 p-3'
}

export const Button = (props: props): JSX.Element => {
  return (
    <button className={Styles[props.styleType]} onClick={() => props.event()}>
      {props.caption}
    </button>
  )
}
