import React, { useState, useRef, useEffect } from "react";
import { Main, ResponsiveImage } from "./HomeMain.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import thumbnail from "../../../assets/images/Homemain/videoPic.png";
import ReactPlayer from "react-player";
import bg from "../../../assets/images/Homemain/homebg.png";
import { Link, animateScroll as scroll } from "react-scroll";
const HomeMain = () => {
  // const vidRef = useRef();
  const [toggle, setToggle] = useState(true);
  // useEffect(() => {
  //   if (vidRef.current) {
  //     vidRef.current.play();
  //   }
  // }, []);
  const handleVideo = () => {
    setTimeout(() => {
      setToggle(true);
    }, 22000);
    setTimeout(() => {
      setToggle(false);
    }, 1000);
  };
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 22000);
  };

  return (
    <Main image={toggle && !clicked ? bg : ""} id="home" clicked={clicked}>
      {toggle && (
        <Container className="container">
          <div>
            <h1>
              Grow your Business Today with <br />
              Brand Strategy.
            </h1>
            <p>
              Build your Search Engine Optimization Foundation <br /> The
              Trusted Experts. We Offer The Right Plans.
            </p>
            <div className="btn">
              <button>GET STARTED</button>
            </div>
          </div>
          <Link smooth spy to="home">
            <div
              className="video"
              onClick={handleVideo}
              style={{ transform: clicked ? "translateY(-500px)" : "none" }}
            >
              <ResponsiveImage
                src={thumbnail}
                onClick={handleButtonClick}
                max={"1030"}
                min="350"
                minh="171.94"
                maxh="506"
                alt="video-image"
              />
            </div>
          </Link>
        </Container>
      )}
      {!toggle && (
        <ReactPlayer
          url="https://res.cloudinary.com/webevistech/video/upload/v1688450478/movie_pvrduj.mp4"
          width="100%"
          height="100%"
          playing={true}
        />
        // <video autoPlay>
        //   <source src="/Videos/video.mp4" type="video/mp4" />
        // </video>
      )}
    </Main>
  );
};

export default HomeMain;
