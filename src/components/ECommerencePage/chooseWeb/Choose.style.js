import styled from "styled-components";
import chooseCircle from "../../../../public/assets/images/ECommerencePage/chooseCircle.png";
export const ChooseSec = styled.div`
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    max-width: 800px;
    margin: auto;
    margin-bottom: 50px;
    @media screen and (max-width: 992px) {
    font-size: 35px;
    width: 100%;
    }
    @media screen and (max-width: 574px) {
    font-size: 28px;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    margin: 30px auto 100px;
  }
  .main_card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 77px;
    @media screen and (max-width: 1200px) {
      gap: 26px;
      padding: 0 20px;
    }
    @media screen and (max-width: 991px) {
      flex-direction: column;
    }
  }
  .first_div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    @media screen and (max-width: 574px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .card {
    background: #fff;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    @media screen and (max-width: 574px) {
      padding-right: 10px;
    }
    margin: 0;

    h3 {
      color: #434956;
      padding-top: 15px;
      font-size: 26px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 42px */
      @media screen and (max-width: 574px) {
        font-size: 24px;
      }
      @media screen and (max-width: 1200px) {
        font-size: 21px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
    p {
      max-width: 411px;
      color: #434956;
      text-align: left;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      margin-top: 5px;
      padding: 0 13px 0px 20px;
      margin-bottom: 30px;
      line-height: 150%; /* 27px */
      @media screen and (max-width: 574px) {
        font-size: 16px;
        max-width: 313.731px;
      }
      @media screen and (max-width: 767px) {
        font-size: 13px;
      }
    }
  }
  .inside_div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    @media screen and (max-width: 767px) {
      gap: 0px;
    }
  }
  .image {
    background-image: url(${chooseCircle.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 15px;
    padding-top: 5px;
    width: 70px;
    height: 74px;
    h5 {
      color: #fff;
      font-size: 32.5px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%; /* 48.75px */
      @media screen and (max-width: 767px) {
        font-size: 25px;
      }
    }
    @media screen and (max-width: 767px) {
      width: 58px;
      height: 60px;
    }
  }
  .choose_image {
    img {
      @media screen and (max-width: 767px) {
        max-width: 100%;
        height: 100%;
      }
    }
  }
`;
