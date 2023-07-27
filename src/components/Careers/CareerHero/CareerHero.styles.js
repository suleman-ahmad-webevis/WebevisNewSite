import styled from "styled-components";
import Circle1 from "../../../assets/images/Careers/circle1.png";
export const CareerHolder = styled.section`
  background: #0b1011;
  color: #fff;
  padding: 55px 0;
`;
export const Career = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .career {
    width: 50%;
    /* max-width: 624px; */
    .Circle3,
    .Circle4 {
      position: absolute;
      background: rgba(255, 225, 103, 0.2);
      border-radius: 100%;
    }
    .Circle1,
    .Circle2 {
      position: absolute;
      background: #d9d9d9;
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }
    .Circle1 {
      top: 50%;
      right: 40%;
    }
    .Circle2 {
      top: 100px;
      left: 531px;
    }
    .Circle3 {
      top: 65%;
      right: 36%;
      width: 60px;
      height: 60px;
    }
    .Circle4 {
      top: 4%;
      right: 35%;
      width: 43px;
      height: 43px;
    }
    h1 {
      font-size: 70px;
      font-weight: 600;
      line-height: 75px;
      margin-bottom: 40px;
      position: relative;
      z-index: 2;
      &::before {
        content: "";
        position: absolute;
        background-image: url(${Circle1.src});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 265px;
        height: 100px;
        top: 1px;
        left: 36px;
        z-index: -1;
      }
    }
    p {
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 20px;
    }
    .paragraph {
      margin-bottom: 40px;
    }
  }
  .image-holder {
    max-width: 487px;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;
