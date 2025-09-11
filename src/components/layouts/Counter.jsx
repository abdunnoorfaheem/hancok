import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Image from "../Image";
import CounterBanner from "/src/assets/counterBanner.png";
import Paragraph from "../Paragraph";
import { FaCheck } from "react-icons/fa";
import Button from "../Button";
import COUNTONE from "/src/assets/countOne.png";
import COUNTFOUR from "/src/assets/countFour.png";
import COUNTTHREE from "/src/assets/countThree.png";
import COUNTTWO from "/src/assets/countTwo.png";

const Counter = () => {
  return (
    <>
      <div className="py-[30px] bg-[#121212] text-white">
        <Container>
          <div className="relative">
            <Heading
              text={"ABOUT THE BIGGEST HANCOK COMMUNITY"}
              tagName={"h3"}
              className={"w-[518px] text-[38px] font-semibold font-oswald"}
            />
            <hr className="w-[120px] text-[#FF4655] absolute left-[200px] bottom-3" />
          </div>
          <div className="py-[30px]">
            <Flex className={"justify-between"}>
              <div className="w-[48%]">
                <Image imgSrc={CounterBanner} />
              </div>
              <div className="w-[48%]">
                <Heading
                  text={"MOST POPULAR GAMING PLATFORM."}
                  tagName={"h4"}
                  className={"text-[27px] font-semibold font-oswald"}
                />
                <ul className="font-barlow">
                  <li className="flex items-center gap-x-2"><FaCheck className="text-[#FF4655] text-[12px]"/> World Bigghest Community & Gaming Server</li>
                  <li className="flex items-center gap-x-2"><FaCheck className="text-[#FF4655] text-[12px]"/>Friendly Clan & Mates</li>
                  <li className="flex items-center gap-x-2"><FaCheck className="text-[#FF4655] text-[12px]"/>We Provide Gaming Accesories</li>
                  <li className="flex items-center gap-x-2"><FaCheck className="text-[#FF4655] text-[12px]"/>Largest Online Gaming Community & Shop</li>
                  <li className="flex items-center gap-x-2"><FaCheck className="text-[#FF4655] text-[12px]"/>Hancok reaches more than 150 million monthly users</li>
                  <li className="flex items-center gap-x-2"><FaCheck className="text-[#FF4655] text-[12px]"/>We are leading global media brand for games</li>
                </ul>
                <Paragraph className={"mt-[13px] mb-[30px]"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  illo sed odio temporibus magni quia eveniet odit placeat
                  repellat quod ipsum modi necessitatibus, dolorum officia!
                </Paragraph>
                <Button className={"bg-[#212121] py-[13px] px-[24px]"}>View More </Button>
              </div>
            </Flex>
          </div>
          <div className="py-[20px]">
            <Flex className={"justify-between"}>
                <div className="bg-[#212121] py-[35px] px-[95px] rounded-bl-[50px] rounded-tr-[50px]">
                    <Image imgSrc={COUNTONE}/>
                    <Heading text={"Community Earning"} tagName={"h5"} className={"text-[18px] font-light  font-oswald"}/>
                </div>
                <div className="bg-[#212121] py-[35px] px-[95px] rounded-bl-[50px] rounded-tr-[50px]">
                    <Image imgSrc={COUNTTWO}/>
                    <Heading text={"Total Member"} tagName={"h5"} className={"text-[18px] font-light  font-oswald"}/>
                </div>
                <div className="bg-[#212121] py-[35px] px-[95px] rounded-bl-[50px] rounded-tr-[50px]">
                    <Image imgSrc={COUNTTHREE}/>
                    <Heading text={"Streams Complete"} tagName={"h5"} className={"text-[18px] font-light  font-oswald"}/>
                </div>
                <div className="bg-[#212121] py-[35px] px-[95px] rounded-bl-[50px] rounded-tr-[50px]">
                    <Image imgSrc={COUNTFOUR}/>
                    <Heading text={"Total Sponsers"} tagName={"h5"} className={"text-[18px] font-light  font-oswald"}/>
                </div>
                
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Counter;
