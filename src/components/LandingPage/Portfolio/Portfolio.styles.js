import styled from "styled-components";
export const StyledPortfolio = styled.div`
  padding: 3rem 0 10rem 0;
  @media screen and (max-width: 1440px) {
    padding: 3rem 0 calc(30px + (160 - 30) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const PortfolioWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 calc(20px + (50 - 20) * (100vw - 390px) / (1440 - 390)); */
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;
    margin-bottom: 3rem;

    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const PortFolioButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 1045px) {
    flex-wrap: wrap;
  }
  button {
    p {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 150%;
      leading-trim: both;
      text-edge: cap;
      background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
      }
    }

    &:hover {
      p {
        background: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    @media screen and (max-width: 389px) {
      width: 350;
    }
  }
`;
// export const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 70px;
//   width: 312px;
//   box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.17);
//   border-radius: 7px;
//   transition: 0.5s all ease-in-out;
//   @media screen and (max-width: 1440px) {
//     height: calc(40px + (70 - 40) * (100vw - 390px) / (1440 - 390));
//     width: ${({ maxWidth, minWidth }) =>
//       `calc(${minWidth}px + (${maxWidth} - ${minWidth}) * (100vw - 390px) / (1440 - 390))`};
//   }
//   p {
//     font-family: "Outfit";
//     font-style: normal;
//     font-weight: 600;
//     font-size: 28px;
//     line-height: 150%;
//     leading-trim: both;
//     text-edge: cap;
//     background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     @media screen and (max-width: 1440px) {
//       font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
//     }
//   }

//   &:hover {
//     background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
//     p {
//       background: white;
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//     }
//   }
// `;
export const PortfolioList = styled.div`
  max-width: 1440px;
  margin: 2rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  @media screen and (max-width: 1126px) {
    grid-template-columns: 1fr;
  }
`;
export const PortfolioMainWrapper = styled.div`
  border-radius: 16px;
  position: relative;
  height: 464px;
  width: 640px;
  @media screen and (max-width: 1440px) {
    height: calc(253.75px + (464 - 253.75) * (100vw - 390px) / (1440 - 390));
    width: calc(350px + (640 - 350) * (100vw - 390px) / (1440 - 390));
  }

  box-shadow: 4px 4px 7px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  .image {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;

    transform-origin: 100% 50%;
    transform: translateZ(1000px) perspective(1000px) rotateY(-50deg);
    transition: transform 0.5s ease-in-out, opacity 0.5s,
      -webkit-transform 0.5s ease-in-out;
    height: 475px;
    max-width: 200px;
    /* object-fit: contain; */
    @media screen and (max-width: 1440px) {
      height: calc(253.75px + (475 - 253.75) * (100vw - 390px) / (1440 - 390));
      width: calc(150px + (200 - 150) * (100vw - 390px) / (1440 - 390));
    }
  }

  &:hover {
    box-shadow: none;

    .hover {
      transform: translateZ(800px) perspective(3000px) rotateY(25deg);
      transition: transform 0.5s ease-in, opacity 0.5s,
        -webkit-transform 0.5s ease-in;
      width: 85%;
      border-left: 10px solid rgba(66, 66, 66, 0.25);
      border-radius: 15px;

      animation: identifier ease-in-out 5s;
      @keyframes identifier {
        from {
          width: 100%;
        }
        to {
          width: 85%;
        }
      }
    }

    .image {
      transform: translateZ(1000px) perspective(1000px) rotateY(0deg);
      opacity: 1;
    }
    .color {
      transform: translate(0, 0);
      background: ${({ bgcolor }) =>
        bgcolor
          ? bgcolor
          : "linear-gradient(81deg,#bd7347 -11.32%,rgba(217, 217, 217, 0) 74.67%)"};
      border-radius: 0px 10px 10px 0px;

      p {
        opacity: 1;
      }
    }
  }
`;
export const PortfolioImage = styled.div`
  background: ${({ bg }) => `url(${bg.src})`};
  background-position: 100%;
  background-size: cover;
  background-repeat: no-repeat;

  overflow: hidden;
  transform-origin: 10% 100%;
  transform: translateZ(800px) perspective(3000px) rotateY(0deg);
  transition: transform 0.5s ease-in, opacity 0.5s,
    -webkit-transform 0.5s ease-in;
  animation-play-state: paused;
  height: 464px;
  width: 640px;
  border-radius: 10px;
  @media screen and (max-width: 1440px) {
    height: calc(253.75px + (464 - 253.75) * (100vw - 390px) / (1440 - 390));
    width: calc(350px + (640 - 350) * (100vw - 390px) / (1440 - 390));
  }
`;
export const PortfolioText = styled.div`
  padding: 5rem 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: 0.3s all ease-in-out;
  border-radius: 1px;
  transform: translate(6%, 20%);
  height: 464px;
  width: 640px;
  @media screen and (max-width: 1440px) {
    height: calc(253.75px + (464 - 253.75) * (100vw - 390px) / (1440 - 390));
    width: calc(350px + (640 - 350) * (100vw - 390px) / (1440 - 390));
  }
`;
export const ImageWrapper = styled.div`
  img {
    max-width: 100% !important;
    height: auto !important;
  }
`;
export const TextMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  h2 {
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : "3rem")};
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    leading-trim: both;
    text-edge: cap;
    text-align: center;
    text-transform: none;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  h4 {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    leading-trim: both;
    text-edge: cap;
    text-align: center;
    text-transform: none;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    opacity: 0;
    width: 50%;
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    leading-trim: both;
    text-edge: cap;
    text-align: left;
    text-transform: none;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (16 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
