import React from 'react'
import { SideMenu } from './menu/organisms/sidemenu'

/**
 * 管理画面ページ大枠
 */

type props = {
  children: JSX.Element | JSX.Element[]
}

export const AdminPageBase = (props: props): JSX.Element => {
  return (
    <>
      <div id="wrap" className="flex h-screen w-full">
        <SideMenu />
        <div id="innerwrap" className="pt-20 pl-14">
          <article className="content">{props.children}</article>
        </div>
      </div>
    </>
  )
}
