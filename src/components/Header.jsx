import React from "react";
import "./Header.css";
import logo from "../assets/W.png";

const Header=()=> {
    return (
        <header className="header">
            
            <div className="logo">
                <img src={logo} alt="Logo"></img>
                
            </div>
            <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">Calculator</a>
                <a href="#">Reports</a>
                <a href="#">Balance</a>
            </nav>
            
        </header>
    );

};

export default Header;