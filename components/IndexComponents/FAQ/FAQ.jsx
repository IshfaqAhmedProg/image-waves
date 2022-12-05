import React, { useRef, useState, useEffect } from "react";
import Divider from "../../Divider/Divider";
import styles from "./FAQ.module.css";
import Plusicon from "../../../public/Icons/Plusicon.svg";
import Minusicon from "../../../public/Icons/Minusicon.svg";
import Image from "next/image";
import LineDrawer from "../../LineDrawer/LineDrawer";
const FAQ = () => {
  const faqContent = [
    {
      question: "Which kind of customers do you serve?",
      answer: `We serve a wide range of customers which includes catalogue companies, photography studios and marketing companies, among others.`,
    },
    {
      question: "How long does it take to complete a project?",
      answer: `Our usual turnaround time for photo editing services is about 24-48 hours. But, the project completion time may vary depending on the project complexity, format, image size and volumes.`,
    },
    {
      question: "How do you ensure that my images are secure?",
      answer: `We follow strict security guidelines while dealing with our clients. We make sure that none of the client photos are distributed, sold, or published on any third-party website. Your photos are safe with us.`,
    },
    {
      question:
        "Is there any restriction about the format, size, and resolution of the image sent for editing?",
      answer: `No, there are no restrictions. We deliver back the edited and the original images in the format of your choice.`,
    },
    {
      question: "Do you edit product or commercial photos?",
      answer: `Yes. We do undertake photo editing of products and commercial images.`,
    },
  ];
  const [isActive, setIsActive] = useState(false);
  const [serial, setSerial] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.bg} data-aos="fade-in">
        <LineDrawer
          duration={1000}
          delay={0}
          stagger={300}
          id="faqline"
          viewBox="0 0 453 534"
          width="453"
          height="534"
          float="left"
        >
          <path
            d="M20.5001,136C51,86.5 85.5736,71.1786 122.8,59.5606C192.181,37.9078 240.463,90.0016 321.813,44.8525C334.572,37.7709 345.588,29.5985 355.085,20.5005"
            stroke="white"
            strokeWidth="40"
            strokeLinecap="round"
          />
          <path
            d="M53.3916,521.501C36.6902,363.757 30.4989,158.257 172.237,114.022C241.618,92.3693 289.9,144.463 371.25,99.314C405.465,80.3244 427.142,53.4913 440.624,22.0006"
            stroke="white"
            strokeWidth="23"
            strokeLinecap="round"
          />
        </LineDrawer>
      </div>
      <h1 className={styles.title}>
        Find Answers to
        <br /> all your <br /> Questions!
      </h1>
      <div className={styles.accordion}>
        {faqContent.map((element) => {
          const index = faqContent.indexOf(element).toString();
          return (
            <div className={styles.element} key={index}>
              <div
                className={styles.question}
                onClick={() => {
                  setIsActive(!isActive);
                  setSerial(index);
                }}
              >
                <a>{element.question}</a>
                <Image
                  src={isActive && serial == index ? Minusicon : Plusicon}
                  alt="open"
                  width={20}
                  height={20}
                />
              </div>
              <div
                className={
                  styles.answer +
                  " " +
                  (isActive && serial == index ? styles.active : "")
                }
              >
                {element.answer}
              </div>
              {faqContent.indexOf(element) != faqContent.length - 1 ? (
                <Divider direction="horizontal" />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
