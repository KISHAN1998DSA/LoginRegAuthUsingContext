import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DisplayUsers from './DisplayUsers'
import HomePage from './HomePage'
import UpdateContextData from './UpdateContextData'
import RequareAuth from './UserAuth/RequareAuth'
import SignIn from './UserAuth/SignIn'
import SignUp from './UserAuth/SignUp'
const Routing = () => {
  return (
    
    <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/users' element={<RequareAuth><DisplayUsers/></RequareAuth>}/>
        <Route path='/updateContext' element={<RequareAuth><UpdateContextData/></RequareAuth>}/>
    </Routes>
  )
}

export default Routing