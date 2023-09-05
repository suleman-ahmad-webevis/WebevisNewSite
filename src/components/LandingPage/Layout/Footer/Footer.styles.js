import styled from "styled-components";
import Bg from "../../../../assets/images/footer/foot-bg.jpg";
import Background from "../../../../assets/images/footer/foot-bg-1.png";
export const FooterHolder = styled.div`
  background: #2b2c2f;
  padding: 50px 0 30px 0;
  background-image: url(${Bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;

  font-weight: 500;
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Background.src});
  }
  p {
    font-size: 16px;
  }
`;
export const Links = styled.div`
  /* max-width: 350px; */
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    /* max-width: 160px; */
  }
  ul {
    display: flex;
    align-items: center;
    gap: 10px;

    li {
      background-color: #fff;
      width: 30px;
      height: 30px;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: linear-gradient(116.68deg, #29aa51 1.5%, #008475 99.8%);
        svg {
          fill: white;
        }
      }
    }
  }
`;
export const Foot = styled.div`
  @media screen and (max-width: 500px) {
    width: 50%;
    margin-top: 10px;
  }

  li {
    padding-top: 15px;
    transition: 0.5s;
    &:hover {
      transform: translateX(10px);
      a {
        color: #28b781;
      }
    }
    @media screen and (max-width: 1440px) {
      padding-top: calc(12px + (15 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
  a {
    color: #fff;
    font-size: 16px;
    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (16 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
  h3 {
    padding-bottom: 15px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (20 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  h4 {
    padding-bottom: 10px;
  }
  img {
    width: 13px;
    padding-right: 5px;
  }
`;
export const Mail = styled.div`
  width: 1220px;
  margin: 40px auto 0 auto;
  padding: 20px 30px;
  border-radius: 8px;
  background: var(--linear, linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%));
  box-shadow: 0px 1px 12px 0px rgba(255, 204, 3, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 1440px) {
    width: calc(350px + (1220 - 350) * (100vw - 390px) / (1440 - 390));
    padding: 20px calc(10px + (30 - 10) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (min-width: 576px) {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 390px) {
    padding: 20px 10px;
    width: 100%;
  }
  h2 {
    color: #fff;
    font-size: 32px;
    font-weight: 600;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (32 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  form {
    display: flex;
    justify-content: center;
    background: white;
    border-radius: 9px;

    /* flex-wrap: wrap; */
    /* margin-top: 15px; */
  }
  input {
    padding: 15px 20px;
    outline: none;
    border-radius: 9px 0px 0px 9px;

    @media screen and (min-width: 390px) {
    }
    @media screen and (min-width: 650px) {
      width: 250px;
    }
  }
  .input-error {
    border: 1px solid red;
    border-right: none;
  }
  button {
    padding: 15px 30px;
    background: black;
    color: #fff;
    border-radius: 9px;
    transition: 0.5s all ease-in-out;

    @media screen and (min-width: 390px) {
      margin-top: 0;
    }
  }
  button:hover {
    background: #00a1a3;
  }
`;
export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 30px;
  .policy {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 100%;
    @media screen and (max-width: 575px) {
      max-width: 250px;
      margin-right: 10px;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (16 - 14) * (100vw - 390px) / (1440 - 390));
    }
    span {
      text-decoration: underline;
    }
  }
  a {
    transition: 0.4s;
    color: #fff;
    &:hover {
      color: #28b781;
    }
  }
  @media screen and (min-width: 576px) {
    flex-direction: row;
    display: flex;
  }
  p {
    margin: 0;
  }
  span {
    font-size: 16px;
    color: #30ab5b;
  }
`;
export const FlexWrapper = styled.footer`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  gap: ${({ gap }) => (gap ? gap : "0px")};
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "no-wrap")};
    gap: ${({ gap1 }) => (gap1 ? gap1 : "0px")};
    justify-content: ${({ justify1 }) => (justify1 ? justify1 : "center")};
  }
  @media screen and (max-width: 500px) {
    flex-direction: ${({ direction }) => (direction ? direction : "row")};
    justify-content: space-between;
    gap: ${({ gap2 }) => (gap2 ? gap2 : "0px")};
  }
`;
export const FooterInfo = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ gap }) => (gap ? gap : "")};
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  transition: 0.5s all ease-in-out;
  p {
    color: #fff;
    font-size: 16px;
  }
  &:hover {
    transform: translateX(10px);
    p {
      color: rgba(40, 183, 129, 1);
    }
  }
`;
export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 1rem;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: #fff;
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 7px 0px #f6c453;
    border: 1px solid rgba(40, 183, 129, 1);
  }
`;

export const MainWrapperAddress = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 122px;
  padding: 10px 30px;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    padding: 36px 27px;
  }
`;
export const AddressWrapper = styled.div`
  background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
`;
export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  width: 25%;
  @media screen and (max-width: 1120px) {
    width: 50%;
  }
  @media screen and (max-width: 624px) {
    flex-direction: column;
    gap: 8px;
    justify-content: flex-end;
    align-items: flex-start;
    &:nth-child(2) {
      br {
        display: none;
      }
    }
  }
  @media screen and (max-width: 391px) {
    /* margin-bottom: ${({ bottom }) => (bottom ? bottom : "")}; */
  }

  h1 {
    margin: 0;
    color: #fff;
    font-size: 87.457px;

    font-weight: 600;
    opacity: 0.27000001072883606;
    @media screen and (max-width: 1440px) {
      font-size: calc(
        77.436px + (87.457 - 77.436) * (100vw - 390px) / (1440 - 390)
      );
    }
  }
  p {
    color: #fff;
    font-size: 18px;

    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 391px) {
      /* br {
        display: none;
      } */
    }
  }
`;
