import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';



/**
* @author
* @function LogoutBtn
**/

export const LogoutBtn = (props) => {

    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return(
    <button></button>
   )
  }
