import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import useOnlineStatus from './../utilis/useOnlineStatus';
import useOnlineStatus from "./../utilis/useOnlineStatus";
import Grocery from './Grocery';
const Header=()=>{
    const [login,setLogin]=useState("Login")
    const onlineStatus=useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" srcSet="" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus ? <h2>Online</h2> : <h2>Offline</h2>}</li>
                    <li> <Link to='/'>Home</Link> </li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        login === "Login" ? setLogin("Logout") : setLogin("Login")
                    }}>{login}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;
