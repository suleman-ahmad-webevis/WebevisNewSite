import React, { useEffect } from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
import { Touch, HeroImage, HeroText, HeroInfo, Info } from "./Hero.styles";
import location from "../../../../public/assets/images/ContactUs/location-pin.svg";
import email from "../../../../public/assets/images/ContactUs/Email-icon.svg";
import phone from "../../../../public/assets/images/ContactUs/phone-icon.svg";
import Image from "next/image";

const Hero = () => {
  // useEffect(() => {
  //   getGeoInfo();
  // }, []);

  // const getGeoInfo = () => {
  //   axios
  //     .get("https://api.country.is/")
  //     .then((response) => {
  //       console.log("response", response);
  //       let data = response.data;
  //       setState({
  //         ...state,
  //         ip: data.ip,
  //         countryName: data.country,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <Touch>
      {/* <Container resPadding="0px"> */}
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
      {/* </Container> */}
    </Touch>
  );
};

export default Hero;
