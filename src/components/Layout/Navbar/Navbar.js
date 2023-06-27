import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import Logo from "/assets/Images/Logo.jpg";
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
} from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

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
              <TbMenu2 size={25} color="white" />
            ) : (
              <RxCross1 size={25} color="white" />
            )}
          </MobileNav>
          <Nav>
            <NavUl>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutUs">About</Link>
              </li>
              <li>
                <Link href="Services">Services</Link>
                <NavHover className="only">
                  <ul>
                    <li>
                      <a href="#">Digital Marketing</a>
                      <MdArrowForwardIos />
                      <InsideHover className="one">
                        <ul>
                          <li>
                            <Link href="/Services/Seo-Services">
                              Search Engine Optimization
                            </Link>
                          </li>
                          <li>
                            <Link href={"/Services/Sem-Services"}>
                              Search Engine Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href={"/Services/socialMedia"}>
                              Social Media Optimization
                            </Link>
                          </li>
                          <li>
                            <Link href={"/Services/Email-Services"}>
                              Email Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/Services/Content-Marketting-Services"}
                            >
                              Content Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/Services/Youtube-Marketting-Services"}
                            >
                              Youtube Marketing
                            </Link>
                          </li>

                          <li>
                            <Link href={"/Services/AI-Website-Audit"}>
                              AI Website Audit
                            </Link>
                          </li>
                          <li>
                            <Link href={"/Services/AI-Competitor-Analysis"}>
                              AI Competitor Analysis
                            </Link>
                          </li>
                        </ul>
                      </InsideHover>
                    </li>
                    <li>
                      <a href="#">Design and Marketing</a>
                      <MdArrowForwardIos />
                      <DesignHover className="two">
                        <ul>
                          <li>
                            <Link href={"/"}>Graphic Designing</Link>
                          </li>
                          <li>
                            <Link href={"/"}>PSD to HTML</Link>
                          </li>
                          <li>
                            <Link href={"/"}>Web App Development</Link>
                          </li>
                          <li>
                            <Link href={"/"}>ecommence Web Development</Link>
                          </li>
                          <li>
                            <Link href={"/"}>Mobile App Development</Link>
                          </li>
                          <li>
                            <Link href={"/"}>DevOpS</Link>
                          </li>
                          <li>
                            <Link href={"/"}>Wordpress Development</Link>
                          </li>
                        </ul>
                      </DesignHover>
                    </li>
                    <li>
                      <a href="#">Customer Services</a>
                      <MdArrowForwardIos />
                      <CustomerHover className="three">
                        <ul>
                          <li>
                            <Link href={"/"}>Email Chat Support</Link>
                          </li>
                          <li>
                            <Link href={"/"}>InBound Calls</Link>
                          </li>
                          <li>
                            <Link href={"/"}>OutBound Calls</Link>
                          </li>
                          <li>
                            <Link href={"/"}>Cold Calling</Link>
                          </li>
                        </ul>
                      </CustomerHover>
                    </li>
                  </ul>
                </NavHover>
              </li>
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#">Dedicated Resources</Link>
              </li>
            </NavUl>
            <button>KICK OFF YOUR PROJECT</button>
          </Nav>
          {!toggle && (
            <MobileNavItem top={!toggle && "100%"}>
              <MobileItems href="/">Home</MobileItems>
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
                        <MobileItems href={"/Services"}>
                          PSD to HTML
                        </MobileItems>
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
          )}
        </NavHolder>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
