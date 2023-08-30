import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;

  .image-box {
    width: 47.3%;
    flex-shrink: 0;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    @media screen and (max-width: 1199px) {
      width: 50%;
    }
    @media screen and (max-width: 991px) {
      width: auto;
      max-width: 660px;
      margin: 0 auto 50px;
    }
    @media screen and (max-width: 767px) {
      margin: 0px auto 30px;
    }
  }

  .GetContainer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
    @media screen and (max-width: 1199px) {
      gap: 30px;
    }
    @media screen and (max-width: 991px) {
      display: block;
    }
  }
`;

export const Message = styled.div`
  flex-grow: 1;

  @media screen and (max-width: 991px) {
    max-width: 660px;
    margin: 0 auto 50px;
  }

  form {
    width: 100%;
  }

  button {
    margin-top: 20px;
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }

  h1 {
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    color: var(--banner-colour, #2b2c2f);
    margin-bottom: 6px;

    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 766px) {
      text-align: center;
    }
  }
  p {
    color: var(--secondary, #434956);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 40px;
    width: 100%;

    @media screen and (max-width: 1199px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 766px) {
      text-align: center;
    }
  }

  .form-group {
    margin-bottom: 15px;
  }
  .input-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
    .fields {
      width: 48%;
    }
  }
  .error-border {
    border: 1px solid red;
  }

  .fields {
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    /* max-width: 255px; */
    span {
      color: red;
      position: absolute;
      top: -3px;
    }
  }

  label {
    color: var(--secondary, #434956);
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
  }

  input,
  textarea,
  .PhoneInput {
    width: 100%;
    height: 48px;
    font-size: 15px;
    line-height: 19px;
    color: #a1a1a1;
    padding: 13px;
    border-radius: 6.847px;
    border: 0.978px solid #d1d3d4;
    background: #fff;
    resize: none;
    box-shadow: 0px 0.9781021475791931px 2.9343066215515137px 0px
      rgba(0, 0, 0, 0.14);
    @media screen and (max-width: 1440px) {
      padding: calc(15px + (19 - 15) * (100vw - 390px) / (1440 - 390))
        calc(14px + (14 - 10) * (100vw - 390px) / (1440 - 390));
    }
  }
  .PhoneInputInput {
    box-shadow: none;
    border: 0;
    height: 46px;
    :focus {
      border: none;
      outline: none;
      background: #fff;
    }
  }
  input:focus {
    border: 1px solid var(--primary, #28b781);
    outline: none;
    background: #fff;
  }
  .error {
    color: red;
    font-size: 12px;
    /* position: absolute;
    bottom: -14px; */
  }
  #message {
    /* width: 540px; */
    height: 125px;
    width: 100%;
    flex-shrink: 0;
    :focus {
      border: 1px solid var(--primary, #28b781);
      outline: none;
      background: #fff;
    }
  }
  button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media screen and (max-width: 766px) {
    padding: 10px;
    min-height: 420px;

    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
    label {
      font-size: 16px;
    }

    input,
    textarea {
      font-size: 14px;
    }
  }
`;
