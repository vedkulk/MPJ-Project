import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/Login'
import StudentPortal from './components/StudentDash'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='' element={<LoginPage></LoginPage>}/>
      <Route path='/student' element={<StudentPortal></StudentPortal>}/>
    </Routes>
    
    </>
  )
}

export default App