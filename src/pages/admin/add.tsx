import React, { useState } from 'react'
import type { NextPage } from 'next'
import { AdminPageBase } from '../../templates/admin/adminPageBase'
import { AdminAdd } from '../../templates/admin/add/add'

const AdminAddPage: NextPage = () => {
  return (
    <>
      <AdminPageBase>
        <AdminAdd />
      </AdminPageBase>
    </>
  )
}

export default AdminAddPage
