import React from "react";
import { Container } from "src/components/Container.styles";
import {
  FooterHolder,
  Foot,
  Mail,
  Policy,
  FlexWrapper,
  FooterInfo,
  ContactInfo,
  SocialIcon,
  Icon,
  AddressWrapper,
  Address,
  MainWrapperAddress,
} from "./Footer.styles";
import Logo from "../../../../assets/images/footer/Logo.png";
import Image from "next/image";
import { Flex } from "src/components/Flex.styles";
import insta from "../../../../assets/images/footer/insta.png";
import Call from "../../../../assets/images/footer/Call.png";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiLinkedin, TfiPinterest } from "react-icons/tfi";
import contact from "../../../../assets/images/footer/whatsapp.png";
import { ResponsiveImage } from "src/components/AWAServices/BoostOptions/BoostStyles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <AddressWrapper>
        <MainWrapperAddress>
          <Address bottom="8px">
            <h1>US</h1>
            <p>
              600 N board street suit
              <br /> 5# 3260 middletown DE <br /> 19709
            </p>
          </Address>
          <Address>
            <h1>UK</h1>

            <p>
              18-B, 13 Northfield <br /> place Bradford
              <br /> BDB 8AE
            </p>
          </Address>
          <Address>
            <h1>PK</h1>
            <p>
              65L Gulberg
              <br /> 2, Lahore, Punjab <br /> 54660
            </p>
          </Address>
          <Address>
            <h1>LE</h1>
            <p>
              42 A1 Gulberg <br /> 3, Lahore, Punjab
              <br /> 54660
            </p>
          </Address>
        </MainWrapperAddress>
      </AddressWrapper>
      <FooterHolder>
        <Container>
          <FlexWrapper
            align="flex-start"
            justify="space-between"
            gap="30px"
            gap1="30px"
            direction="column"
            gap2="40px"
          >
            <FooterInfo gap="20px">
              <Image src={Logo} alt="Logo" />
              <ContactInfo>
                <AiOutlineMail color="rgba(40, 183, 129, 1)" size={17} />
                <p>info@webevis.com</p>
              </ContactInfo>
              <ContactInfo>
                <BsFillTelephonePlusFill
                  color="rgba(40, 183, 129, 1)"
                  size={17}
                />
                <p>+1 (302) 315-3301</p>
              </ContactInfo>
              <ContactInfo>
                <ResponsiveImage src={contact} alt="whatsapp" />

                <p>+1 (857) 208-7832</p>
              </ContactInfo>
              <SocialIcon>
                <Icon>
                  <FaFacebookF color="rgba(0, 124, 251, 1)" size={20} />
                </Icon>
                <Icon>
                  <ResponsiveImage src={insta} alt="instagram" />
                </Icon>
                <Icon>
                  <TfiLinkedin color="#007EFF" size={20} />
                </Icon>
                <Icon>
                  <TfiPinterest color="#F63232" size={20} />
                </Icon>
              </SocialIcon>
            </FooterInfo>
            <FlexWrapper
              align="flex-start"
              justify="space-around"
              wrap
              gap1="40px"
              justify1="flex-start"
            >
              <Foot>
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">What We Do</Link>
                  </li>
                  <li>
                    <Link href="/">Careers</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/Contact-Us">Contact Us</Link>
                  </li>
                </ul>
              </Foot>
              <Foot>
                <h3>Industries</h3>
                <ul>
                  <li>
                    <Link href="/">Fintech</Link>
                  </li>
                  <li>
                    <Link href="/">Ecommerce</Link>
                  </li>
                  <li>
                    <Link href="/">Restaurants</Link>
                  </li>
                  <li>
                    <Link href="/">Blockchain & NFT</Link>
                  </li>
                </ul>
              </Foot>
              <Foot>
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="#">AI Competitior Analysis</Link>
                  </li>
                  <li>
                    <Link href="#">AI Website Audit</Link>
                  </li>
                  <li>
                    <Link href="#">Social Media Marketing</Link>
                  </li>
                  <li>
                    <Link href="#">Website Development</Link>
                  </li>
                  <li>
                    <Link href="#">Search Engine Optimization</Link>
                  </li>
                </ul>
              </Foot>

              <Foot>
                <h3>Expert Pool</h3>
                <ul>
                  <li>
                    <Link href="#">Hire a React Developer</Link>
                  </li>
                  <li>
                    <Link href="#">Hire a Python Developer </Link>
                  </li>
                  <li>
                    <Link href="#">Hire a Full Stack JS Developer</Link>
                  </li>
                  <li>
                    <Link href="#">Hire a React Native Developer </Link>
                  </li>
                  <li>
                    <Link href="#">Hire a UI/UX Developer </Link>
                  </li>
                </ul>
              </Foot>
            </FlexWrapper>
          </FlexWrapper>
          <Mail>
            <h2>Get Latest Updates</h2>
            <form>
              <input type="email" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </form>
          </Mail>

          <Policy>
            <p>
              © Copyright {`${currentYear}`} by{" "}
              <Link href="https://www.webevis.com/">Webevis Technologies </Link>
            </p>
            <span>Privacy Policy</span>
          </Policy>
        </Container>
      </FooterHolder>
    </>
  );
};

export default Footer;
