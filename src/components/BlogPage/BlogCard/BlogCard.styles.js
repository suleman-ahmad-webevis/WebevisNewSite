import styled from "styled-components";
export const Aticle = styled.div`
  border-radius: 18px;
  background: #fff;
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.22);
  padding: 20px 25px;
  width: 31.5%;
  text-align: left;
  @media screen and (max-width: 1199px) {
    width: 30.5%;
  }
  @media screen and (max-width: 991px) {
    width: 47%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 417px;
    margin: 0 auto 30px;
  }

  img {
    width: 100%;
    display: block;
    max-width: 100%;
    object-fit: contain;
    height: auto;
    border-radius: 14px;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.31);
  }

  .read-more {
    color: #424954;
    font-size: 20px;
    font-weight: 700;
    background-color: #fff;
    position: relative;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 22px;
      height: 4px;
      background-color: #28b781;
      transition: 0.4s;
      border-radius: 33px;
    }
    &:hover {
      &::after {
        width: 99px;
        @media screen and (max-width: 1440px) {
          width: calc(76px + (99 - 76) * (100vw - 390px) / (1440 - 390));
        }
      }
    }
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  justify-content: space-between;

  h3 {
    color: #424954;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 15px;
    flex-grow: 1;
    @media screen and (max-width: 1440px) {
      font-size: calc(19px + (24 - 19) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Date = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 12px;
  padding-left: 20px;
  span {
    color: #a1a1a1;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 40%;
      left: -15%;
      width: 8px;
      height: 8px;
      background-color: #a1a1a1;
      border-radius: 100%;
    }
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
