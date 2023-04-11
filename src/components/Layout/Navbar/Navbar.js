import React from "react";
import { Container } from "src/components/Container.styles";
import Logo from "../../../assets/images/navbar/Logo.png";
import { NavStyle, NavHolder, Nav } from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = ({ children, href }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };
  return (
    <NavStyle>
      <Container>
        <NavHolder>
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
          <Nav>
            <ul>
              <li>
                <Link href="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" activeClassName="active">
                  About
                </Link>
              </li>
              <li>
                <Link href="Services" style={style}>
                  Services
                </Link>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Dedicated Resources</a>
              </li>
            </ul>
            <button>KICK OFF YOUR PROJECT</button>
          </Nav>
        </NavHolder>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
