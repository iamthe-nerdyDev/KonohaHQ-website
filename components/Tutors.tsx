"use client";

import { Telegram, X } from "@/icons";
import { ITutor } from "@/interface";
import Image from "next/image";

const Tutors = () => {
  const TutorsList: Array<ITutor> = [
    {
      name: "DefiDevrel",
      pfp: "/defidevrel.jpg",
      skills: ["Blockchain Development", "Solidity", "JavaScript"],
      x: "#",
      telegram: "#",
      width: 300,
      height: 300,
    },
    {
      name: "~WittyPrice",
      pfp: "/defidevrel.jpg",
      skills: ["Blockchain Development", "Solidity", "JavaScript"],
      x: "#",
      telegram: "#",
      width: 300,
      height: 300,
    },
    {
      name: "Mercy-D-Great",
      pfp: "/defidevrel.jpg",
      skills: ["Blockchain Development", "Solidity", "JavaScript"],
      x: "#",
      telegram: "#",
      width: 300,
      height: 300,
    },
  ];

  return (
    <>
      <div className="container py-5">
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
                  <h2>Meet Our Tutors</h2>
                  <hr
                    style={{
                      width: "3rem",
                      backgroundColor: "#888",
                    }}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="row g-5">
                  {TutorsList.length &&
                    TutorsList.map((tutor, index) => (
                      <div
                        className="col-12 col-md-6 col-lg-4"
                        key={`tutor-index-${index}`}
                      >
                        <div className="tutor-box">
                          <Image
                            className="bg"
                            src={tutor.pfp}
                            alt={tutor.name}
                            width={tutor.width}
                            height={tutor.height}
                          />
                          <h3>{tutor.name}</h3>
                          <div className="d-flex gap-1 align-items-center">
                            {tutor.x && (
                              <div className="icon">
                                <a href={tutor.x}>
                                  <X />
                                </a>
                              </div>
                            )}
                            <hr style={{ backgroundColor: "#888" }} />
                            {tutor.telegram && (
                              <div className="icon">
                                <a href={tutor.telegram}>
                                  <Telegram />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutors;
