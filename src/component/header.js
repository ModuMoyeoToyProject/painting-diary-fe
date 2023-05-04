import React from "react";
import Data from "./date";

const Header = () => {
    return (
        <div className="header">
            <div className="moon">
                <div className="small-moon">
                    
                </div>
                <Data/>
                
            </div>
            <div className="login">
                <img className="log" src="./img/login.png" ></img>
            </div>
        </div>
    )
}

export default Header;