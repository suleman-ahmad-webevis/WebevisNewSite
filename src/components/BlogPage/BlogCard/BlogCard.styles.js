import styled from "styled-components";
import overlay from "../../../../public/assets/images/Blog/overlay.png";
import Link from "next/link";

export const MainCardWrapper = styled(Link)``;

export const Aticle = styled.div`
  width: 31.5%;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.22);
  padding: 20px 25px;
  text-align: left;
  position: relative;
  transition: 0.3s all ease-in-out;
  @media screen and (max-width: 1199px) {
    width: 30.5%;
  }
  @media screen and (max-width: 991px) {
    width: 47%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 417px;
    margin: 0 auto 30px;
  }

  &::after {
    content: "";
    border-radius: 18px;
    position: absolute;
    top: 0;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
    z-index: -1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: 0.3s all ease-in-out;
  }

  .Card-Skeleton-Img {
    width: 100%;
    height: 238px;
  }
  .img-box {
    overflow: hidden;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.31);
    position: relative;
    border-radius: 15px;
    transition: 0.3s all ease-in-out;
    max-width: 386px;
    max-height: 238px;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: url(${overlay.src});
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 10;
      transition: 0.3s all ease-in-out;
    }
    img {
      width: 100%;
      max-width: 100%;
      /* height: auto; */
      border-radius: 14px;
      transition: all 0.3s ease-in-out;
      filter: grayscale(100%);
      object-fit: cover;
    }
  }

  .read-more {
    color: #424954;
    font-size: 20px;
    font-weight: 500;
    background-color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  &:hover {
    &::after {
      content: "";
      top: 7px;
      left: 7px;
    }
    .img-box {
      &:before {
        visibility: hidden;
        opacity: 0;
      }
      img {
        filter: grayscale(0%);
        transform: scale(1.05);
      }
    }
    .read-more {
      color: #28b781;
    }
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  justify-content: space-between;

  .Heading-Skeleton {
    width: 380px;
  }
  .ReadMore-Skeleton {
    width: 120px;
  }
  h3 {
    color: #424954;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    flex-grow: 1;
    @media screen and (max-width: 1440px) {
      font-size: calc(19px + (24 - 19) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #a1a1a1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 15px;

    @media screen and (max-width: 1440px) {
      font-size: calc(13px + (16 - 13) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Date = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 12px;
  padding: 0 5px;
  span {
    color: #a1a1a1;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    img {
      width: 15px;
      height: 15px;
    }

    .Date-Skeleton {
      width: 100px;
    }
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1199px) {
      font-size: 15px;
    }
  }
`;
