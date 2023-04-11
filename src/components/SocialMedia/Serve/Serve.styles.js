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
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const IndustriresServe = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
`;
export const Industry = styled.div`
  border-radius: 30px;
  width: 100%;
  height: 200px;
  background-image: url(${({ bg }) => (bg ? bg.src : "")});
  box-shadow: -1px 2px 10px 2px rgba(41, 170, 81, 1);
  -webkit-box-shadow: -1px 2px 10px 2px rgba(41, 170, 81, 1);
  -moz-box-shadow: -1px 2px 10px 2px rgba(41, 170, 81, 1);
`;
