import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 375px) {
    margin-top: 50px;
  }
`;

export const Message = styled.div`
  width: 100%;
  min-height: 760px;
  flex-shrink: 0;
  border-radius: 23px;
  background: #fff;
  box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 40px 40px 30px;

  form {
    width: 100%;
  }

  button {
    width: 100%;
  }

  h1 {
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    color: var(--banner-colour, #2b2c2f);
    margin-bottom: 10px;
  }
  p {
    color: var(--banner-colour, #2b2c2f);
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
    width: 100%;
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

  .fields {
    width: 100%;
    margin-bottom: 10px;
    /* max-width: 255px; */
  }

  label {
    color: var(--secondary, #434956);
    font-variant-numeric: lining-nums proportional-nums;
    font-family: Outfit;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
  }

  input,
  textarea {
    padding: 13px;
    /* border: 1px solid #ccc; */
    border-radius: 4px;
    font-size: 16px;
    border-radius: 3px;
    background: #e3e3e3;
    border: none;
    width: 100%;
    ::placeholder {
      color: #cdcfd2;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: Outfit;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
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

  @media screen and (max-width: 922px) {
    #btn-send {
      width: 690px;
    }
  }
  @media screen and (max-width: 820px) {
    #btn-send {
      width: 640px;
    }
  }
  @media screen and (max-width: 768px) {
    #btn-send {
      width: 666px;
    }
  }
  @media screen and (max-width: 540px) {
    #btn-send {
      width: 440px;
    }
  }
  @media screen and (max-width: 420px) {
    #btn-send {
      width: 312px;
    }
  }
  @media screen and (max-width: 375px) {
    padding: 20px 25px;
    min-height: 521px;

    h1 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 5px;
    }
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
