import styled from "styled-components";
import numberbg from "../../../assets/images/Expert/location.gif";

export const StyledHire = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : ""};

  h1 {
    color: #434956;
    text-align: center;

    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const HireProcess = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  gap: 9rem;
  margin-top: 60px;
  position: relative;
  @media screen and (max-width: 1440px) {
    margin-top: calc(40px + (60 - 40) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 996px) {
    gap: 4rem;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 380px) {
    gap: 2rem;
  }
`;
export const ProcessText = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    color: #434956;
    text-align: center;

    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  p {
    color: #434956;
    text-align: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 800px) {
      text-align: left;
    }
    @media screen and (max-width: 768px) {
      width: 200px;
      width: calc(200px + (500 - 200) * (100vw - 390px) / (768 - 390));
      br {
        display: none;
      }
    }
  }
  @media screen and (max-width: 800px) {
    align-items: flex-start;
  }
`;
export const ProcessSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19%;
  gap: 10px;
  @media screen and (max-width: 1214px) {
    width: 25%;
  }
  @media screen and (max-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    /* justify-content: space-around; */
    width: 100%;
    gap: 10px;
  }
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${numberbg.src});
  background-position: center;
  /* background-repeat: no-repeat; */
  background-size: cover;
  width: 106px;
  height: 106px;
  color: #fff;
  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  @media screen and (max-width: 1440px) {
    width: calc(88px + (106 - 87) * (100vw - 390px) / (1440 - 390));
    height: calc(88px + (106 - 87) * (100vw - 390px) / (1440 - 390));
  }
`;
export const FloatingImage = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "0")};
  left: ${({ left }) => (left ? left : "0")};
  @media screen and (max-width: 960px) {
    top: ${({ top1 }) => (top1 ? top1 : "10%")};
  }
  @media screen and (max-width: 520px) {
    top: 5%;
  }
  @media screen and (max-width: 662px) {
    left: 7%;
  }
  @media screen and (max-width: 578px) {
    left: 9%;
  }
  @media screen and (max-width: 440px) {
    left: 10%;
  }
  @media screen and (max-width: 402px) {
    left: 11%;
  }
  @media screen and (max-width: 354px) {
    left: 13%;
  }

  z-index: -1;
  .image {
    width: 927px;
    height: auto;
    object-fit: contain;
    @media screen and (max-width: 1440px) {
      width: calc(390px + (927 - 390) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .imageV {
    @media screen and (min-width: 801px) {
      display: none;
    }
    @media screen and (max-width: 800px) {
      height: calc(390px + (400 - 390) * (100vw - 390px) / (800 - 390));
    }
  }
`;
