import styled from "styled-components";
import background from "../../../assets/images/Services/EmailServices/background.jpg";
export const HeroSection = styled.section`
  background-image: url(${background.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width:900px) {
    background-position: left;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    width: 100%;
    margin: auto;
    padding: 0px 28px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`;
export const HeroText = styled.section`
  padding: 95px 0;
  width: 43%;

  @media screen and (max-width: 900px) {
    /* width: 100%; */
    padding: 55px 0;
  }
  @media screen and (max-width: 991px) {
    width: 50%;
    /* padding: 55px 0; */
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    /* padding: 55px 0; */
  }
  h1 {
    color: #fff;
    font-family: Outfit;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 20px;

    @media screen and (max-width: 1321px) {
      font-size: 60px;
    }
    @media screen and (max-width: 1140px) {
      font-size: 50px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 40px;
    }
    /* @media screen and (max-width: 900px) {
      width: 100%;
    } */
  }
  h2 {
    color: rgba(255, 255, 255, 0.56);
    font-family: Poppins;
    font-size: 18px;
    max-width: 500px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 40px;
    @media screen and (max-width: 1024px) {
      width: 100%;
      /* font-size: 15px; */
    }
    @media screen and (max-width: 1024px) {
    }
  }
  .input {
    display: flex;
    align-items: center;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(2px);
    width: 95%;
    height: 65px;
    padding: 0px 15px 0 24px;
    input {
      width: 100%;
      background-color: transparent;
      outline: none;
      border: none;
    }
    button {
      border-radius: 16px;
      background: #28b781;
      width: 200px;
      height: 48px;
      color: #fff;
      font-family: General Sans;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    @media screen and (max-width: 564px) {
      button {
        font-size: 12px;
      }
      padding: 0px 15px 0 15px;
    }
  }
  @media screen and (max-width:575px){
   .input{
    width:100%;
   }
  }
`;
export const HeroImages = styled.section`
  padding: 66px 60px 66px 0;
  img {
    width: 100%;
    
    @media screen and (max-width: 991px) {
      height: auto;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 66px 8px 66px 0;
  }
  @media screen and (max-width: 900px) {
    padding: 10px 8px 20px 0;
  }
  @media screen and (max-width: 991px) {
    width: 45%;
    /* padding: 55px 0; */
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    /* padding: 55px 0; */
  }
  /* @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    margin-top: -10px;
  }
  img {
    width: 100%;
    object-fit: contain;
  } */
`;
export const Btns = styled.section`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 548px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
export const Button = styled.section`
  width: ${({ width }) => (width ? width : "")};
  background: ${({ bg }) => (bg ? bg : "white")};
  border: ${({ Border }) =>
    Border
      ? Border
      : "1px solid linear-gradient(93.39deg, #28B781 21.84%, #CFEF00 178.39%)"};
  padding: ${({ padding }) => (padding ? padding : "0 1rem")};
  color: ${({ Color }) => (Color ? Color : "red")};
  margin-top: 50px;
  text-align: center;
  border-radius: 40px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 800;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: 548px) {
    width: 80%;
    margin-top: 10px;
  }
`;
