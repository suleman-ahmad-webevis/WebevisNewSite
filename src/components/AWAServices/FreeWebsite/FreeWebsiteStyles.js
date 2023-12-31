import styled from "styled-components";
export const FreeWrappermain = styled.div``;
export const FloatingImage = styled.div`
  position: absolute;
  top: -40%;
  right: 5%;
  @media screen and (max-width: 1000px) {
    right: 2%;
  }
  @media screen and (max-width: 802px) {
    display: none;
  }
`;
export const FreeWrapper = styled.div`
  /* width: 100%; */
  margin: 8rem 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background: #eaf7ee;
  padding: 49px 55px;
  @media screen and (max-width: 802px) {
    flex-direction: column;
    gap: 2rem;
    padding: 49px 30px;
  }
`;
export const WebsiteText = styled.div`
  background: #eaf7ee;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    button {
      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.34);
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  h1 {
    color: #2b2c2f;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 802px) {
      text-align: center;
    }
  }
  @media screen and (max-width: 802px) {
    align-items: center;
  }
`;
export const ButtonWebsite = styled.button`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.34);
  border-radius: 8px;
  width: calc(350px + (358 - 350) * (100vw - 390px) / (1440 - 390));
  padding: 16px 25px;
  a {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  @media screen and (max-width: 1440px) {
    font-size: calc(24px + (24 - 18) * (100vw - 390px) / (1440 - 390));
  }
`;
export const WebsiteImage = styled.div`
  display: none;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 802px) {
    display: flex;
  }

  img {
    @media screen and (max-width: 802px) {
      display: block;
      margin-bottom: -6rem;
    }
  }
`;
