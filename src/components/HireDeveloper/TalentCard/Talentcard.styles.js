import styled from "styled-components";
import BG from "../../../assets/images/HireDeveloper/Talent-BG.png";
import { BsArrowRightShort } from "react-icons/bs";
import Prev from "../../../assets/images/HireDeveloper/Prev.svg";
import Next from "../../../assets/images/HireDeveloper/Next.svg";

export const SliderHolder = styled.div`
  .slick-slider {
    position: relative;

    .slide {
      padding: 10px;
    }
  }
  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    background-color: #28b781;
    background-image: url(${Prev.src});
    background-size: 70% 70%;
    background-repeat: no-repeat;
    background-position: center;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    left: 43%;
    top: 589px;
    &::before {
      display: none;
    }
    @media screen and (max-width: 514px) {
      top: 590px;
    }
  }
  .slick-arrow.slick-next {
    background-image: url(${Next.src});
    left: 47%;
    top: 589px;
    @media screen and (max-width: 1200px) {
      left: 50%;
    }
    @media screen and (max-width: 514px) {
      top: 590px;
      left: 55%;
    }

    &::before {
      display: none;
    }
  }
`;
export const Talent = styled.div`
  margin: 0 auto;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.17);
`;
export const Head = styled.div`
  background: url(${BG.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 37px 16px 43px;
  color: #fff;
  text-align: right;
  margin-bottom: -50px;

  h3 {
    font-size: 18px;
    font-weight: 400;
  }
`;
export const ImageHolder = styled.div`
  margin-left: 30px;
  width: 99px;
  height: 99px;
  overflow: hidden;
  border: 3px solid #28b781;
  border-radius: 100%;
  background-color: ${({ bgColor }) => bgColor};

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: start;
  padding: 20px 17px 34px 30px;

  h2 {
    color: #434956;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  h4 {
    color: #434956;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    @media screen and (max-width: 1440px) {
      font-size: calc(15px + (18 - 15) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #a1a1a1;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(13px + (16 - 13) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Languages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 255px;
  margin-bottom: 30px;
  span {
    background-color: #eaeaea;
    padding: 9px;
    color: #898989;
    border-radius: 5px;
    font-size: 16px;
  }
`;
