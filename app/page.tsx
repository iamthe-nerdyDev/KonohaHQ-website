"use client";

import { CTA, Clans, FAQ, Hero, Testimonials, Tutors } from "@/components";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Telegram, X } from "@/icons";

const HomePage = () => {
  return (
    <>
      <div className="overlay"></div>

      <section className="hero px-1 mb-3 mb-md-4">
        <Hero />
      </section>

      <section className="clan bg px-1 py-5">
        <Clans />
      </section>

      <section className="faq px-1 py-5">
        <FAQ />
      </section>

      <section className="cta bg py-5 px-1">
        <CTA />
      </section>

      <section className="tutors py-5 px-1">
        <Tutors />
      </section>

      <section className="testimonials bg py-5 px-1">
        <Testimonials />
      </section>

      <footer className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="brand d-flex flex-column align-items-center">
                <a href="#">
                  <Image src={Logo} alt="Konoha Logo" />
                </a>
                <p>Built on Wisdom, Made for Web3</p>
              </div>
            </div>

            <div className="col-12">
              <div className="justify-content-center d-flex gap-1 align-items-center">
                <div className="icon">
                  <a href="#">
                    <X />
                  </a>
                </div>
                <div className="icon">
                  <a href="#">
                    <Telegram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
    </>
  );
};

export default HomePage;
