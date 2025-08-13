import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="">
        <ul className="flex gap-x-12">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/aboutUs"}>About Us</Link></li>
            <li>Tornament</li>
        </ul>
      </div>
    </>
  )
}

export default Header
