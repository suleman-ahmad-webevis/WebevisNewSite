import React, { useContext, useState } from "react";
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
import axios from "axios";
import { ToastContext } from "src/context/toastContext";
import { useFormik } from "formik";
import * as yup from "yup";

const Footer = () => {
  const schemaIs = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required!"),
  });

  const { values, errors, touched, handleChange, handleSubmit, resetForm ,handleBlur} =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: schemaIs,
      onSubmit: async (data) => {
        try {
          const payload = {
            email: data?.email,
          };
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_MAIN_URL}/query/subscriber`,
            JSON.stringify(payload),
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
              },
            }
          );
          if (response.status === 200) {
            resetForm();
            showToast({
              success: true,
              text: "Thank you for considering us! We will get back to you shortly.",
            });
          }
        } catch (error) {
          if (error?.response?.status == 400) {
            showToast({
              info: true,
              text: "Already subscribed",
            });
            return;
          }
          showToast({
            error: true,
            text: "An error occurred while submitting the form",
          });
        }
      },
    });
  const currentYear = new Date().getFullYear();

  const { showToast } = useContext(ToastContext);

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
                <Link
                  href="https://www.facebook.com/webevistech/"
                  target="blank"
                >
                  <Icon>
                    <FaFacebookF color="rgba(0, 124, 251, 1)" size={20} />
                  </Icon>
                </Link>
                <Link href="https://www.instagram.com/webevistechnologies/">
                  <Icon>
                    <ResponsiveImage src={insta} alt="instagram" />
                  </Icon>
                </Link>
                <Link
                  href="https://www.linkedin.com/webevis-technology"
                  target="blank"
                >
                  <Icon>
                    <TfiLinkedin color="#007EFF" size={20} />
                  </Icon>
                </Link>
                <Link
                  href="https://www.pinterest.com/Webevis32/"
                  target="blank"
                >
                  <Icon>
                    <TfiPinterest color="#F63232" size={20} />
                  </Icon>
                </Link>
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
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blog</Link>
                  </li>
                  <li>
                    <Link href="/success-stories">Success Stories</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </Foot>
              <Foot>
                <h3>Top Industries</h3>
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
                  <li>
                    <Link href="/">Real Estate</Link>
                  </li>
                  <li>
                    <Link href="/">Travel & Tourism</Link>
                  </li>
                </ul>
              </Foot>
              <Foot>
                <h3>We Best In</h3>
                <ul>
                  <li>
                    <Link href="#">Web App Development</Link>
                  </li>
                  <li>
                    <Link href="#">UI/UX Designing</Link>
                  </li>
                  <li>
                    <Link href="#">React Native Development</Link>
                  </li>
                  <li>
                    <Link href="/services/social-media-marketing">
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/social-media-marketing">
                      Social Media Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Inbound Calls</Link>
                  </li>
                </ul>
              </Foot>

              <Foot>
                <h3>Top Talent</h3>
                <ul>
                  <li>
                    <Link href="/hire-react-developer">React Developer</Link>
                  </li>
                  <li>
                    <Link href="/hire-python-developer">Node JS Developer</Link>
                  </li>
                  <li>
                    <Link href="/hire-full-stack-javascript-developer">
                      Full Stack JS Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/hire-react-native-developer">
                      React Native Developer
                    </Link>
                  </li>
                  <li>
                    <Link href="/hire-ui-ux-developer">UI/UX Developer</Link>
                  </li>
                  <li>
                    <Link href="/hire-seo-experts">SEO Expert</Link>
                  </li>
                </ul>
              </Foot>
            </FlexWrapper>
          </FlexWrapper>
          <Mail>
            <h2>Get Latest Updates</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? "input-error" : ""}
              />
              <button type="submit">Subscribe</button>
            </form>
          </Mail>
          <Policy>
            <p>
              © Copyright {`${currentYear}`} by{" "}
              <Link href="https://www.webevis.com/">Webevis Technologies </Link>
            </p>
            <div className="policy">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/">Sitemap</Link>
              <Link href="/quality">IMS Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </div>
          </Policy>
        </Container>
      </FooterHolder>
    </>
  );
};

export default Footer;
