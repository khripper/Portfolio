import React from "react";
import Logo from "../../Assets/Logo.png";
import {MdDarkMode} from "react-icons/md"
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.Style.scss" ;


const Navbar = () => {
    return(
        
        <div className="navbar">
            <img src={Logo} alt="" className="logo"/>
            <SearchBar/>
            <button className="btn-dark"><MdDarkMode fontSize={"25px"}/></button>
        </div>

    )
}
export default Navbar;