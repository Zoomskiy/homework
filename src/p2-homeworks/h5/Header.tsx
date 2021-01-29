import React from "react";
import {NavLink} from "react-router-dom";

function Header () {
    return (
        <div>
            //add NavLinks
            <NavLink to={'/junior'}>JUN </NavLink>
            <NavLink to={'/junior-plus'}>JUN+ </NavLink>
            <NavLink to={'/pre-junior'}>PREJUN</NavLink>
        </div>
    );
}

export default Header;
