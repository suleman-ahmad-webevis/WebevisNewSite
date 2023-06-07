import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import Logo from "../../../assets/images/navbar/Logo.png";
import {
  NavStyle,
  NavHolder,
  Nav,
  NavLink,
  NavHover,
  NavUl,
  InsideHover,
  DesignHover,
  CustomerHover
} from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const Navbar = () => {
  return (
    <NavStyle>
      <Container>
        <NavHolder>
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
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
                              href={"/Services/content-marketting-services"}
                            >
                              Content Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href={"/"}>Youtube Marketing</Link>
                          </li>
                          <li>
                            <Link href={"/"}>Affiliate Marketing</Link>
                          </li>
                          <li>
                            <Link href={"/Services/AI-Website-Audit"}>
                              AI Website Audit
                            </Link>
                          </li>
                          <li>
                            <Link href={"/"}>AI Competitor Audit</Link>
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
        </NavHolder>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
