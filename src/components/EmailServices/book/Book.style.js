import img1 from "../../EmailServices/assests/bookimg.png";
import styled from "styled-components";
export const BookSec = styled.section`
  /* background-image: url(${img1.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%; */
  margin-top: 30px;
  /* .container{
    display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  } */
`;
export const BookMain = styled.section`
  background-image: url(${img1.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  width: 100%;
  .container {
    position: relative;
  }
`;
export const BookOne = styled.section`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  position: absolute;
  top: -30px;
  right: 0;
  width: 40%;
  @media screen and (max-width: 1242px) {
    display: none;
  }
`;
export const BookText = styled.section`
  width: 60%;
  margin-left: 40px;
  @media screen and (max-width: 1242px) {
    width: 100%;
    margin: auto;
    text-align: center;
  }
  h1 {
    padding-top: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
    margin: auto;
    @media screen and (max-width: 1242px) {
      text-align: center;
      font-size: 36px;
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    @media screen and (max-width: 564px) {
      font-size: 28px;
    }
  }
  button {
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;
export const BookDiv = styled.section`
  width: 40%;
  margin: auto;
  img {
    display: none;
    width: 100%;
    object-fit: contain;
    max-width: 100%;
    height: 100%;
    min-height: 100%;
  }
  @media screen and (max-width: 1242px) {
    img {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
