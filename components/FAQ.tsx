"use client";

import { CaretDown, CaretUp } from "@/icons";
import { IFAQs } from "@/interface";
import { useState } from "react";

const FAQ = () => {
  const FAQs: Array<IFAQs> = [
    {
      question: "How much does Konoha Cost?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      question: "Can I join virtually?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      question: "What is the duration of a semester?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];

  const [isOpened, setIsOpened] = useState<boolean>(true);
  const [openedTab, setOpenedTab] = useState<number | null>(0);

  const closeOrOpenTab = (index: number) => {
    if (isOpened) {
      if (openedTab === index) {
        setOpenedTab(null);
        setIsOpened(false);
      } else {
        setOpenedTab(index);
      }
    } else {
      setIsOpened(true);
      setOpenedTab(index);
    }
  };

  return (
    <>
      <div className="container py-3">
        <div className="row align-items-center justify-content-center">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <div className="section-header d-flex align-items-center justify-content-center mb-5">
                  <hr
                    style={{
                      width: "3rem",
                      backgroundColor: "#888",
                    }}
                  />
                  <h2>
                    FAQ<small>(s)</small>
                  </h2>
                  <hr
                    style={{
                      width: "3rem",
                      backgroundColor: "#888",
                    }}
                  />
                </div>
              </div>

              {FAQs.length > 0 &&
                FAQs.map((faq, index) => (
                  <div
                    className="col-12 col-md-10 mx-auto mb-3"
                    key={`faq-index-${index}`}
                  >
                    <div>
                      <div
                        className="faq-header d-flex align-items-center justify-content-between"
                        onClick={() => closeOrOpenTab(index)}
                      >
                        <p>{faq.question}</p>
                        {openedTab === index && isOpened ? (
                          <CaretUp />
                        ) : (
                          <CaretDown />
                        )}
                      </div>
                      <div
                        className={`faq-body ${
                          openedTab === index && isOpened ? "d-block" : "d-none"
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
