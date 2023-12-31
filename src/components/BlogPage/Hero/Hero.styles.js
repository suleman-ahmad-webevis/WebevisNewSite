import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

export const ArrowDown = styled(AiOutlineArrowDown)`
  font-size: 20px;
  color: #28b781;
  line-height: 1px;
  margin-bottom: 7px;
`;
export const Blog = styled.div`
  background-color: #eaf7ee;
  padding: 56px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(80px + (56 - 80) * (100vw - 390px) / (1440 - 390)) 0
      calc(0px + (56 - 0) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const HeroParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 40px;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    row-gap: 0;
  }
`;
export const HeroSec = styled.section`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }

  h1 {
    color: #434956;
    font-size: 70px;
    font-style: normal;
    font-weight: 800;
    line-height: 97%;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    width: 80%;
    color: #434956;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Input = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 40px;
  max-width: 555px;
  @media screen and (max-width: 1440px) {
    margin-top: calc(30px + (40 - 30) * (100vw - 390px) / (1440 - 390));
    padding: calc(13px + (16 - 13) * (100vw - 390px) / (1440 - 390))
      calc(15px + (20 - 15) * (100vw - 390px) / (1440 - 390));
  }
`;
export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 80%;

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 1;
  }
  input {
    width: 100%;
    outline: none;
    color: #959ead;
    font-size: 16px;
    font-weight: light;
  }
`;
export const Popular = styled.div`
  display: flex;
  gap: 15px;
  align-items: none;
  margin-top: 20px;
  max-width: 520px;
  @media screen and (min-width: 434px) {
    align-items: center;
  }
  span {
    flex-shrink: 0;
    font-size: 16px;
    color: #5a7184;
  }
`;
export const BtnHolder = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
export const BlogWrapper = styled.section`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;
export const BlogButton = styled.button`
  margin: 0 5px;
  white-space: nowrap;
  background: ${({ bg }) =>
    bg ? bg : "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"};
  border-radius: ${({ radius }) => (radius ? radius : "12px")};
  height: ${({ height }) => (height ? `${height}px` : "")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? `${size}px` : "18px")};
  padding: ${({ padding }) => (padding ? `${padding}px` : "0px 20px")};
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : "600")};
  line-height: normal;
  transition: 0.5s all ease-in-out;
  box-shadow: ${({ shadow }) => (shadow ? shadow : "")};
  display: ${({ flex }) => (flex ? flex : "")};
  align-items: ${({ items }) => (items ? items : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  border: ${({ border }) => (border ? border : "none")};
  @media screen and (max-width: 1440px) {
    height: ${({ height, minheight }) => (
      height,
      minheight
        ? `calc(${minheight}px + (${height} - ${minheight}) * (100vw - 390px) / (1440 - 390))`
        : `${height}px`
    )};
    font-size: ${({ size, minsize }) => (
      size,
      minsize
        ? `calc(${minsize}px + (${size} - ${minsize}) * (100vw - 390px) / (1440 - 390))`
        : `${size}px`
    )};
  }
  &:hover {
    background: ${({ hover }) =>
      hover ? hover : " linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"};
    box-shadow: ${({ shadowH }) =>
      shadowH ? shadowH : " 0px 3px 10px 0px rgba(255, 204, 3, 0.43)"};
  }
`;

export const BlogMainWrapper = styled.div`
  .no-blog {
    color: #434956;
    margin-top: 20px;
    font-weight: 500;
    font-size: 18px;
    margin-left: 20px;
  }
  .filter {
    /* display: flex;
    align-items: center;
    justify-content: flex-start; */
    /* gap: 15px; */
    /* width: 600px; */
    /* height: 60px; */
    margin: 50px 0 0 20px;
    @media screen and (max-width: 768px) {
      margin: 20px 0 0 0px;
      width: 300px;
    }
    /* overflow: hidden; */
    p {
      flex-shrink: 0;
      color: #5a7184;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .buttonWrapper {
      margin: 0 auto;
      /* width: 650px; */
      .slick-slide {
        margin: 0 10px;
      }
      /* height: 45px; */
      /* padding: 0 5px; */
      /* flex-shrink: 0; */
      /* display: flex;
      align-items: center;
      overflow-y: auto; */

      /* gap: 10px;
      @media screen and (max-width: 768px) {
        width: 250px;
      } */
      /* Scrollbar styles */
      ::-webkit-scrollbar {
        width: 5px;
        height: 0px;
      }

      ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
      }

      /* Additional styles for cross-browser compatibility */
      * {
        scrollbar-width: thin;
        scrollbar-color: #888 #f1f1f1;
      }

      *::-webkit-scrollbar {
        width: 5px;
      }

      *::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }

      *::-webkit-scrollbar-thumb {
        background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
        border-radius: 24px;
      }
    }
  }
`;
export const Buton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 40px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: #fff;
    border: 1px solid #28b781;
    border-radius: 10px;
    color: #28b781;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    width: 181px;
    height: 48px;
    .btn {
      margin-top: 4px;
    }
  }
`;
