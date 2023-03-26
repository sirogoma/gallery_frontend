import React from 'react'
import type { NextPage } from 'next'
import { AdminPageBase } from '../../templates/admin/adminPageBase'
import { AdminEdit } from '../../templates/admin/edit/edit'

const AdminEditPage: NextPage = () => {
  return (
    <>
      <AdminPageBase>
        <AdminEdit />
      </AdminPageBase>
    </>
  )
}

export default AdminEditPage
