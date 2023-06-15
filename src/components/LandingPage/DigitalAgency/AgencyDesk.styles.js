import styled from "styled-components";
export const AgencyWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    /* font-family: "GT Haptik"; */
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 150%;
    color: #424954;
    margin-bottom: 3rem;
    text-shadow: 0px 3px 3px rgba(40, 183, 129, 0.55);
    @media screen and (max-width: 1440px) {
      font-size: calc(23px + (50 - 23) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const AgencyMain = styled.div`
  background-image: url(${(props) => props.image.src});
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%
    calc(320px + (550 - 320) * (100vw - 390px) / (1440 - 390));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-in;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
`;
export const Agencysection = styled.div`
  width: 25%;
  border-right: 1px solid rgb(153, 154, 154);
  height: calc(320px + (550 - 320) * (100vw - 390px) / (1440 - 390));
  overflow: hidden;
  background: linear-gradient(
    182.26deg,
    rgba(43, 44, 47, 0) 63.38%,
    rgba(43, 44, 47, 0.92) 78.22%
  );
  .hover {
    background: rgb(43, 44, 47, 0.63);
    transform: translateY(0px);
    height: calc(320px + (550 - 320) * (100vw - 390px) / (1440 - 390));
    @media screen and (max-width: 980px) {
      transform: translateY(-30px);
    }
    .headerText {
      margin-top: 8rem;
      h3 {
        opacity: 1;
      }
    }
    .leftText {
      opacity: 1;
      transform: translateX(-0px);
    }
  }
`;
export const AngencyTranform = styled.div`
  padding: 0px 15px;
  transition: 0.7s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transform: translateY(430px);
  transition: 0.5s all ease-in-out;
  @media screen and (max-width: 1270px) {
    transform: translateY(410px);
  }
  @media screen and (max-width: 1150px) {
    transform: translateY(390px);
  }
  @media screen and (max-width: 1052px) {
    transform: translateY(360px);
  }
  @media screen and (max-width: 1052px) {
    transform: translateY(370px);
  }

  .headerText {
    display: flex;
    align-items: center;
    gap: 10px;
    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 81px;
      color: #28b781;
      @media screen and (max-width: 1440px) {
        font-size: calc(
          20.46px + (60 - 20.46) * (100vw - 390px) / (1440 - 390)
        );
      }
    }
    h3 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      text-transform: uppercase;
      color: #ffffff;
      opacity: 0.61;
      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (32 - 14) * (100vw - 390px) / (1440 - 390));
        line-height: calc(
          20.16px + (40 - 20.16) * (100vw - 390px) / (1440 - 390)
        );
      }
    }
  }
  .leftText {
    transition: 1s all ease-in-out;
    transform: translateX(200px);
    opacity: 0;
    h4 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (20 - 14) * (100vw - 390px) / (1440 - 390));
      }
    }
    h6 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-transform: uppercase;
      color: #ffffff;
      @media screen and (max-width: 1440px) {
        font-size: calc(12px + (24 - 12) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;

export const AgencyCounter = styled.div`
  width: 80%;
  background: #434956;
  border-radius: 0px 0px 60px 60px;
  height: calc(58.46px + (160 - 58.46) * (100vw - 390px) / (1440 - 390));
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 971px) {
    width: 100%;
  }
  @media screen and (max-width: 504px) {
    border-radius: 0px 0px 21.9207px 21.9207px;
  }
`;
export const CounterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-family: "Outfit";

    /* font-family: "GT Haptik"; */
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 150%;
    color: #ffffff;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (44 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-family: "Outfit";

    /* font-family: "GT Haptik"; */
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #ffffff;
    margin: 0;

    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (24 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
