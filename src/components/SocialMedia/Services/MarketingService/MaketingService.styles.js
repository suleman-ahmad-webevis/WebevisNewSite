import styled from "styled-components";
export const ContainerWrappermain = styled.div`
  position: relative;
  margin-bottom: 100px;
`;
export const HeaderSection = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    padding: 20px;
  }

  h1 {
    max-width: 447px;
    color: #434956;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 697px;
    color: #434956;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;

export const ContentHolder = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  gap: 30px;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    display: block;
  }

  .left-col {
    margin: 0 auto;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-grow: 1;
    Button {
      align-items: center;
      justify-content: center;

      display: flex;
      gap: 5px;
      @media screen and (max-width: 540px) {
        font-size: 12px;
        border-radius: 6px;
        gap: 0px;
      }
    }

    :hover {
      Button {
        background-color: #eaf7ee;
      }
    }
    @media screen and (max-width: 540px) {
      font-size: 12px;
      padding: 0;
    }
  }
  .right-col {
    width: 460px;
    flex-shrink: 0;
    display: flex;
    @media screen and (max-width: 1199px) {
      width: 419px;
    }
    @media screen and (max-width: 992px) {
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;
