import React from 'react'
import type { NextPage } from 'next'
import { LoginPage } from '../../templates/admin/login/login'
import { AdminPageBase } from '../../templates/admin/adminPageBase'

const Login: NextPage = () => {
  return (
    <>
      <AdminPageBase>
        <LoginPage />
      </AdminPageBase>
    </>
  )
}

export default Login
