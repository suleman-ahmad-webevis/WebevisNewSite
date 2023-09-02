import styled from "styled-components";
export const Hire = styled.section`
  background-color: #2b2c2f;
  padding: 90px 0 40px 0;
`;
export const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;
export const Heading = styled.div`
  max-width: 620px;
  color: #fff;
  h1 {
    color: #fff;
    font-size: 58px;
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 584px;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (58 - 32) * (100vw - 390px) / (1440 - 390));
      max-width: calc(317px + (584 - 317) * (100vw - 390px) / (1440 - 390));
    }
   
  }
  p {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
    max-width: 619px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ImageHolder = styled.div`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;
