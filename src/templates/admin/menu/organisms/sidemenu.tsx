import Link from 'next/link'
import React from 'react'

export const SideMenu = (): JSX.Element => {
  return (
    <>
      <nav id="sidemenu" className="h-full w-56 bg-slate-200 px-9">
        <ul className="mt-36">
          <li className="mb-14">ログインユーザー名</li>
          <li className="mb-10">
            <Link href="/admin/add">＋ギャラリーを作る</Link>
          </li>
          <li className="mb-10">
            ギャラリー
            <ul>
              <li>ジャンル１</li>
              <li>ジャンル２</li>
              <li>ジャンル３</li>
            </ul>
          </li>
          <li>ユーザー設定</li>
        </ul>
      </nav>
    </>
  )
}
