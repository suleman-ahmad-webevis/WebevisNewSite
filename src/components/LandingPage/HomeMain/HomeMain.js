import React, { useState, useRef } from "react";
import { Main, ResponsiveImage } from "./HomeMain.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import thumbnail from "../../../assets/images/Homemain/videoPic.png";
const HomeMain = () => {
  const videoRef = useRef(null);
  const [toggle, setToggle] = useState(true);
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
    <Main>
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

          <div
            className="video"
            onClick={handleVideo}
            style={{ transform: clicked ? "translateY(-320px)" : "none" }}
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
        </Container>
      )}
      {!toggle && (
        <div>
          {/* onClick={() => setToggle(true)} */}
          <video ref={videoRef} autoPlay>
            <source src="/Videos/video-1.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </Main>
  );
};

export default HomeMain;
