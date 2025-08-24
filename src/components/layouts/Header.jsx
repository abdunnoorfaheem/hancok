import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import { CiGlobe } from "react-icons/ci";
import { FaSignOutAlt,FaSearch  } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="py-[20px] bg-[#0C0C0E] text-white">
        <Container>
          <Flex className={"justify-between"}>
          <Heading text={"Hancok"} tagName={"h3"} className={"text-[24px] font-bold"}/>
          <div className="">
            <ul className="flex gap-x-12">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/aboutUs"}>About Us</Link>
            </li>
            <li>Tornament</li>
            <li>Store</li>
            <li>Team</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
          </div>
          <div className="text-[20px]">
           <div className="flex items-center gap-x-6">
            <CiGlobe/>
           <div className="flex items-center gap-1">
            <FaSignOutAlt/>
            <h4>Sign In</h4>
           </div>
           <FaSearch />
           </div>
          </div>
          </Flex>
         
        </Container>
      </div>
    </>
  );
};

export default Header;
