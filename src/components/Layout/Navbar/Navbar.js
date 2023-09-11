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
  ExpandAbleItem,
  BurgerMenu,
  MobileNav,
  MainLinks,
  GradientButton,
} from "./Navbar.styles";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
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
import Modal from "src/components/Modal/Modal";
import DeveloperModal from "src/components/DeveloperModal/DeveloperModals";

const Navbar = ({ type }) => {
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [dropDown, setDropDown] = useState(null);
  const [subDropDown, setSubDropDown] = useState(null);

  const [showShadow, setShowShadow] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle);
    if (!toggle) {
      setDropDown(null);
    }
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
    <NavStyle shadow={showShadow} id="home">
      <Container>
        <NavHolder>
          <NavBrand>
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
          </NavBrand>
          <BurgerMenu onClick={handelToggle}>
            {toggle ? (
              <CgMenuRightAlt
                size={25}
                color="rgba(40, 183, 129, 1)"
                onClick={() => (document.body.style.overflow = "hidden")}
              />
            ) : (
              <RxCross1
                size={20}
                color="rgba(40, 183, 129, 1)"
                onClick={() => (document.body.style.overflow = "")}
              />
            )}
          </BurgerMenu>
          <Nav>
            <NavUl>
              <li>
                <MobileDropdown>
                  <span>Company</span>
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
                        <Link href="/about-us">About Us</Link>
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
                        <Link href="/blogs">Blog</Link>
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
                        <Link href="/careers">Career</Link>
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
                        <Link href="/success-stories">Success Stories</Link>
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
                        <Link href="/contact-us">Contact Us</Link>
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
                  <span>Services</span>
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
                      <MainLinks href="/services/web-development">
                        Web Development
                      </MainLinks>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={web} alt="web" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/services/web-app">
                            Web App Development
                          </Link>
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
                          <Link href="/services/ui-ux-designing">
                            UI/UX Designing
                          </Link>
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
                          <Link href="/services/ui-ux-development">
                            UI/UX Development
                          </Link>
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
                          <Link href="/services/dev-Oops">Devops</Link>
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
                          <Link href="/services/e-commerence-development">
                            Ecommerce
                          </Link>
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
                          <Link href="/services/wordpress-development">
                            WordPress Development
                          </Link>
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
                          <Link href="/services/graphic-designing">
                            Graphic Designing
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
                          <Link href="/services/ai-development">
                            AI Development
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>

                    <NavHeadingHover>
                      <Link href="/services/mobile-development">
                        <h5>Mobile Development</h5>
                      </Link>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={android} alt="android" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/services/android-development">
                            Android Development
                          </Link>
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
                          <SiFlutter />
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
                      <MainLinks href="/services">Digital Marketing</MainLinks>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={Seo} alt="seo" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/services/search-engine-optimization">
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
                          <Link href="/services/search-engine-marketing">
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
                          <Link href="/services/social-media-marketing">
                            Social Media Marketing
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
                          <Link href="/services/email-services">
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
                          <Link href="/services/content-marketting-services">
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
                          <Link href="/services/youtube-marketting-services">
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
                          <Link href="/services/ai-website-audit">
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
                          <Link href="/services/ai-competitor-analysis">
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
                  <span>Industries</span>
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
                        <Link href="/services/e-commerence-development">
                          Ecommerce
                        </Link>
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
                  <span>Expert Pool</span>
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
                          <Link href="/hire-react-developer">React</Link>
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
                          <Link href="/hire-nodejs-developer">Node JS</Link>
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
                          <Link href="/hire-full-stack-javascript-developer">
                            Full Stack JavaScript
                          </Link>
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
                          <Link href="/hire-php-developer">PHP</Link>
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
                          <Link href="/hire-laravel-developer">Laravel</Link>
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
                          <Link href="/hire-python-developer">Python</Link>
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
                          <Link href="/hire-wordpress-developer">
                            WordPress
                          </Link>
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
                          <Link href="/hire-shopify-developer">Shopify</Link>
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
                          <Link href="/hire-dotnet-developer">.Net</Link>
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
                          <Link href="/hire-ui-ux-developer">UI/UX</Link>
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
                          <Link href="/hire-angular-developer">Angular</Link>
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
                          <Link href="/hire-react-native-developer">
                            React Native
                          </Link>
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
                          <Link href="/hire-java-developer">Java</Link>
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
                          <Link href="/hire-android-developer">Android</Link>
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
                          <Link href="/hire-swift-developer">Swift</Link>
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
                            <Link href="/hire-social-media-expert">
                              Social Media Expert
                            </Link>
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
                            <Link href="/hire-seo-experts">Seo Expert</Link>
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
                            <Link href="/hire-content-writer">
                              Content Writer
                            </Link>
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
                            <Link href="/hire-email-expert">Email Expert</Link>
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
                            <Link href="/hire-ppc-expert">PPC Expert</Link>
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
                          <Link href="/hire-ui-ux-designer">
                            UI/UX Designer
                          </Link>
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
                          <Link href="/hire-graphic-designer">
                            Graphic Designer
                          </Link>
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
                            <Link href="/hire-project-manager">
                              Project Manager
                            </Link>
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
                            <Link href="/hire-project-cordinator">
                              Project Coordinator
                            </Link>
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
                            <Link href="/hire-sqa-engineer">SQA Engineer</Link>
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
                            <Link href="/hire-automation-engineer">
                              Automation Engineer
                            </Link>
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
                            <Link href="/hire-penetration-tester">
                              Penetration Tester
                            </Link>
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
            <>
              <Modal
                open={modal}
                setOpen={setModal}
                bg="#fff"
                radius="25px"
                width="1340px"
                desktopTop="9px"
                desktopRight="10px"
                MobileTop="9px"
                MobileRight="10px"
                svgColor="black"
                child={
                  <DeveloperModal
                    type={type}
                    modal={modal}
                    setModal={setModal}
                  />
                }
              />
            </>
            <GradientButton
              onClick={() => setModal(true)}
              width="174"
              height="45"
              weight="500"
              size="18"
            >
              Hire An Expert
            </GradientButton>
          </Nav>
          <MobileNav transform={!toggle && "0%"}>
            <MobileNavLinks>
              {/* ******************* Company Mobile Dropdown ********************* */}

              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown onClick={() => handelDrop(1)}>
                  <MobileItems>Company</MobileItems>
                  <DropDownIcon />
                </MobileDropdown>
                <ExpandAbleItem width={dropDown === 1 && "0%"}>
                  <span onClick={() => handelDrop(1)} className="nav-heading">
                    <IoIosArrowBack className="icon" /> Comapany
                  </span>

                  <Hoverctive shadow>
                    <LinkWrapper>
                      <IconWrapper>
                        <FiInfo size={25} />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/about-us">About us</Link>
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
                        <Link href="/blogs">Blog</Link>
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
                        <Link href="/careers">Career</Link>
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
                        <Link href="/success-stories">Success Stories</Link>
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
                        <Link href="/contact-us">Contact Us</Link>
                        <span>
                          <FiArrowRight color="#28B781" />
                        </span>
                      </Navlink>
                    </LinkWrapper>
                  </Hoverctive>
                </ExpandAbleItem>
              </MobileDropDownWrapper>
              {/* ******************* Company Mobile Dropdown ********************* */}

              {/* ******************* services Mobile Dropdown ********************* */}
              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown
                  padding="10px 0 20px 0"
                  border="1px solid #eaeaea"
                  onClick={() => handelDrop(2)}
                >
                  <MobileItems>Services</MobileItems>
                  <DropDownIcon transform={dropDown == 2 && "rotate(180deg)"} />
                </MobileDropdown>
                <ExpandAbleItem width={dropDown === 2 && "0%"}>
                  <span onClick={() => handelDrop(2)} className="nav-heading">
                    <IoIosArrowBack className="icon" /> Services
                  </span>

                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 20px 0"
                      border="1px solid #eaeaea"
                      onClick={() => handelSubDrop(1)}
                    >
                      <MobileItems>
                        <Link href={"/services/web-development"}>
                          {" "}
                          Web Development
                        </Link>
                      </MobileItems>
                      {/* <DropDownIcon
                        transform={subDropDown == 1 && "rotate(180deg)"}
                      /> */}
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={web} alt="web" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/services/web-app">
                            Web App Development
                          </Link>
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
                          <Link href="/services/ui-ux-designing">
                            UI/UX Designing
                          </Link>
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
                          <Link href="/services/ui-ux-development">
                            UI/UX Development
                          </Link>
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
                          <Link href="/services/dev-Oops">Devops</Link>
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
                          <Link href="/services/e-commerence-development">
                            Ecommerce
                          </Link>
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
                          <Link href="/services/wordpress-development">
                            WordPress Development
                          </Link>
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
                          <Link href="/services/graphic-designing">
                            Graphic Designing
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
                          <Link href="/services/ai-development">
                            AI Development
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 20px 0"
                      border="1px solid #eaeaea"
                    >
                      <Link href="/services/mobile-development">
                        <MobileItems>Mobile Development</MobileItems>
                      </Link>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={android} alt="android" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/services/android-development">
                            Android Development
                          </Link>
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
                          <SiFlutter />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Flutter Development</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 20px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>
                        <Link href={"/services"}> Digital Marketing</Link>
                      </MobileItems>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={Seo} alt="seo" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/services/search-engine-optimization">
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
                          <Link href="/services/search-engine-marketing">
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
                          <Link href="/services/social-media-marketing">
                            Social Media Marketing
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
                          <Link href="/services/email-services">
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
                          <Link href="/services/content-marketting-services">
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
                          <Link href="/services/youtube-marketting-services">
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
                          <Link href="/services/ai-website-audit">
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
                          <Link href="/services/ai-competitor-analysis">
                            AI Competitor Analysis
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 20px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>Customer Support</MobileItems>
                    </MobileDropdown>
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
                  </MobileDropDownWrapper>
                </ExpandAbleItem>
              </MobileDropDownWrapper>
              {/* ******************* services Mobile Dropdown ********************* */}

              {/* ******************* Industries Mobile Dropdown ********************* */}

              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown
                  padding="10px 0 30px 0"
                  onClick={() => handelDrop(3)}
                >
                  <MobileItems>Industries</MobileItems>
                  <DropDownIcon />
                  <ExpandAbleItem width={dropDown === 3 && "0%"}>
                    <span onClick={() => handelDrop(1)} className="nav-heading">
                      <IoIosArrowBack className="icon" /> Industries
                    </span>

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
                  </ExpandAbleItem>
                </MobileDropdown>
              </MobileDropDownWrapper>
              {/* ******************* Industries Mobile Dropdown ********************* */}
              {/* ******************* Expert Mobile Dropdown ********************* */}
              <MobileDropDownWrapper border="1px solid #eaeaea">
                <MobileDropdown
                  padding="10px 0 30px 0"
                  border="1px solid #eaeaea"
                  onClick={() => handelDrop(4)}
                >
                  <MobileItems>Expert Pool</MobileItems>
                  <DropDownIcon
                    transform={dropDown === 4 && "rotate(180deg)"}
                  />
                </MobileDropdown>
                <ExpandAbleItem width={dropDown === 4 && "0%"}>
                  <span onClick={() => handelDrop(4)} className="nav-heading">
                    <IoIosArrowBack className="icon" /> Expert Pool
                  </span>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 30px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>Web Developers</MobileItems>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={react} alt="react" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/hire-react-developer">React</Link>
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
                          <Link href="/hire-nodejs-developer">Node JS</Link>
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
                          <Link href="/hire-full-stack-javascript-developer">
                            Full Stack JavaScript
                          </Link>
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
                          <Link href="/hire-php-developer">PHP</Link>
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
                          <Link href="/hire-laravel-developer">Laravel</Link>
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
                          <Link href="/hire-python-developer">Python</Link>
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
                          <Link href="/hire-wordpress-developer">
                            WordPress
                          </Link>
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
                          <Link href="/hire-shopify-developer">Shopify</Link>
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
                          <Link href="/hire-dotnet-developer">.Net</Link>
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
                          <Link href="/hire-ui-ux-developer">UI/UX</Link>
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
                          <Link href="/hire-angular-developer">Angular</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 30px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>Mobile Developer</MobileItems>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={native} alt="react" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/hire-react-native-developer">
                            React Native
                          </Link>
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
                          <Link href="/hire-java-developer">Java</Link>
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
                          <Link href="/hire-android-developer">Android</Link>
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
                          <Link href="/hire-swift-developer">Swift</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 30px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>Digital Marketer</MobileItems>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={socialMedia} alt="socialMedia" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/hire-media-expert">
                            Social Media Expert
                          </Link>
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
                          <Link href="/hire-seo-experts">Seo Expert</Link>
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
                          <Link href="/hire-content-writer">
                            Content Writer
                          </Link>
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
                          <Link href="/hire-email-expert">Email Expert</Link>
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
                          <Link href="/hire-ppc-expert">PPC Expert</Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 30px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>Designer</MobileItems>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={uiux} alt="uiux" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/hire-ui-ux-designer">
                            UI/UX Designer
                          </Link>
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
                          <Link href="/hire-graphic-designer">
                            Graphic Designer
                          </Link>
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
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 30px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>Management</MobileItems>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={projectMangment} alt="projectMangment" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/hire-project-management">
                            Project Manager
                          </Link>
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
                          <Link href="/hire-project-coordinator">
                            Project Coordinator
                          </Link>
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
                  </MobileDropDownWrapper>
                  <MobileDropDownWrapper>
                    <MobileDropdown
                      padding="10px 0 30px 0"
                      border="1px solid #eaeaea"
                    >
                      <MobileItems>Quality Assurance</MobileItems>
                    </MobileDropdown>
                    <NavHeadingHover border>
                      <LinkWrapper>
                        <IconWrapper>
                          <Image src={tester} alt="tester" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/hire-sqa-engineer">SQA Engineer</Link>
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
                          <Link href="/hire-tester-engineer">
                            Automation Engineer
                          </Link>
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
                          <Link href="/hire-penetration-tester">
                            Penetration Tester
                          </Link>
                          <span>
                            <FiArrowRight color="#28B781" />
                          </span>
                        </Navlink>
                      </LinkWrapper>
                    </NavHeadingHover>
                  </MobileDropDownWrapper>
                </ExpandAbleItem>
              </MobileDropDownWrapper>
              {/* ******************* Expert Mobile Dropdown ********************* */}
            </MobileNavLinks>
            {dropDown === null && (
              <ButtonWrapper>
                <>
                  <Modal
                    open={modal}
                    setOpen={setModal}
                    bg="#fff"
                    radius="25px"
                    width="1340px"
                    desktopTop="9px"
                    desktopRight="10px"
                    MobileTop="9px"
                    MobileRight="10px"
                    svgColor="black"
                    border="0"
                    child={
                      <DeveloperModal
                        type={type}
                        modal={modal}
                        setModal={setModal}
                      />
                    }
                  />
                </>
                <PrimaryButton
                  width="174"
                  height="45"
                  weight="500"
                  size="18"
                  onClick={() => setModal(true)}
                >
                  Hire an Expert
                </PrimaryButton>
              </ButtonWrapper>
            )}
          </MobileNav>
        </NavHolder>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
