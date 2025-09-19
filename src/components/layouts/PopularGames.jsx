import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import Valo from "/src/assets/valo.png";
import Assasin from "/src/assets/assasin.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularGames = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="py-[30px] bg-[#191919] text-white">
        <Container>
          <div className="">
            <Heading
              text={"POPULAR GAMES AROUND THE WORLD"}
              tagName={"h3"}
              className={
                "w-[542px] text-[38px] font-semibold] text-right ml-[770px]"
              }
            />
          </div>
          <div className="">
            <Slider {...settings}>
              <div>
               <Image imgSrc={Valo} />
              </div>
              <div>
                <Image imgSrc={Assasin}/>
              </div>
              <div>
                <Image imgSrc={Valo} />
              </div>
              <div>
               <Image imgSrc={Assasin}/>
              </div>
              <div>
               <Image imgSrc={Valo} />
              </div>
              <div>
               <Image imgSrc={Assasin}/>
              </div>
             
            </Slider>
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default PopularGames;
