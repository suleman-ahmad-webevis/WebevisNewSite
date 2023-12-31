import styled from "styled-components";
export const ServiceSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 100%;
`;
export const ServiceTxt = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 451px) {
    gap: 2px;
  }
  p {
    margin: 0 !important;
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    color: #424954;
    @media screen and (max-width: 551px) {
      font-size: 20px;
    }
    @media screen and (max-width: 451px) {
      font-size: 18px;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 45px;
    line-height: 56px;
    color: #424954;
    @media screen and (max-width: 551px) {
      font-size: 40px;
    }
    @media screen and (max-width: 451px) {
      font-size: 30px;
    }
  }
`;
export const ServiceSlider = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-image: url(${(props) => props.image.src});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  padding: 20px 40px 0 40px;
  transition: 0.5s;
  @media screen and (max-width: 1440px) {
    height: calc(450px + (590 - 450) * (100vw - 390px) / (1440 - 750));
    /* height: 450px; */
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
    /* height: calc(590px + (715 - 590) * (100vw - 390px) / (750 - 390)); */
  }
  @media screen and (max-width: 570px) {
    padding: 20px 25px 0 25px;
  }
  @media screen and (max-width: 400px) {
    padding: 20px 15px 0 15px;
  }
`;
export const SliderText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0 8rem 0;
  gap: 1rem;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ color }) => (color ? color : "white")};
    text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ color }) => (color ? color : "white")};
    text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.07);
    @media screen and (max-width: 1301px) {
      font-size: 35px;
      line-height: 140%;
    }
    @media screen and (max-width: 1151px) {
      font-size: 30px;
      line-height: 150%;
    }
    @media screen and (max-width: 1001px) {
      font-size: 25px;
      line-height: 150%;
    }
    @media screen and (max-width: 887px) {
      font-size: 22px;
      line-height: 190%;
    }
    @media screen and (max-width: 887px) {
      font-size: 20px;
    }
    @media screen and (max-width: 750px) {
      font-size: 35px;
      line-height: 150%;
    }
    @media screen and (max-width: 640px) {
      font-size: 30px;
      line-height: 150%;
    }
    @media screen and (max-width: 640px) {
      font-size: 30px;
      line-height: 150%;
    }
    @media screen and (max-width: 570px) {
      font-size: 25px;
      line-height: 140%;
    }
    @media screen and (max-width: 470px) {
      font-size: 20px;
      line-height: 140%;
    }
  }
`;
export const Arrow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.5s;

  img {
    display: none;
  }
  &:hover {
    transform: translateX(30px);
    @media screen and (max-width: 501px) {
      transform: translateX(10px);
    }
    img {
      display: block;
      @media screen and (max-width: 470px) {
        width: 25px;
        height: 8px;
      }
    }
  }
`;
export const SliderImg = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  img {
    display: inline-block;
    vertical-align: bottom;
    max-width: 100%;
    height: auto;
    /* @media screen and (max-width: 1001px) {
      height: 450px;
    }
    @media screen and (max-width: 570px) {
      height: 400px;
    }
    @media screen and (max-width: 410px) {
      height: 320px;
    } */
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;
