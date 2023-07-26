import styled from "styled-components";
import HeroBG from "../../../assets//images/Services/AICompetitorAnalysis/HeroBG.png";
import Image from "next/image";

export const HeroContainer = styled.div`
  padding: 40px 30px 68px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url(${HeroBG.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1010px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: auto;
  @media screen and (max-width: 1010px) {
    width: 95%;
    align-items: center;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 60px;
    line-height: 76px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(40px + (76 - 40) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1010px) {
      text-align: center;
    }
  }
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1133px) {
      br {
        display: none;
      }
    }
    @media screen and (max-width: 1010px) {
      text-align: center;
    }
  }
`;

export const SearchCompetitor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  background: #ffffff;
  border-radius: 9px;
  @media screen and (max-width: 1010px) {
    flex-direction: column;
    align-items: center;
    background: none;
    gap: 2rem;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const Input = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #a1a1a1;
  width: 55%;
  outline: none;
  border: none;
  padding-left: 15px;
  height: 50px;
  @media screen and (max-width: 1440px) {
    height: calc(40px + (50 - 40) * (100vw - 390px) / (1440 - 390));
    font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  ::placeholder {
    font-size: 18px;
    line-height: 30px;
    color: #a1a1a1;
  }
`;

export const Button = styled.button`
  width: 45%;
  height: 50px;
  background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
  box-shadow: 0px 4px 16px rgba(41, 41, 41, 0.77);
  border-radius: 9px;
  padding: 0 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  @media screen and (max-width: 1440px) {
    height: calc(40px + (50 - 40) * (100vw - 390px) / (1440 - 390));
    font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 1010px) {
    width: 57%;
  }
  @media screen and (max-width: 600px) {
    width: 104%;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  @media screen and (max-width: 1010px) {
    width: 100%;
  }
`;
export const ResponsiveImage = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
    height: ${({ maxh, minh }) => (
      maxh,
      minh
        ? `calc(${minh}px + (${maxh} - ${minh}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
  object-fit: contain;
`;
