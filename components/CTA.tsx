"use client";

import { AccessCard, Handshake, ToolBox } from "@/icons";
import { CustomButton } from ".";

const CTA = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 mb-4">
            <h2>Join 10k+ Students Innovate the Web3 Future</h2>
          </div>

          <div className="col-12 mb-3">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="cta-box">
                  <ToolBox />
                  <h4>Hans-on Tools & Approach</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="cta-box">
                  <AccessCard />
                  <h4>One-on-one Sessions</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="cta-box">
                  <Handshake />
                  <h4>Be Employed</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <CustomButton text="Join us" className="px-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
