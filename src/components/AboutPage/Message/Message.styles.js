import styled from "styled-components";
import Ceo from "../../../assets/images/AboutUs/Ceo.png";

export const StyledMessage = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 93px;
  @media screen and (max-width: 1236px) {
    gap: 53px;
  }
  @media screen and (max-width: 1024px) {
    padding: 50px 20px;
    align-items: flex-start;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  gap: 10px;
  h1 {
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 15px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const CeoImage = styled.div`
  background: url(${Ceo.src});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 511.5px;
  height: 682px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  h3 {
    color: #fff;
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 500;
    /* line-height: 150%; */
    @media screen and (max-width: 1440px) {
      font-size: calc(
        30.792px + (45 - 30.792) * (100vw - 390px) / (1440 - 390)
      );
    }
  }
  p {
    color: #fff;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    @media screen and (max-width: 1440px) {
      font-size: calc(
        16.422px + (24 - 16.422) * (100vw - 390px) / (1440 - 390)
      );
    }
  }
  @media screen and (max-width: 1440px) {
    width: calc(350px + (511.5 - 350) * (100vw - 390px) / (1440 - 390));
    height: calc(466.667px + (682 - 466.667) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
export const SocialIcon = styled.span`
  background: #fff;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    width: calc(29px + (44 - 29) * (100vw - 390px) / (1440 - 390));
    height: calc(29.667px + (44 - 29) * (100vw - 390px) / (1440 - 390));
  }
  img {
    width: 20px;
    height: 20px;
    @media screen and (max-width: 1440px) {
      width: calc(13px + (20 - 13) * (100vw - 390px) / (1440 - 390));
      height: calc(13px + (20 - 13) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
