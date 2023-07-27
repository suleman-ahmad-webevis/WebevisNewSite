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
    font-family: Outfit;
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
    font-family: Outfit;
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
    margin-bottom: 10px;
  }

  .fields {
    width: 100%;
    margin-bottom: 10px;
    @media screen and (max-width: 767px) {
      margin-bottom: 5px;
    }
  }
  input,
  textarea {
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 20px;
    line-height: 24px;
    border: none;
    width: 100%;
    height: 45px;
    border-radius: 33px;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.13);

    ::placeholder {
      color: #a1a1a1;
    }

    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
      border-radius: 20px;
      height: 40px;
    }
  }
  input:focus {
    border: 1px solid var(--primary, #28b781);
    outline: none;
    background: #fff;
  }
  .error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    display: none;
  }

  #message {
    height: 125px;
    width: 100%;
    flex-shrink: 0;
    border-radius: 20px;

    :focus {
      border: 1px solid var(--primary, #28b781);
      outline: none;
      background: #fff;
    }

    @media screen and (max-width: 767px) {
      height: 82px;
      border-radius: 12px;
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
