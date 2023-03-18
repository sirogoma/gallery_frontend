import React from 'react'
import { Button } from '../../../../components/atoms/input/button'
import { InputText } from '../../../../components/atoms/input/inputtext'
import { useLoginAuth } from './useLoginAuth'

export const LoginAuth = (): JSX.Element => {
  const { state, setUserId, setPassword, tryLoginAuth } = useLoginAuth()

  const dtClassName = 'flex h-8 basis-1/4 items-center justify-center text-gray-500'

  return (
    <>
      <div className="m-auto flex h-56 w-96 flex-row flex-wrap items-center justify-center rounded-md p-5 shadow-lg shadow-gray-300">
        <dl className="flex flex-row flex-wrap justify-evenly">
          <dt className={`${dtClassName} mb-4`}>ユーザーID</dt>
          <dd className="h-8">
            <InputText maxLength={30} value={state.userId} setValue={setUserId} styleType="login" />
          </dd>
          <dt className={dtClassName}>パスワード</dt>
          <dd className="h-8">
            <InputText maxLength={30} value={state.password} setValue={setPassword} styleType="login" />
          </dd>
        </dl>
        <Button caption="ログイン" event={tryLoginAuth} styleType="login" />
      </div>
    </>
  )
}
