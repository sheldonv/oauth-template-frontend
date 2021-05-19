import React, {useContext} from 'react'
import Styles from './NavBar.module.css';
import {Link} from 'react-router-dom'
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';
import { IUser } from '../../types/mainTypes';

const NavBar = () => {
    const userObject = useContext(myContext) as IUser
    const logout = () => {
        axios.get("https://oauth-template.herokuapp.com/auth/logout", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if(res.data === "done"){
                window.location.href = "/"
            }
        })
    }
    return (
        <div className={Styles.navBarWrapper}>
            <ul className={Styles.navBar}>
                <li><Link to="/">Home</Link></li>
                {!userObject && <li><Link to="/login">Login</Link></li>}
                {userObject && <li onClick={logout}>Logout</li>}
            </ul>    
        </div>
        
    )
}

export default NavBar
