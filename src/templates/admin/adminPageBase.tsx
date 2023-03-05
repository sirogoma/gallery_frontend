import React from 'react'

/**
 * 管理画面ページ大枠
 */

type props = {
  children: JSX.Element | JSX.Element[]
}

export const AdminPageBase = (props: props): JSX.Element => {
  return (
    <>
      <div id="wrap" className="m-10">
        {props.children}
      </div>
    </>
  )
}
