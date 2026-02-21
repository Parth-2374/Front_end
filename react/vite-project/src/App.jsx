import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import UserForm from './Form/UserForm'
import AdminPage from './Form/AdminPage'

function App() {
  return (
    <BrowserRouter>
 <div>
  <h1>Hello react</h1>
<Routes>
  <Route path='/' element={<Navigate to="/user" />} />
  <Route path='/user' element={<UserForm />} />
  <Route path='/admin' element={<AdminPage />} />
</Routes>
 </div>
    </BrowserRouter>
  )
}

export default App
