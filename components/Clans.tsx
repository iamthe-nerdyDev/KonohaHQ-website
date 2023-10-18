"use client";

import { IClanData } from "@/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import ironClan from "@/public/clans/iron.jpeg";
import waterClan from "@/public/clans/water.jpeg";
import fireClan from "@/public/clans/fire.jpeg";
import windClan from "@/public/clans/wind.jpeg";
import { CustomButton } from ".";

const clansData: Array<IClanData> = [
  {
    name: "Iron Clan",
    description: "The Code Engineers & Builders",
    image: ironClan,
  },
  {
    name: "Water Clan",
    description: "The Code Engineers & Builders",
    image: waterClan,
  },
  {
    name: "Fire Clan",
    description: "The Code Engineers & Builders",
    image: fireClan,
  },
  {
    name: "Wind Clan",
    description: "The Code Engineers & Builders",
    image: windClan,
  },
];

const Clans = () => {
  return (
    <>
      <div className="container py-3">
        <div className="row align-items-center justify-content-center">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div className="section-header d-flex align-items-center justify-content-center mb-5 pb-2">
                  <hr
                    style={{
                      width: "3rem",
                      backgroundColor: "#888",
                    }}
                  />
                  <h2>Explore Our Clans</h2>
                  <hr
                    style={{
                      width: "3rem",
                      backgroundColor: "#888",
                    }}
                  />
                </div>
              </div>
              <div className="col-12 mb-2">
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true,
                  }}
                  loop={true}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper_container"
                >
                  {clansData.map((clan, index) => (
                    <SwiperSlide key={`clan-swiper-${index}`}>
                      <div className="clan-slider position-relative">
                        <Image src={clan.image} alt={clan.alt ?? clan.name} />
                        <div>
                          <h3>{clan.name}:</h3>
                          <p className="mb-1">{clan.description}</p>

                          <CustomButton text="View syllabus" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clans;
