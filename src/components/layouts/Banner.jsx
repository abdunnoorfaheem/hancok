import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Button from "../Button";
import { FaAngleDoubleRight,FaLinkedin,FaInstagramSquare   } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/banner.png')] h-[1000px] bg-center bg-no-repeat bg-cover text-white">
        <Container>
          <Heading text={"LIFE TIME"} tagName={"h4"} className={"pt-[265px] text-[27px] font-normal"} />
          <Heading text={"GAMING EXPERIENCE"} tagName={"h1"} className={"text-[60px] font-semibold py-[15px]"} />
          <Paragraph className={"w-[521px]"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias voluptas optio. Veritatis recusandae pariatur qui dignissimos
            dolore similique ad adipisci eum. Quos aliquid fugiat magni illum
            eius?
          </Paragraph>
          <Button className={"flex items-center gap-x-2 py-[13px] bg-white text-[#121212] px-[26px] mt-[48px]"}>View More <FaAngleDoubleRight/></Button>
          <div className="flex mt-[201px] gap-x-4 text-[24px]">
           <FaFacebook/>
           <FaLinkedin />
           <AiFillTwitterCircle/>
           <FaInstagramSquare />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
