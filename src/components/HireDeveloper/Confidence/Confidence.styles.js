import styled from "styled-components";
export const ConfidenceHolder = styled.section`
  padding: 100px 0 50px 0;
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "")};
  padding-right: ${({ paddingRight }) => (paddingRight ? paddingRight : "")};
`;
export const Confident = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 991px) {
    max-width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const ImageHolder = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    width: initial;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
export const Discription = styled.div`
  width: 50%;
  @media screen and (max-width: 991px) {
    padding: ${({ padding }) => (padding ? padding : "0")};
    width: initial;
  }
  h2 {
    color: #434956;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }

  .butn {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    display: flex;
    @media screen and (max-width: 1440px) {
      font-size: calc(15px + (18 - 15) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(15px + (30 - 15) * (100vw - 390px) / (1440 - 390));
    }
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    .White-btn,
    .Green-btn {
      border-radius: 12px;
      background: #fff;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
      padding: 13px 35px 13px 20px;
    }
    .Green-btn {
      background: var(--new, linear-gradient(135deg, #28b781 0%, #cfef00 100%));
      padding: 13px 20px;
      color: #fff;
      margin-left: -15px;
    }
  }
`;
export const TextHolder = styled.div`
  max-width: ${({ textWidth }) => (textWidth ? textWidth : "")};
  p {
    color: #434956;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
