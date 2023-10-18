"use client";

import { ITestimony } from "@/interface";
import Image from "next/image";

const Testimonials = () => {
  const Testimonies: Array<ITestimony> = [
    {
      name: "Lilliegrace",
      role: "Blockchain Developer",
      image: "/user.jpg",
      width: 300,
      height: 300,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      name: "DK Moon",
      role: "DEFi Researcher",
      image: "/user.jpg",
      width: 300,
      height: 300,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      name: "Vicky X",
      role: "Community Moderator",
      image: "/user.jpg",
      width: 300,
      height: 300,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      name: "~NerdyDev",
      role: "Crypto Enthusiast",
      image: "/user.jpg",
      width: 300,
      height: 300,
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header d-flex align-items-center justify-content-center mb-5">
              <hr
                style={{
                  width: "3rem",
                  backgroundColor: "#888",
                }}
              />
              <h2>Testimony</h2>
              <hr
                style={{
                  width: "3rem",
                  backgroundColor: "#888",
                }}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="testimonies-box">
              <div className="row g-4 g-md-5">
                {Testimonies.length &&
                  Testimonies.map((testimony, index) => (
                    <div
                      className="col-12 col-md-6 mb-3 mb-md-0"
                      key={`testimony-index-${index}`}
                    >
                      <div className="testimony d-flex">
                        <div>
                          <Image
                            src={testimony.image}
                            alt={testimony.name}
                            width={testimony.width}
                            height={testimony.height}
                          />
                        </div>
                        <div className="pt-4">
                          <hr
                            style={{ width: "2rem", backgroundColor: "#888" }}
                          />
                        </div>

                        <div>
                          <div className="testimony-box mb-3">
                            "{testimony.testimony}"
                          </div>
                          <div className="info">
                            <h4>{testimony.name}</h4>
                            <p>{testimony.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
