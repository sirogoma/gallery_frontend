import { useReducer } from 'react'
import { UserFetcher } from '../../../../fetchers/userFetcher'
import { QueryTryLoginAuthArgs } from '../../../../graphql/graphql'

type LoginStateType = {
  userId: string
  password: string
}

const initialState = {
  userId: '',
  password: ''
}

type Actions =
  | {
      type: 'INPUT_USER_ID'
      payload: Pick<LoginStateType, 'userId'>
    }
  | {
      type: 'INPUT_PASSWORD'
      payload: Pick<LoginStateType, 'password'>
    }

const reducer = (loginState: LoginStateType, action: Actions): LoginStateType => {
  switch (action.type) {
    case 'INPUT_USER_ID':
      return { ...loginState, ...action.payload }
    case 'INPUT_PASSWORD':
      return { ...loginState, ...action.payload }
    default:
      return loginState
  }
}

export const useLoginAuth = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setUserId = (value: string) => {
    dispatch({ type: 'INPUT_USER_ID', payload: { userId: value } })
  }
  const setPassword = (value: string) => {
    dispatch({ type: 'INPUT_PASSWORD', payload: { password: value } })
  }

  const tryLoginAuth = async () => {
    const obj = new UserFetcher() // このnewがだるいよね～～
    console.log(`tryLoginAuth ${state.userId},${state.password}`)

    const val: QueryTryLoginAuthArgs = {
      login_id: state.userId,
      password: state.password
    }

    const result = await obj.tryLoginAuth(val)

    if (result.data.tryLoginAuth) {
      alert('ログイン成功')
    } else {
      alert('ログイン失敗')
    }
  }

  return { state, setUserId, setPassword, tryLoginAuth }
}
