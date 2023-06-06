import { useState } from "react"
import { LOGO_URL } from "../utilis/constants"
const Header=()=>{
    const [logIn,setLoginIn]=useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" srcSet="" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        logIn==="Login" ? setLoginIn("Logout") : setLoginIn("Login");
                    }}>{logIn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header