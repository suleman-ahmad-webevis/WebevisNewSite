import React, { useState } from "react";
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
} from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiInfo, FiArrowRight } from "react-icons/fi";
import blog from "../../../assets/images/navbar/blog.png";
import career from "../../../assets/images/navbar/promotion.png";
import profiles from "../../../assets/images/navbar/profiles.png";
import csr from "../../../assets/images/navbar/csr.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [dropItem, setDropItem] = useState(false);
  const [design, setDesign] = useState(false);
  const [customer, setCustomer] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle);
    setDropItem(false);
    setDesign(false);
  };
  const handelDrop = () => {
    setDropDown(!dropDown);
  };
  const handelDropItem = () => {
    setDropItem(!dropItem);
  };
  const handelDesign = () => {
    setDesign(!design);
    setDropItem(false);
  };
  const handelCsr = () => {
    setDesign(false);
    setDropItem(false);
    setCustomer(!customer);
  };

  return (
    <NavStyle>
      <Container>
        <NavHolder>
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
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
                <NavHover className="only" top="70%" left="0%" width="250">
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
                        <Image src={blog} alt="blogs" />
                      </IconWrapper>
                      <Navlink>
                        <Link href="/">Blog</Link>
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
                  className="only"
                  top="73%"
                  left="auto"
                  width="1383"
                  right="-3%"
                  min="390"
                >
                  <Hoverctive direction="row">
                    <NavHeadingHover>
                      <h5>Web Development</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <FiInfo size={25} />
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
                          <Image src={blog} alt="blogs" />
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
                          <Image src={career} alt="career" />
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
                          <Image src={profiles} alt="profiles" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Ecommerce</Link>
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
                          <FiInfo size={25} />
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
                          <Image src={blog} alt="blogs" />
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
                          <Image src={career} alt="career" />
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
                          <Image src={profiles} alt="profiles" />
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
                          <FiInfo size={25} />
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
                          <Image src={blog} alt="blogs" />
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
                          <Image src={career} alt="career" />
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
                          <Image src={profiles} alt="profiles" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={blog} alt="blogs" />
                        </IconWrapper>
                        <Navlink>
                          <Link href="/">Blog</Link>
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
                  className="only"
                  top="70%"
                  left="auto"
                  width="856"
                  min="390"
                  right="-3%"
                >
                  <Hoverctive direction="row">
                    <NavHeadingHover>
                      <h5>Web Developers</h5>
                      <LinkWrapper>
                        <IconWrapper>
                          <FiInfo size={25} />
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
                          <Image src={blog} alt="blogs" />
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
                          <Image src={career} alt="career" />
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
                          <Image src={profiles} alt="profiles" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <Image src={csr} alt="csr" />
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
                          <FiInfo size={25} />
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
                          <Image src={blog} alt="blogs" />
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
                          <Image src={career} alt="career" />
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
                          <Image src={profiles} alt="profiles" />
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
                            <FiInfo size={25} />
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
                            <Image src={blog} alt="blogs" />
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
                            <Image src={career} alt="career" />
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
                            <Image src={profiles} alt="profiles" />
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
                            <Image src={profiles} alt="profiles" />
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
                          <FiInfo size={25} />
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
                          <Image src={blog} alt="blogs" />
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
                            <FiInfo size={25} />
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
                            <Image src={blog} alt="blogs" />
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
                            <FiInfo size={25} />
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
                            <Image src={blog} alt="blogs" />
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
                            <Image src={blog} alt="blogs" />
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
                {/*************************** Industries DropDown *****************************/}
              </li>
              <li>
                <MobileDropdown>
                  <Link href="/">Expert Pool</Link>
                  <IoMdArrowDropdown color="#434956" />
                </MobileDropdown>
                {/*************************** Expert DropDown *****************************/}
                <NavHover className="only" top="70%" left="45%" width="300">
                  <Hoverctive>
                    <LinkWrapper>
                      <IconWrapper>
                        <FiInfo size={25} />
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
                        <Image src={blog} alt="blogs" />
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
                        <Image src={career} alt="career" />
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
                        <Image src={profiles} alt="profiles" />
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
                        <Image src={csr} alt="csr" />
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
                        <Image src={csr} alt="csr" />
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
                        <Image src={csr} alt="csr" />
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
                {/*************************** Expert DropDown *****************************/}
              </li>
            </NavUl>
            <button>KICK OFF YOUR PROJECT</button>
          </Nav>
          <MobileNavItem width={!toggle && "100%"}>
            <MobileItems href="/">Comapany</MobileItems>
            <MobileItems href="/aboutUs">About</MobileItems>
            <MobileDropdown>
              <MobileItems href="/Services">Services</MobileItems>
              <IoMdArrowDropdown onClick={handelDrop} />
            </MobileDropdown>
            {dropDown && (
              <>
                <MobileDropdownItems>
                  <MobileDropdown onClick={handelDropItem}>
                    <li>Digital Marketing</li>
                    <IoMdArrowDropdown onClick={handelDropItem} />
                  </MobileDropdown>
                  {dropItem && (
                    <>
                      <MobileItems href="/Services/Seo-Services">
                        Search Engine Optimization
                      </MobileItems>
                      <MobileItems href={"/Services/Sem-Services"}>
                        Search Engine Marketing
                      </MobileItems>
                      <MobileItems href={"/Services/socialMedia"}>
                        Social Media Optimization
                      </MobileItems>
                      <MobileItems href={"/Services/Email-Services"}>
                        Email Marketing
                      </MobileItems>
                      <MobileItems
                        href={"/Services/Content-Marketting-Services"}
                      >
                        Content Marketing
                      </MobileItems>
                      <MobileItems href={"/Services/AI-Website-Audit"}>
                        AI Website Audit
                      </MobileItems>
                      <MobileItems href={"/Services/AI-Competitor-Analysis"}>
                        AI Competitor Analysis
                      </MobileItems>
                      <MobileItems href={"/"}>Youtube Marketing</MobileItems>
                    </>
                  )}
                </MobileDropdownItems>
                <MobileDropdownItems>
                  <MobileDropdown onClick={handelDesign}>
                    <li>Design and Marketing</li>
                    <IoMdArrowDropdown />
                  </MobileDropdown>
                  {design && (
                    <>
                      <MobileItems href="/Services">
                        Graphic Designing
                      </MobileItems>
                      <MobileItems href={"/Services"}>PSD to HTML</MobileItems>
                      <MobileItems href={"/Services"}>
                        Web App Development
                      </MobileItems>
                      <MobileItems href={"/Services"}>
                        ecommence Web Development
                      </MobileItems>
                      <MobileItems href={"/Services"}>
                        Mobile App Development
                      </MobileItems>
                      <MobileItems href={"/Services"}>DevOpS</MobileItems>
                      <MobileItems href={"/Services"}>
                        Wordpress Development
                      </MobileItems>
                      <MobileItems href={"/"}>Youtube Marketing</MobileItems>
                    </>
                  )}
                </MobileDropdownItems>
                <MobileDropdownItems>
                  <MobileDropdown onClick={handelCsr}>
                    <li>Customer Services</li>
                    <IoMdArrowDropdown />
                  </MobileDropdown>
                  {customer && (
                    <>
                      <MobileItems href="/Services/Seo-Services">
                        Email Chat Support
                      </MobileItems>
                      <MobileItems href={"/Services/Sem-Services"}>
                        InBound Calls
                      </MobileItems>
                      <MobileItems href={"/Services/socialMedia"}>
                        OutBound Calls
                      </MobileItems>
                      <MobileItems href={"/Services/Email-Services"}>
                        Cold Calling
                      </MobileItems>
                    </>
                  )}
                </MobileDropdownItems>
              </>
            )}

            <MobileItems href="/aboutUs">Products</MobileItems>
            <MobileItems href="/aboutUs">Dedicated Resources</MobileItems>
          </MobileNavItem>
        </NavHolder>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
