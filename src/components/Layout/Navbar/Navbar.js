import React from "react";
import { Container } from "src/components/Container.styles";
import Logo from "../../../assets/images/navbar/Logo.png"
import { NavStyle,NavHolder,Nav } from "./Navbar.styles";
import Image from "next/image";
import Link from 'next/link'
const Navbar = () => {
  return (
    <NavStyle>
    <Container>
      <NavHolder>
        <Link href="/"><Image src={Logo} alt="Logo" /></Link>
      <Nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutUs">About</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Dedicated Resources</a></li>
        </ul>
        <button>KICK OFF YOUR PROJECT</button>
      </Nav>
      </NavHolder>
    </Container>
    </NavStyle>
  )
};

export default Navbar;
