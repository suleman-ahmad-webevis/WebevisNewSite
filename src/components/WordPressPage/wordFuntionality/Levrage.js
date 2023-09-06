import React from "react";
import Image from "next/image";
import styled from "styled-components";
import laptop from "../../../../public/assets/images/wordPressPage/laptop.png";

const Levrage = () => {
  return (
    <LevSec>
      <div className="text">
        <h3>
          Leverage Unparalleled <br /> Flexibility
        </h3>
        <h4>
          With our WordPress Development Services, you can leverage the
          unlimited flexibility that WordPress offers as both a CMS and a
          Website Development framework without making compromises.
        </h4>
      </div>
      <div className="text_image">
        <Image src={laptop} alt="laptop" />
      </div>
    </LevSec>
  );
};

export default Levrage;
export const LevSec = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 991px) {
    gap: 30px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  .text {
    width: 50%;
    @media screen and (max-width: 574px) {
      margin-top: 50px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    h3 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      text-transform: capitalize;
      margin-bottom: 30px;
      @media screen and (max-width: 1200px) {
        font-size: 35px;
      }
      @media screen and (max-width: 991px) {
        font-size: 28px;
      }
    }
    h4 {
      color: #434956;
      max-width: 649px;
      font-family: Outfit;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      @media screen and (max-width: 1200px) {
        font-size: 22px;
      }
      @media screen and (max-width: 991px) {
        font-size: 18px;
      }
    }
  }
  .text_image {
    width: 50%;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    img {
      border-radius: 20px;
      max-width: 100%;
      height: auto;
    }
  }
`;
