import React, { useState, useEffect } from "react";
import {
  HomeText,
  HomeWrapper,
  ImageContainer,
  ImageWrapper,
  StyledHome,
} from "./Home.styles";
import devOne from "../../../assets/images/Expert/img1.png";
import devTwo from "../../../assets/images/Expert/img2.png";
import devThree from "../../../assets/images/Expert/img3.png";

const images = [devOne, devTwo, devThree]; // Add more image paths here

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledHome>
      <HomeWrapper>
        <HomeText>
          <h1>
            Hire Our <span>Dedicated Resources</span>
          </h1>
          <p>
            Hire our expert Python Developers skilled in the newest tools and{" "}
            <br />
            technologies to fulfill your project requirements
          </p>
          <button>Hire a top talent</button>
        </HomeText>
        <ImageContainer>
          {images.map((image, index) => (
            <ImageWrapper
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              index={index}
              currentImageIndex={currentImageIndex}
            />
          ))}
        </ImageContainer>
      </HomeWrapper>
    </StyledHome>
  );
};

export default Home;
