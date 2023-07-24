import styled from "styled-components";
import Hero from "../../../assets/images/ContactUs/HeroImg.png";

export const Touch = styled.div``;

export const HeroImage = styled.div`
  background: url(${Hero.src});
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 644px;
  height: 764px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  hr {
    border: 1px solid #fff;
    width: 582px;
    top: 566px;
    left: 88px;
  }

  @media screen and (max-width: 1440px) {
    width: calc(390px + (644 - 390) * (100vw - 390px) / (1440 - 390));
    height: calc(466.667px + (764 - 489) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const HeroText = styled.div`
  width: 100%;
  max-width: 323px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3 {
    color: #fff;
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    max-width: 279px;

    @media screen and (max-width: 1440px) {
      font-size: calc(
        30.792px + (45 - 30.792) * (100vw - 390px) / (1440 - 390)
      );
    }
  }

  h6 {
    color: #fff;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
  }

  p {
    color: #fff;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;

    @media screen and (max-width: 1440px) {
      font-size: calc(
        16.422px + (24 - 16.422) * (100vw - 390px) / (1440 - 390)
      );
    }
  }
`;

export const Icon = styled.div`
  background: url(${Hero.src});
`;

export const HeroInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 33px;

  h6 {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;
  }

  .text {
    font-size: 18px;
    line-height: 22px;
    display: block;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }
  .text-box {
    flex-grow: 1;
  }
  .icon-box {
    background-color: #fff;
    width: 74px;
    height: 74px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
  }
`;

export const Info = styled.div``;
