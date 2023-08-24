import styled from "styled-components";

export const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card .percent {
    position: relative;
  }

  .card svg {
    position: relative;
    width: 200px;
    height: 200px;
    transform: rotate(-90deg);
  }

  .card svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #fff;
    stroke-width: 20;
    stroke-linecap: square;
  }

  .card svg circle:last-of-type {
    stroke-dasharray: 550px;
    stroke-dashoffset: calc(550px - (550px * var(--value)) / 100);
    stroke: #28b781 !important;
    transition: 2s all ease-in-out;
  }

  .card .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card .number h3 {
    font-size: 56.64px;
    color: #ffffff;
    font-weight: 500;

    @media screen and (max-width: 1440px) {
      font-size: calc(30px + (56.64 - 30) * (100vw - 390px) / (1440 - 390));
    }
  }

  */ .card .title h2 {
    margin: 25px 0 0;
  }
`;

export const ExperienceText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 90px;
  width: 75%;
  margin: 0 auto;
  h2 {
    text-align: center;
    color: #434956;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (45 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    gap: 10px;
  }
`;
export const ProgressWrapper = styled.div`
  background: #2b2c2f;
  padding: 45px 60px;
  width: 100%;
  margin-top: 40px;
  @media screen and (max-width: 1440px) {
    padding: calc(20px + (45 - 20) * (100vw - 390px) / (1440 - 390))
      calc(20px + (60 - 20) * (100vw - 390px) / (1440 - 390));
  }
`;
export const ProgressMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  p {
    color: #fff;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ProgressCover = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
  @media screen and (max-width: 462px) {
    justify-content: center;
  }
`;
