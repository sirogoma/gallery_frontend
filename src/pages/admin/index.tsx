import React from 'react'
import type { NextPage } from 'next'
import { AdminPageBase } from '../../templates/admin/adminPageBase'

const AdminIndex: NextPage = () => {
  return (
    <>
      <AdminPageBase>
        <div>ギャラリーデータがなにもなければ、作らせる(・・・のは、ログイン時挙動に任せる)</div>
      </AdminPageBase>
    </>
  )
}

export default AdminIndex
