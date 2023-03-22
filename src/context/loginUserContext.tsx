import React from 'react'

type LoginContextContextType = {
  user_id: number
  name: string
}

export const initialContext: LoginContextContextType = {
  user_id: 5, // TODO:固定値
  name: 'はすぼー'
}

export const loginUserContext = React.createContext(initialContext)

/** TODO:Cookieから認証確認して、ログインOKならユーザー情報フェッチするやつ */
