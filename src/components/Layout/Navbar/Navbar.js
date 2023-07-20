import React, { useState, useEffect } from "react";
import { Container } from "src/components/Container.styles";
import Logo from "../../../assets/images/navbar/Logo.jpg";
import {
  NavStyle,
  NavHolder,
  Nav,
  NavLink,
  NavHover,
  NavUl,
  InsideHover,
  DesignHover,
  CustomerHover,
  MobileNav,
  MobileNavItem,
  MobileItems,
  MobileDropdown,
  MobileDropdownItems,
  Hoverctive,
  LinkWrapper,
  IconWrapper,
  Navlink,
  NavHeadingHover,
  NavBrand,
  DropDownIcon,
  MobileDropDownWrapper,
  MobileNavLinks,
  ButtonWrapper,
} from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiInfo, FiArrowRight } from "react-icons/fi";

import blog from "../../../assets/images/navbar/blog.png";
import product from "../../../assets/images/navbar/ourProducts.svg";
import ecom from "../../../assets/images/navbar/ecom.svg";
import urban from "../../../assets/images/navbar/urban.svg";
import fintech from "../../../assets/images/navbar/fintech.svg";
import food from "../../../assets/images/navbar/food.svg";
import health from "../../../assets/images/navbar/health.svg";
import travel from "../../../assets/images/navbar/travel.svg";
import education from "../../../assets/images/navbar/education.svg";
import career from "../../../assets/images/navbar/promotion.png";
import profiles from "../../../assets/images/navbar/profiles.png";
import react from "../../../assets/images/navbar/react.svg";
import js from "../../../assets/images/navbar/js.svg";
import fullStack from "../../../assets/images/navbar/fullStack.svg";
import php from "../../../assets/images/navbar/php.svg";
import laravel from "../../../assets/images/navbar/laravel.svg";
import python from "../../../assets/images/navbar/python.svg";
import wordpress from "../../../assets/images/navbar/wordpress.svg";
import shopify from "../../../assets/images/navbar/shopify.svg";
import net from "../../../assets/images/navbar/net.svg";
import uiux from "../../../assets/images/navbar/uiux.svg";
import angular from "../../../assets/images/navbar/angular.svg";
import native from "../../../assets/images/navbar/reactNative.svg";
import java from "../../../assets/images/navbar/java.svg";
import android from "../../../assets/images/navbar/android.svg";
import swift from "../../../assets/images/navbar/swift.svg";
import socialMedia from "../../../assets/images/navbar/socialMedia.svg";
import seoExpert from "../../../assets/images/navbar/seoExpert.svg";
import content from "../../../assets/images/navbar/content.svg";
import mail from "../../../assets/images/navbar/mail.svg";
import ppc from "../../../assets/images/navbar/ppc.svg";
import graphic from "../../../assets/images/navbar/graphic.svg";
import projectMangment from "../../../assets/images/navbar/projectMangment.svg";
import project from "../../../assets/images/navbar/project.svg";
import tester from "../../../assets/images/navbar/tester.svg";
import automation from "../../../assets/images/navbar/automation.svg";
import pentration from "../../../assets/images/navbar/pentration.svg";
import web from "../../../assets/images/navbar/web.svg";
import uxdes from "../../../assets/images/navbar/uxdes.svg";
import uxdev from "../../../assets/images/navbar/uxdev.svg";
import devop from "../../../assets/images/navbar/devop.svg";
import mobileEcom from "../../../assets/images/navbar/mobileEcom.svg";
import wordpressdev from "../../../assets/images/navbar/wordpressdev.svg";
import apple from "../../../assets/images/navbar/apple.svg";
import Seo from "../../../assets/images/navbar/Seo.svg";
import sem from "../../../assets/images/navbar/sem.svg";
import smm from "../../../assets/images/navbar/smm.svg";
import smo from "../../../assets/images/navbar/smo.svg";
import emailMarket from "../../../assets/images/navbar/emailMarket.svg";
import contentmarket from "../../../assets/images/navbar/contentarket.svg";
import youtube from "../../../assets/images/navbar/youtube.svg";
import audit from "../../../assets/images/navbar/audit.svg";
import analysis from "../../../assets/images/navbar/analysis.svg";
import chatSupport from "../../../assets/images/navbar/chatSupport.svg";
import inbound from "../../../assets/images/navbar/inbound.svg";
import outbound from "../../../assets/images/navbar/outbound.svg";
import cold from "../../../assets/images/navbar/cold.svg";
import { SiFlutter } from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";
import csr from "../../../assets/images/navbar/csr.png";
import { PrimaryButton } from "src/components/Button.styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [dropDown, setDropDown] = useState(null);
  const [subDropDown, setSubDropDown] = useState(null);

  const [showShadow, setShowShadow] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle);
  };
  const handelDrop = (ind) => {
    if (dropDown == ind) {
      setDropDown(null);
    } else {
      setDropDown(ind);
    }
  };
  const handelSubDrop = (id) => {
    if (subDropDown == id) {
      setSubDropDown(null);
    } else {
      setSubDropDown(id);
    }
  };

  useEffect(() => {
    function handleScroll() {
      // Check the scroll position to determine if the shadow should be shown
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavStyle shadow={showShadow}>
      <Container>
        <NavHolder>
          <NavBrand>
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
          </NavBrand>
          <MobileNav onClick={handelToggle}>
            {toggle ? (
              <CgMenuRightAlt size={25} color="rgba(40, 183, 129, 1)" />
            ) : (
              <RxCross1 size={20} color="rgba(40, 183, 129, 1)" />
            )}
          </MobileNav>
          <Nav>
            <NavUl>
              <li>
                <MobileDropdown>
                  <Link href="/">Company</Link>
                  <IoMdArrowDropdown color="#434956" />
                </MobileDropdown>
                {/*************************** company DropDown *****************************/}
                <NavHover
                  className="only scale-up-center"
                  top="60%"
                  left="0%"
                  width="250"
                >
                  <Hoverctive>
                    <LinkWrapper>
                      <IconWrapper>
                        <FiInfo size={25} />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/aboutUs">About Us</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={product} alt="product" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/aboutUs">Our Product</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={blog} alt="blogs" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/blog">Blog</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={career} alt="career" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Career</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={profiles} alt="profiles" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Portfolio</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={csr} alt="csr" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Contact Us</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                  </Hoverctive>
                </NavHover>
                {/*************************** company DropDown *****************************/}
              </li>

              <li>
                <MobileDropdown>
                  <Link href="/Services">Services</Link>
                  <IoMdArrowDropdown color="#434956" />
                </MobileDropdown>
                {/*************************** Services DropDown *****************************/}

                <NavHover
                  className="only scale-up-center"
                  top="60%"
                  left="auto"
                  width="1200"
                  right="0%"
                  min="390"
                >
                  <Hoverctive direction="row">
                    <NavHeadingHover>
                      <h5>Web Development</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={web} alt="web" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/aboutUs">Web App Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={uxdes} alt="uxdes" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">UI/UX Designing</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={uxdev} alt="uxdev" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Ui/Ux Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={devop} alt="devop" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Devops</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={mobileEcom} alt="mobileEcom" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Ecommerce</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={wordpressdev} alt="wordpressdev" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">WordPress Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                    <NavHeadingHover>
                      <h5>Mobile Development</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={android} alt="android" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/aboutUs">Android Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={apple} alt="apple" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">IOS Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={react} alt="react" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">React Native Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <SiFlutter color="#434956" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Flutter Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                    <NavHeadingHover>
                      <h5>Digital Marketing</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={Seo} alt="seo" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/Seo-Services">
                            Search Engine Optimization
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={sem} alt="sem" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/Sem-Services">
                            Search Engine Marketing
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={smm} alt="smm" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/socialMedia">
                            Social Media Marketing
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={smo} alt="smo" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/socialMedia">
                            Social Media Optimization
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>

                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={emailMarket} alt="emailMarket" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/Email-Services">
                            Email Marketing
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={contentmarket} alt="contentmarket" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/Content-Marketting-Services">
                            Content Marketing
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={youtube} alt="youtube" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/Youtube-Marketting-Services">
                            Youtube Marketing
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={audit} alt="audit" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/AI-Website-Audit">
                            AI Website Audit
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={analysis} alt="analysis" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/Services/AI-Competitor-Analysis">
                            AI Competitor Analysis
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>

                    <NavHeadingHover border>
                      <h5>Customer Support</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={chatSupport} alt="chatSupport" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/aboutUs">Email Chat Support</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={inbound} alt="inbound" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Inbound Calls</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={outbound} alt="outbound" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Outbound Calls</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={cold} alt="cold" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Cold Calling</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </Hoverctive>
                </NavHover>
                {/*************************** Services DropDown *****************************/}
              </li>
              <li>
                <MobileDropdown>
                  <Link href="/">Industries</Link>
                  <IoMdArrowDropdown color="#434956" />
                </MobileDropdown>
                {/*************************** Industries DropDown *****************************/}
                <NavHover
                  className="only scale-up-center"
                  top="60%"
                  left="30%"
                  width="300"
                >
                  <Hoverctive>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={ecom} alt="ecom" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/aboutUs">Ecommerce</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={urban} alt="urban" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Real Estate</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={fintech} alt="fintech" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Fintech</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={food} alt="food" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Food & Grocery</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={health} alt="health" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Healthcare</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={travel} alt="travel" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Travel & Tourism</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={education} alt="education" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Education</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                  </Hoverctive>
                </NavHover>
                {/*************************** Industries DropDown *****************************/}
              </li>
              <li>
                <MobileDropdown>
                  <Link href="/Expert-Pool">Expert Pool</Link>
                  <IoMdArrowDropdown color="#434956" />
                </MobileDropdown>
                {/*************************** Expert DropDown *****************************/}
                <NavHover
                  className="only scale-up-center"
                  top="60%"
                  left="auto"
                  width="856"
                  min="390"
                  right="0%"
                >
                  <Hoverctive direction="row">
                    <NavHeadingHover>
                      <h5>Web Developers</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={react} alt="react" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/aboutUs">React</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={js} alt="js" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Node JS</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={fullStack} alt="fullStack" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Full Stack JavaScript</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={php} alt="php" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">PHP</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={laravel} alt="laravel" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Laravel</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={python} alt="csr" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Python</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={wordpress} alt="wordpress" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">WordPress</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={shopify} alt="shopify" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Shopify</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={net} alt="net" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">.Net</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={uiux} alt="uiux" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">UI/UX</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={angular} alt="angular" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Angular</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                    <NavHeadingHover>
                      <h5>Mobile Developer</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={native} alt="react" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/aboutUs">React Native</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={java} alt="java" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Java</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={android} alt="android" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Android</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={swift} alt="swift" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Swift</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <NavHeadingHover border top="1rem">
                        <h5>Digital Marketer</h5>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={socialMedia} alt="socialMedia" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/aboutUs">Social Media Expert</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={seoExpert} alt="seoExpert" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/">Seo Expert</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={content} alt="content" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/">Content Writer</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={mail} alt="mail" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/">Email Expert</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={ppc} alt="ppc" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/">PPC Expert</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                      </NavHeadingHover>
                    </NavHeadingHover>
                    <NavHeadingHover border>
                      <h5>Designer</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={uiux} alt="uiux" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/aboutUs">UI/UX Designer</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={graphic} alt="graphic" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Graphic Designer</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>

                      <NavHeadingHover border top="1.5rem">
                        <h5>Management</h5>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image
                              src={projectMangment}
                              alt="projectMangment"
                            />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/aboutUs">Project Management</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={project} alt="project" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/">Project Coordinator</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                      </NavHeadingHover>
                      <NavHeadingHover border top="1.5rem">
                        <h5>Quality Assurance</h5>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={tester} alt="tester" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/aboutUs">SQA Engineer</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={automation} alt="automation" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/">Automation Engineer</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                        <LinkWrapper>
                          <IconWrapper>
                            <Image src={pentration} alt="pentration" />
                          </IconWrapper>
                          <Navlink>
                            <Link href="/">Penetration Tester</Link>
                            <span>
                              <FiArrowRight color="#28B781" />
                            </span>
                          </Navlink>
                        </LinkWrapper>
                      </NavHeadingHover>
                    </NavHeadingHover>
                  </Hoverctive>
                </NavHover>
                {/*************************** Expert DropDown *****************************/}
              </li>
            </NavUl>
            <PrimaryButton width="174" height="45" weight="500" size="18">
              Hire an Expert
            </PrimaryButton>
          </Nav>
          <MobileNavItem width={!toggle && "100%"}>
            <MobileNavLinks padding={!toggle && "10px 20px 0px 20px"}>
              {/* ******************* Company Mobile Dropdown ********************* */}

              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown
                  padding="10px 0 20px 0"
                  onClick={() => handelDrop(1)}
                >
                  <MobileItems href="/">Comapany</MobileItems>
                  <DropDownIcon
                    onClick={() => handelDrop(1)}
                    transform={dropDown == 1 && "rotate(180deg)"}
                  />
                </MobileDropdown>
                {dropDown == 1 && (
                  <Hoverctive shadow>
                    <LinkWrapper>
                      <IconWrapper>
                        <FiInfo size={25} />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/aboutUs">About Us</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={product} alt="product" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/aboutUs">Our Product</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={blog} alt="blogs" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/blog">Blog</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={career} alt="career" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Career</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={profiles} alt="profiles" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Portfolio</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={csr} alt="csr" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Contact Us</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                  </Hoverctive>
                )}
              </MobileDropDownWrapper>
              {/* ******************* Company Mobile Dropdown ********************* */}

              {/* ******************* services Mobile Dropdown ********************* */}
              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown
                  padding="10px 0 20px 0"
                  border="1px solid #eaeaea"
                  onClick={() => handelDrop(2)}
                >
                  <MobileItems href="/Services">Services</MobileItems>
                  <DropDownIcon
                    onClick={() => handelDrop(2)}
                    transform={dropDown == 2 && "rotate(180deg)"}
                  />
                </MobileDropdown>
                {dropDown == 2 && (
                  <>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 20px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(1)}
                      >
                        <MobileItems href="/Services">
                          Web Development
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 1 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 1 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={web} alt="web" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">Web App Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={uxdes} alt="uxdes" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">UI/UX Designing</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={uxdev} alt="uxdev" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Ui/Ux Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={devop} alt="devop" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Devops</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={mobileEcom} alt="mobileEcom" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Ecommerce</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={wordpressdev} alt="wordpressdev" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">WordPress Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 20px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(2)}
                      >
                        <MobileItems href="/Services">
                          Mobile Development
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 2 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 2 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={android} alt="android" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">Android Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={apple} alt="apple" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">IOS Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={react} alt="react" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">React Native Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <SiFlutter color="#434956" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Flutter Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 20px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(3)}
                      >
                        <MobileItems href="/Services">
                          Digital Marketing
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 3 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 3 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={android} alt="android" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">Android Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={apple} alt="apple" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">IOS Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={react} alt="react" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">React Native Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <SiFlutter color="#434956" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Flutter Development</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 20px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(4)}
                      >
                        <MobileItems href="/Services">
                          Customer Support
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 4 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 4 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={chatSupport} alt="chatSupport" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">Email Chat Support</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={inbound} alt="inbound" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Inbound Calls</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={outbound} alt="outbound" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Outbound Calls</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={cold} alt="cold" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Cold Calling</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                  </>
                )}
              </MobileDropDownWrapper>
              {/* ******************* services Mobile Dropdown ********************* */}

              {/* ******************* Industries Mobile Dropdown ********************* */}

              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown
                  padding="10px 0 30px 0"
                  onClick={() => handelDrop(3)}
                >
                  <MobileItems href="/">Industries</MobileItems>
                  <DropDownIcon
                    onClick={() => handelDrop(3)}
                    transform={dropDown == 3 && "rotate(180deg)"}
                  />
                </MobileDropdown>
                {dropDown == 3 && (
                  <Hoverctive shadow>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={ecom} alt="ecom" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/aboutUs">Ecommerce</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={urban} alt="urban" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Real Estate</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={fintech} alt="fintech" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Fintech</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={food} alt="food" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Food & Grocery</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={health} alt="health" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Healthcare</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={travel} alt="travel" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Travel & Tourism</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                    <LinkWrapper>
                      <IconWrapper>
                        <Image src={education} alt="education" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Education</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                  </Hoverctive>
                )}
              </MobileDropDownWrapper>
              {/* ******************* Industries Mobile Dropdown ********************* */}
              {/* ******************* Expert Mobile Dropdown ********************* */}
              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown
                  padding="10px 0 30px 0"
                  border="1px solid #eaeaea"
                  onClick={() => handelDrop(4)}
                >
                  <MobileItems href="/Services">Expert Pool</MobileItems>
                  <DropDownIcon
                    onClick={() => handelDrop(4)}
                    transform={dropDown == 4 && "rotate(180deg)"}
                  />
                </MobileDropdown>
                {dropDown == 4 && (
                  <>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 30px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(1)}
                      >
                        <MobileItems href="/Services">
                          Web Developers
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 1 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 1 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={react} alt="react" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">React</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={js} alt="js" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Node JS</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={fullStack} alt="fullStack" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Full Stack JavaScript</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={php} alt="php" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">PHP</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={laravel} alt="laravel" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Laravel</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={python} alt="csr" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Python</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={wordpress} alt="wordpress" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">WordPress</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={shopify} alt="shopify" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Shopify</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={net} alt="net" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">.Net</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={uiux} alt="uiux" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">UI/UX</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={angular} alt="angular" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Angular</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 30px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(2)}
                      >
                        <MobileItems href="/Services">
                          Mobile Developer
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 2 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 2 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={native} alt="react" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">React Native</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={java} alt="java" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Java</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={android} alt="android" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Android</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={swift} alt="swift" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Swift</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 30px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(3)}
                      >
                        <MobileItems href="/Services">
                          Digital Marketer
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 3 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 3 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={socialMedia} alt="socialMedia" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">Social Media Expert</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={seoExpert} alt="seoExpert" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Seo Expert</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={content} alt="content" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Content Writer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={mail} alt="mail" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Email Expert</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={ppc} alt="ppc" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">PPC Expert</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 30px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(4)}
                      >
                        <MobileItems href="/Services">Designer</MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 4 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 4 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={uiux} alt="uiux" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">UI/UX Designer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={graphic} alt="graphic" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Graphic Designer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>

                          {/* <NavHeadingHover border top="1.5rem">
                          <h5>Management</h5>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image
                                src={projectMangment}
                                alt="projectMangment"
                              />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">Project Management</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={project} alt="project" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Project Coordinator</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover> */}
                          {/* <NavHeadingHover border top="1.5rem">
                          <h5>Quality Assurance</h5>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={tester} alt="tester" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">SQA Engineer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={automation} alt="automation" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Automation Engineer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={pentration} alt="pentration" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Penetration Tester</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover> */}
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 30px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(5)}
                      >
                        <MobileItems href="/Services">Management</MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 5 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 5 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image
                                src={projectMangment}
                                alt="projectMangment"
                              />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">Project Management</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={project} alt="project" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Project Coordinator</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          {/* <NavHeadingHover border top="1.5rem">
                          <h5>Quality Assurance</h5>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={tester} alt="tester" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">SQA Engineer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={automation} alt="automation" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Automation Engineer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={pentration} alt="pentration" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Penetration Tester</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover> */}
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                    <MobileDropDownWrapper>
                      <MobileDropdown
                        padding="10px 0 30px 0"
                        border="1px solid #eaeaea"
                        onClick={() => handelSubDrop(6)}
                      >
                        <MobileItems href="/Services">
                          Quality Assurance
                        </MobileItems>
                        <DropDownIcon
                          transform={subDropDown == 6 && "rotate(180deg)"}
                        />
                      </MobileDropdown>
                      {subDropDown == 6 && (
                        <NavHeadingHover border>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={tester} alt="tester" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/aboutUs">SQA Engineer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={automation} alt="automation" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Automation Engineer</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                          <LinkWrapper>
                            <IconWrapper>
                              <Image src={pentration} alt="pentration" />
                            </IconWrapper>
                            <Navlink>
                              <Link href="/">Penetration Tester</Link>
                              <span>
                                <FiArrowRight color="#28B781" />
                              </span>
                            </Navlink>
                          </LinkWrapper>
                        </NavHeadingHover>
                      )}
                    </MobileDropDownWrapper>
                  </>
                )}
              </MobileDropDownWrapper>
              {/* ******************* Expert Mobile Dropdown ********************* */}
            </MobileNavLinks>
            <ButtonWrapper>
              <PrimaryButton width="174" height="45" weight="500" size="18">
                Hire an Expert
              </PrimaryButton>
            </ButtonWrapper>
          </MobileNavItem>
        </NavHolder>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
