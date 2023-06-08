import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import Logo from "../../../../assets/images/navbar/Logo.png";
import { NavStyle, NavHolder, Nav } from "./Navbar.styles";
import Image from "next/image";
import Link from "next/link";
const Navbar = ({ location }) => {
  const [isActive, setIsActive] = useState(false);
  const myFunction = () => {
    console.log("fff");
    var element = document.getElementsByTagName("body");
    console.log({ element });
    element[0].classList.toggle("active");
  };
  let activeStyle = {
    borderBottom: "3px solid #4783d8",
    color: "#4783d8",
    transition: ".5s",
  };

  return (
    <NavStyle>
      <Container>
        <NavHolder>
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
          <Nav>
            <div className="toggle" onClick={myFunction}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={
                location == "/" ? "navigation nav-class" : "navigation"
              }
            >
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/aboutUs">About</Link>
                </li>
<<<<<<< HEAD
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Dedicated Resources</a>
                </li>
=======
                <li>{/* <a href="/Services">Services</a> */}</li>
                <li></li>
                <li>{/* <a href="#">Dedicated Resources</a> */}</li>
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
              </ul>
              <button>KICK OFF YOUR PROJECT</button>
            </div>
          </Nav>
        </NavHolder>
      </Container>
    </NavStyle>
  );
};

export default Navbar;
