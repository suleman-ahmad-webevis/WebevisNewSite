import styled from "styled-components";
import Hero from "../../../assets/images/ContactUs/HeroImg.png";

export const Touch = styled.div`
  width: 100%;
`;

export const HeroImage = styled.div`
  background: url(${Hero.src});
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 764px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  hr {
    border: 1px solid #fff;
    width: 582px;
    top: 566px;
    left: 88px;
  }

  @media screen and (max-width: 991px) {
    margin: 0 auto 50px;
  }
  @media screen and (max-width: 640px) {
    margin: 0 auto 50px;
    height: 489px;
    width: 100%;
    border-radius: unset;
    padding: 20px;

    hr {
      border: 0.606px solid #fff;
      width: 485px;
    }
  }
  @media screen and (max-width: 520px) {
    margin: 0;
    height: 489px;
    width: 100%;
    border-radius: unset;
    padding: 20px;

    hr {
      border: 0.606px solid #fff;
      width: 330px;
    }
  }
`;

export const HeroText = styled.div`
  width: 100%;
  max-width: 323px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (max-width: 1440px) {
    max-width: 431px;
  }

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

  @media screen and (max-width: 640px) {
    max-width: 233px;

    h6 {
      font-size: 14.534px;
    }
    h3 {
      font-size: 28px;
      max-width: 174px;
      line-height: 30px;
    }

    p {
      font-size: 16px;
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

  @media screen and (max-width: 640px) {
    gap: 10px;

    li {
      gap: 15px;
    }

    h6 {
      font-size: 16px;
      line-height: 10px;
      margin-bottom: 10px;
    }
    .text {
      font-size: 14px;
      line-height: 16px;
    }
    .icon-box {
      width: 41.177px;
      height: 41.177px;
      border-radius: 5.008px;
      img {
        width: 15.58px;
        height: 19.83px;
      }
    }
  }
`;

export const Info = styled.div``;
