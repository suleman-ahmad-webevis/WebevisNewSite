import React, { useState, useRef, useEffect } from "react";
import { Main, ResponsiveImage } from "./HomeMain.styles";
import { Container } from "src/components/Container.styles";
import thumbnail from "../../../assets/images/Homemain/videoPic.png";
import ReactPlayer from "react-player";
import bg from "../../../assets/images/Homemain/homebg.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
const HomeMain = () => {
  // const vidRef = useRef();
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  // useEffect(() => {
  //   if (vidRef.current) {
  //     vidRef.current.play();
  //   }
  // }, []);

  const handleVideo = () => {
    setTimeout(() => {
      setToggle(false);
    }, 1000);
    // setToggle(false);
  };
  const Current = () => {
    setToggle(true);
    setClicked(false);
    setIsMuted(true);
    console.log("ended");
  };

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setIsMuted(false);
    }, 1000);
  };

  return (
    <Main image={toggle && !clicked ? bg : ""} id="home" clicked={clicked}>
      {toggle && (
        <Container className="container">
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
            child={<ServiceModal />}
          />
          <div>
            <h1>
              Transforming Your Ideas Into
              <br /> Tangible Success Stories
            </h1>

            <p>
              As a full-stack digital agency, we transform your vision into{" "}
              tangible business <br /> outcomes with our end-to-end IT
              solutions.
            </p>

            <div className="btn">
              <PrimaryButton
                radius="45px"
                width="282"
                minWidth="160"
                height="50"
                minheight="40"
                size="18"
                minsize="16"
                onClick={() => setModal(true)}
              >
                GET STARTED
              </PrimaryButton>
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
        <video autoPlay playsInline muted={isMuted} onEnded={Current}>
          <source
            src="https://res.cloudinary.com/dlysixl4e/video/upload/v1692710781/new_video_2_wprub5.mp4"
            type="video/mp4"
          />
          Your browser does not support the video.
        </video>
      )}
    </Main>
  );
};

export default HomeMain;
