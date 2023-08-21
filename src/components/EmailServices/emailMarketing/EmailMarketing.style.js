import styled from "styled-components";
import email from "../../EmailServices/assests/emailback.png";
export const EmailHeading = styled.h5`
  color: #424954;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
  margin-top: 100px;
  @media screen and (max-width: 991px) {
    font-size: 30px;
    margin-top: 86px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 56px;
  }
  @media screen and (max-width: 575px) {
    font-size: 28px;
    margin-top: 45px;
  }
`;
export const MarketGrid = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
  /* @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  } */
`;
export const GridDiv = styled.section`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  /* width: 249px; */
  flex-basis: 18%;
  height: 227px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1300px) {
    flex-basis: 18%;
    height: 200px;
  }
  @media screen and (max-width: 1023px) {
    flex-basis: 18%;
    height: 170px;
  }
  @media screen and (max-width: 991px) {
    flex-basis: 23%;
    height: 170px;
  }
  @media screen and (max-width: 767px) {
    flex-basis: 31%;
    height: 150px;
  }
  @media screen and (max-width: 575px) {
    flex-basis: 47%;
    height: 150px;
  }
  img {
    object-fit: contain;
    width: 51px;
    height: 55.11px;
  }
  h1 {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media screen and (max-width: 992px) {
      font-size: 17px;
      line-height: 24px;
    }
    @media screen and (max-width: 564px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  :nth-child(1) {
    background-image: url(${email.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h1 {
      color: white;
    }
  }
  :hover {
    background-image: url(${email.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h1 {
      color: white;
    }
    img {
      filter: invert(96%) sepia(99%) saturate(0%) hue-rotate(57deg)
        brightness(110%) contrast(100%);
    }
  }
  /* :nth-child(6) {
    h1 {
      width: 207px;
    }
  } */
`;
