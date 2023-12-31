import styled from "styled-components";
import Image from "next/image";
export const Main = styled.div`
  background-color: white;
  background: url(${(props) => props.image.src});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  color: #fff;
  z-index: 5;
  padding-top: 50px;
  margin-bottom: ${({ clicked }) => (clicked ? "0px" : "250px")};

  @media screen and (max-width: 1440px) {
    margin-bottom: ${({ clicked }) => (clicked ? "0px" : "250px")};
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: ${({ clicked }) => (clicked ? "0px" : "200px")};
  }
  @media screen and (max-width: 768px) {
    margin-bottom: ${({ clicked }) => (clicked ? "0px" : "150px")};
  }
  @media screen and (max-width: 526px) {
    margin-bottom: ${({ clicked }) => (clicked ? "0px" : "100px")};
  }
  /* @media screen and (min-width: 1400px) {
    padding-top: 80px;
  } */
  .container {
    @media screen and (min-width: 767px) {
      padding-right: 0;
    }
    @media screen and (min-width: 1400px) {
      padding-right: initial;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    @media screen and (min-width: 768px) {
      justify-content: start;
      padding-bottom: 0;
    }
  }
  button {
    margin: 2rem auto 4rem auto;
    @media screen and (max-width: 389px) {
      width: 160px;
    }
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    line-height: 88px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.07);
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(40px + (88 - 40) * (100vw - 390px) / (1440 - 390));
    }

    @media screen and (max-width: 600px) {
      margin-bottom: 20px;

      br {
        display: none;
      }
    }
    @media screen and (min-width: 768px) {
      margin-top: 0;
      padding-bottom: 0;
    }
    @media screen and (min-width: 992px) {
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1400px) {
      margin-bottom: 55px;
      max-width: initial;
    }
  }
  p {
    padding-bottom: 20px;
    margin: 0 auto;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: normal;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }

    @media screen and (min-width: 768px) {
      /* margin: 0; */
    }
    @media screen and (max-width: 600px) {
      br {
        display: none;
      }
    }
    @media screen and (min-width: 1400px) {
      padding-bottom: 42px;
    }
  }
  .video {
    display: flex;
    justify-content: center;
    transition: 1s all ease-in-out;
    z-index: 10;

    img {
      margin-bottom: -240px;

      @media screen and (max-width: 1440px) {
        margin-bottom: calc(
          -38px + (-240 + 80) * (100vw - 390px) / (1440 - 390)
        );
      }
      box-shadow: 0px -20px 20px -20px rgba(40, 183, 129, 1),
        20px 0px 20px -20px rgba(40, 183, 129, 1),
        0px 20px 20px -20px rgba(40, 183, 129, 1),
        -20px 0px 20px -20px rgba(40, 183, 129, 1);
      border-radius: 24px;

      /* @media screen and (min-width: 400px) {
        margin-bottom: -100px;
      }
      @media screen and (min-width: 576px) {
        margin-bottom: -120px;
      }
      @media screen and (min-width: 768px) {
        margin-bottom: -150px;
      }
      @media screen and (min-width: 992px) {
        margin-bottom: -180px;
      }
      @media screen and (min-width: 1130px) {
        margin-bottom: -200px;
      }
      @media screen and (min-width: 1200px) {
        margin-bottom: -240px;
      } */
    }
  }
  video {
    width: 100%;
    margin-top: -50px;
  }
  iframe {
    width: 100%;
    height: 600px;
  }
`;
export const ResponsiveImage = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
    height: ${({ maxh, minh }) => (
      maxh,
      minh
        ? `calc(${minh}px + (${maxh} - ${minh}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
  object-fit: contain;
  cursor: pointer;
`;
