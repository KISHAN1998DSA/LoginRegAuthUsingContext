import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './Auth'
const RequareAuth = ({children}) => {
    const auth=useAuth();
    //console.log(auth.user)
    if(!auth.isAuth)
    {
        return <Navigate to="/signin"/>
    }
  return children
    
}

export default RequareAuth