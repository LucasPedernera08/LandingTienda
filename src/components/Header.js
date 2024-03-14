import React from "react";
import './Headercss.css';
import Nav from './Nav';
import TopBar from './TopBar';



const Header = () => {
     
    return (
        <div className="header">
            <TopBar />
            <Nav />
            <div className="imgBackground">
            </div>

        </div> 

    )

}

export default Header;


