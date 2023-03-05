import React from 'react'
import { LoginAuth } from './organisms/loginAuth'

export const LoginPage = () => {
  return (
    <>
      <div className="flex" style={{ height: 'calc(100vh - 5rem)' }}>
        <LoginAuth />
      </div>
    </>
  )
}
