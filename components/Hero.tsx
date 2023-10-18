"use client";

import { Telegram, X } from "@/icons";
import { CustomButton } from ".";
import Image from "next/image";
import Logo from "@/public/logo.png";
import HeroImg from "@/public/hero.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row min-h-100 justify-content-between">
          <div className="col-12 mb-3">
            <div className="navbar py-5 d-flex align-items-center justify-content-between">
              <div className="icon">
                <a href="#">
                  <X />
                </a>
              </div>
              <hr />
              <div className="brand d-flex flex-column align-items-center">
                <a href="#">
                  <Image src={Logo} alt="Konoha Logo" />
                </a>
                <p>Built on Wisdom, Made for Web3</p>
              </div>
              <hr />
              <div className="icon">
                <a href="#">
                  <Telegram />
                </a>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row align-items-center g-md-5">
              <div className="col-12 col-lg-7">
                <div className="hero-details">
                  <div className="hero-header mb-3">
                    <p className="mb-3">
                      Learn <strong>WEB3.</strong>
                      <br />
                      Build & Network at
                    </p>
                    <h1>Konoha University</h1>
                  </div>

                  <div className="hero-text mb-4 pb-2">
                    <p>
                      Get the right headstart to launch your career in the web3
                      space. We take you from the foundation to being an expert
                    </p>
                  </div>

                  <div className="hero-cta mb-5">
                    <CustomButton text="Enroll Now" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 d-none d-lg-block">
                <div className="hero-img">
                  <Image src={HeroImg} alt="Konoha hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
