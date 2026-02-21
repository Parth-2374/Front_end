import React from 'react'
import Index from './Index'
import UserForm from './UserForm'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'

function Main() {
  return (
    <div>
      {/* <Index /> */}
      {/* <Crypto.js / > */}
      <UserForm />
      <AdminDashboard />
      <AdminLogin />
    </div>
  )
}

export default Main
