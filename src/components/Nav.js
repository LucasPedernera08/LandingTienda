import React from "react";
import './Navcss.css';







const nav = () => {

    return (
    
        <nav>
            <ul className="navBar">
                
                <li className="navButton"> <a href="/"> Home</a></li>
                <li className="navButton"> <a href="/Products">Products</a></li>
                <li className="navButton"> <a href="/Elements">Elements</a></li>
                <li className="navButton"> <a href="/Pages">Pages</a></li>
                <li className="navButton"> <a href="/Shop">Shop</a></li>
                <li className="navButton"> <a href="/Sale">Sale</a></li>

            </ul>

        </nav>
    );

};

export default nav;
