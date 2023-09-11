import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
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
  .custom-checkbox {
    position: relative;
  }

  .custom-checkbox input[type="checkbox"] {
    display: none;
  }

  .custom-checkbox label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    background-color: white;
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top: -2px;
  }

  .custom-checkbox input[type="checkbox"]:checked + label::after {
    content: "✔";
    position: absolute;
    top: -3px;
    left: 4px;
    font-size: 18px;
    color: #434956;
  }

  .error-borders::before {
    border: 1px solid red !important;
  }
  .check-box {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    label {
      cursor: pointer;
    }
    span {
      margin: 0;
      color: #434956 !important;
      font-size: 16px;
      a {
        color: rgb(28, 204, 151) !important;
        font-size: 16px !important;
      }
    }
    input {
      width: auto;
      height: auto;
    }
  }

  form {
    width: 100%;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }

  h1 {
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    color: var(--banner-colour, #2b2c2f);
    margin-bottom: 10px;

    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: var(--banner-colour, #2b2c2f);
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
    width: 100%;
  }
  .captcha {
    max-height: 100px;
    overflow: hidden;
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
    color: #141414;
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
    height: 40px;
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

  @media screen and (max-width: 390px) {
    padding: 20px 25px;
    min-height: 521px;

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
