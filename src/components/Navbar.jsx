import React from "react";
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import '../App.css'

function Navbar(){
    return(
        <div className="navbar">
            <img className="nav-logo" src={logo}/>
            <ul className="navbar-link">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PAGES</li>
                <li>SERVICES</li>
                <li>TEAM</li>
                <li>BLOG</li>
                <li>CONTACT</li>
                <img src={search} className="searchicon"/>
                <img src={menu} className="menuicon"/>
            </ul>
            
            
        </div>
    )
}
export default Navbar;