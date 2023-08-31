import styled from "styled-components";

export const ParentHeading = styled.section`
  text-align: center;
  margin-top: 40px;
  h1 {
    max-width: 1156px;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    margin: auto;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 1306px;
    margin: 0 auto;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ParentServices = styled.div`
  gap: 20px;
  position: relative;
  max-width: 1170px;
  margin: 50px auto;
  @media screen and (max-width: 1023px) {
    max-width: 992px;
  }
  @media screen and (max-width: 991px) {
    max-width: 768px;
  }
  @media screen and (max-width: 767px) {
    max-width: 576px;
    padding-right: 70px;

    &:before {
      content: "";
      position: absolute;
      width: 20px;
      top: 0;
      /* right: 0; */
      bottom: 0;
      right: 5%;
      border-radius: 10px;
      background: rgba(234, 247, 238, 1);
    }
  }
  @media screen and (max-width: 575px) {
    max-width: 390px;
  }
`;

export const ServicesImage = styled.div`
  max-width: 193px;
  margin: 0 auto;
  img {
    max-width: 100%;
    object-fit: contain;
    height: auto;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const PromoteSteps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? "row-reverse" : "row")};
  justify-content: space-between;
  gap: 30px;
  position: absolute;
  top: ${({ top }) => (top ? top : "10%")};
  @media screen and (max-width: 767px) {
    position: static;
    flex-direction: column;
    margin-bottom: 50px;
    justify-content: space-around;
  }
`;

export const StepsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 461px;
  position: relative;
  @media screen and (max-width: 1023px) {
    max-width: 430px;
  }
  @media screen and (max-width: 991px) {
    max-width: 330px;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
    &:before {
      content: "${(props) => props.data}";
      position: absolute;
      top: -30px;
      right: -60px;
      width: 60.029px;
      height: 60.029px;
      border-radius: 50%;
      background: ${(props) =>
        props.bg
          ? "#28B781"
          : "#2B2C2F"}; // Use the bg prop for background color
      color: #fff;
      font-family: "Oswald";
      font-size: 32.796px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 575px) {
        right: -70px;
      }
    }
  }

  h4 {
    color: #434956;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-transform: uppercase;
    @media screen and (max-width: 1023px) {
      font-size: 24px;
    }
  }
  p {
    color: #434956;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-transform: lowercase;
    @media screen and (max-width: 991px) {
      font-size: 16px;
    }
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1023px) {
    max-width: 150px;
  }
  @media screen and (max-width: 991px) {
    max-width: 120px;
  }
  @media screen and (max-width: 767px) {
    max-width: 59px;
  }
`;
