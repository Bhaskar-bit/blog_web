import React from 'react';
import {Logo,LogoutBtn, container} from "../index";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


/**
* @author
* @function header
**/

export const Header = (props) => {

    const authStatus = useSelector((state)=>{
        state.auth.status
    })

    const navigate = useNavigate();

    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true
        }, 
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
      },
      {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
      },
      {
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus,
      },
      {
          name: "Add Post",
          slug: "/add-post",
          active: authStatus,
      },
      ]
    
  return(
   <header >
    <container>
        <nav>
            <div>
                <Link to='/'>
                    <Logo></Logo>
                </Link>
            </div>
            <ul>
                {navItems.map((item)=>{
                    item.active ? (
                        <li key={item.name}>
                            <button
                            onClick={()=>navigate(item.slug)}
                            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                            >{item.name}</button>
                        </li>
                    ) : null
                })}
                {authStatus && (
                    <li>
                        <LogoutBtn/>
                    </li>
                )}
            </ul>
        </nav>
    </container>
   </header>
   )
  }
