import styled from "styled-components";
export const ServeSec = styled.div`
  width: 90%;
  margin: 5rem auto 0 auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    text-align: center;

    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 320px) / (1440 - 320));
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #434956;
    margin-bottom: 34px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const IndustriresServe = styled.div`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  gap: 1rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: 49% 49%;
  }
`;
export const Industry = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 220px;
  background-image: url(${({ bg }) => (bg ? bg.src : "")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &:hover {
    box-shadow: -1px 3px 10px -3px rgba(41, 170, 81, 1);
  }

  display: flex;
  align-items: flex-end;
`;
export const IndustryFooter = styled.div`
  width: 100%;
  height: 40px;
  background: #eaf7ee;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
  p {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #26b37c;
    @media screen and (max-width: 1440px) {
      font-size: calc(10px + (28 - 10) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
