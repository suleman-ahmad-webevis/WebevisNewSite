import styled from "styled-components";
export const AgencyMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
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

export const AgencyImageSection = styled.div`
  background-image: url(${(props) => props.image.src});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.5s all ease-in;
  height: 700px;
  @media screen and (max-width: 1440px) {
    height: calc(410px + (700 - 410) * (100vw - 390px) / (1440 - 390));
  }
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  .hover {
    background: rgb(43, 44, 47, 0.63);
    transform: translateX(0%);
    .headerText {
      opacity: 0;
      display: none;
    }
    .leftText {
      transform: translateY(0%);
      opacity: 1;
      width: 100%;
      margin: 0 auto;
      /* @media screen and (max-width: 779px) {
        transform: translateY(-5%);
        gap: 1rem;
      } */
    }
  }
`;
export const AgencyHoverSection = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(153, 154, 154);
  overflow: hidden;
  height: calc(110px + (175 - 110) * (100vw - 390px) / (1440 - 390));
  background: linear-gradient(
    290.26deg,
    rgba(43, 44, 47, 0) 63.38%,
    rgba(43, 44, 47, 0.92) 78.22%
  );
`;
export const AgencyTransform = styled.div`
  padding: 0 5px;
  transition: 0.7s;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  transform: translateX(${({ trans }) => (trans ? trans : "-40%")});
  transition: 0.5s all ease-in-out;
  height: 110px;
  @media screen and (max-width: 1440px) {
    height: calc(110px + (175 - 110) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 779px) {
    transform: translateX(${({ trans1 }) => (trans1 ? trans1 : "-50%")});
  }
  @media screen and (max-width: 628px) {
    transform: translateX(${({ trans2 }) => (trans2 ? trans2 : "-55%")});
  }
  @media screen and (max-width: 552px) {
    transform: translateX(${({ trans3 }) => (trans3 ? trans3 : "-63%")});
  }
  @media screen and (max-width: 490px) {
    transform: translateX(${({ trans4 }) => (trans4 ? trans4 : "-67%")});
  }
  .headerText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 81px;
      color: #28b781;
      margin: 0;
      height: max-content;

      @media screen and (max-width: 1440px) {
        font-size: calc(
          16.46px + (60 - 16.46) * (100vw - 390px) / (1440 - 390)
        );
        line-height: calc(
          25.46px + (81 - 25.46) * (100vw - 390px) / (1440 - 390)
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
      margin: 0;

      @media screen and (max-width: 1440px) {
        font-size: calc(10px + (32 - 10) * (100vw - 390px) / (1440 - 390));
        line-height: calc(
          18.16px + (40 - 18.16) * (100vw - 390px) / (1440 - 390)
        );
      }
    }
  }
  .leftText {
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 1s all ease-in-out;
    transform: translateY(100%);
    opacity: 0;
    h4 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      color: #ffffff;
      text-align: center;
      @media screen and (max-width: 1440px) {
        font-size: calc(12px + (20 - 12) * (100vw - 390px) / (1440 - 390));
        line-height: calc(19px + (25 - 19) * (100vw - 390px) / (1440 - 390));
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
      text-align: center;
      margin: 0;
      @media screen and (max-width: 1440px) {
        font-size: calc(8px + (24 - 10) * (100vw - 390px) / (1440 - 390));
        line-height: calc(18px + (30 - 18) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
