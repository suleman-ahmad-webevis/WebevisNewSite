import React, { useEffect, useState } from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
import { Touch, HeroImage, HeroText, HeroInfo, Info } from "./Hero.styles";
import location from "../../../../public/assets/images/ContactUs/location-pin.svg";
import email from "../../../../public/assets/images/ContactUs/Email-icon.svg";
import phone from "../../../../public/assets/images/ContactUs/phone-icon.svg";
import Image from "next/image";
import Toastify from "src/components/Modal/toastify/Toastify";

const Hero = () => {
  const [error, setError] = useState(false);
  const [info, setInfo] = useState(false);
  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(res.status);
        if (res.status === 200 || 201) {
          setSuccess(true);
        }
      } catch (err) {
        setError(true);
      }
    }
    getBlogs();
  }, []);
  return (
    <Touch>
      <HeroImage>
        <HeroText>
          <h6>Get In Touch</h6>
          <h3>Have questions, inquiries, or ideas?</h3>
          <p>
            Reach out to us through the contact details provided above, or use
            the convenient form on the right side to send us a message.
          </p>
        </HeroText>
        <hr />
        <HeroInfo>
          <li>
            <div className="icon-box">
              <Image src={location} alt="location Pin" />
            </div>
            <div className="text-box">
              <h6>Head Office</h6>
              <span className="text">
                600 N board street suit 5# 3260 middletown DE 19709
              </span>
            </div>
          </li>
          <li>
            <div className="icon-box">
              <Image src={email} alt="location Pin" />
            </div>
            <div className="text-box">
              <h6>Email Us</h6> <span className="text">info@webevis.com</span>
            </div>
          </li>
          <li>
            <div className="icon-box">
              <Image src={phone} alt="location Pin" />
            </div>
            <div className="text-box">
              <h6>Call us</h6>
              <span className="text">
                +1 (302) 315-3301 <br />
                +1 (857) 208-7832
              </span>
            </div>
          </li>
        </HeroInfo>
      </HeroImage>
      {/* <Toastify
        open={error || success}
        setOpen={error ? setError : setSuccess}
        error={error}
        success={success}
        text={
          error ? "error error" : success ? "success" : warning ? "warning" : ""
        }
      /> */}
      {/* <Toastify open={toast} setOpen={setToast} error /> */}
      {/* <Toastify open={toast} setOpen={setToast} error text="Error" /> */}
      {/* <Toastify open={toast} setOpen={setToast} info />
      <Toastify open={toast} setOpen={setToast} success /> */}
    </Touch>
  );
};

export default Hero;
