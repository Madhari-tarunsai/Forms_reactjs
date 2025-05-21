import React from 'react'
import NavBarr from './Component/NavBarr/NavBarr'
import {Routes, Route} from 'react-router-dom'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'
import DashBoard from './Component/AdminDashBoard/AdminDashBoard'
import StudentDashBoard from './Component/StudentDashBoard/StudentDashBoard'



const App = () => {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path='/studentDashBoard' element={<StudentDashBoard />}></Route>
        <Route path='/adminDashBoard' element={<DashBoard />}></Route>
        <Route path='/login' element={ <Login/>}></Route>
         <Route path='/register' element={<Registration />}></Route>
         
        
      </Routes>
    </div>
  )
}

export default App
