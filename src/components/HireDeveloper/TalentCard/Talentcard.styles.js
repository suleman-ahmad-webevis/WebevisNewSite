import styled from "styled-components";
import BG from "../../../assets/images/HireDeveloper/Talent-BG.png";
import { BsArrowRightShort } from "react-icons/bs";
import Prev from "../../../assets/images/HireDeveloper/Prev.svg";
import Next from "../../../assets/images/HireDeveloper/Next.svg";

export const SliderHolder = styled.div`
  .slick-slide {
    max-width: 319px;
    margin: 10px;
  }
  .slick-slider {
    position: relative;
  }
  .slick-arrow.slick-prev {
    background-color: #28b781;
    background-image: url(${Prev.src});
    background-size: 100% 100%;
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
  }
  .slick-arrow.slick-next {
    background-color: #28b781;
    background-image: url(${Next.src});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    left: 47%;
    top: 589px;
    &::before {
      display: none;
    }
  }
`;
export const Talent = styled.div`
  max-width: 319px;
  margin: 0 auto;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.17);
`;
export const Head = styled.div`
  background: url(${BG.src});
  background-repeat: no-repeat;
  background-position: center;
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
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;
export const Card = styled.div`
  padding: 20px 17px 34px 30px;
  h2 {
    color: #434956;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  h4 {
    color: #434956;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    color: #a1a1a1;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
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
