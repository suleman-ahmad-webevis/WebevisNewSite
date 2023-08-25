import styled from "styled-components";
import BG from "../../assets/images/SeoExpert/Modal-BG.png";
export const ModalHolders = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    display: block;
  }

  .img-holder {
    width: 50%;
    padding: 0 20px;
    background-image: url(${BG.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 110%;
    display: flex;
    align-items: center;
    border-radius: 24px;
    @media screen and (max-width: 991px) {
      width: 100%;
      padding: 100px 20px;
    }
    @media screen and (max-width: 575px) {
      padding: 60px 20px;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  form {
    width: 50%;
    flex-grow: 1;
    padding: 30px;
    overflow: hidden;
    background-color: #fff;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    @media screen and (max-width: 991px) {
      border-bottom-right-radius: 25px;
      border-bottom-left-radius: 25px;
      width: 100%;
    }
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 44px;
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(23px + (40 - 23) * (100vw - 390px) / (1440 - 390));
        line-height: calc(27px + (44 - 27) * (100vw - 390px) / (1440 - 390));
      }
    }
    .form {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;

      @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
      }
      .css-b62m3t-container {
        position: absolute;
        top: 206px;
        right: 0;
        width: 48%;
        @media screen and (max-width: 575px) {
          width: 100%;
          top: 471px;
          right: 0;
        }
      }
      .css-1k5h4dv-control {
        min-height: 48px;
        max-height: 80px;
      }
      .css-9t2aze-control {
        max-height: 70px;
      }
      .select-input {
        @media screen and (max-width: 575px) {
          margin-bottom: 63px;
        }
      }
    }
    .input-holder,
    .textarea {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: #434956;
      font-size: 17px;
      font-weight: 500;
      line-height: 20px;
      margin-bottom: 10px;

      label {
        margin-bottom: 10px;
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
      &.has-icon {
        position: relative;
        .icon {
          position: absolute;
          height: 47px;
          top: 32px;
          left: 14px;
          border-right: 1px solid #d1d3d4;
          padding-right: 10px;
        }
        input {
          padding-left: 55px;
        }
      }

      .icon-holder {
        margin: 0;
      }
      .PhoneInputInput {
        box-shadow: none;
        border: 0;
        height: 46px;
      }
      .error-message {
        color: red;
        font-size: 14px;
        /* position: absolute; */
        /* bottom: -11px; */
      }
    }
    textarea:focus,
    input:focus {
      outline: none;
      border: 0.978px solid var(--primary, #28b781);
      box-shadow: 0px 1.9562042951583862px 2.9343066215515137px 0px
        rgba(0, 0, 0, 0.14);
    }
    button {
      width: 100%;
    }
    .textarea {
      max-width: 100%;
      height: 114px;
      margin-bottom: 20px;
      padding-top: 10px;
      textarea {
        height: 100%;
        &::placeholder {
        }
      }
    }
    button {
      margin-bottom: 15px;
    }
    h3 {
      color: #434956;
      text-align: center;
      font-size: 18px;
      line-height: 22px;
      a {
        color: #1ccc97;
      }
    }
    .Select {
      input {
        box-shadow: none;
        height: 0;
        position: absolute;
        top: 8px;
        right: -2px;
        width: 25px !important;
      }
    }
    .PhoneInputCountrySelectArrow {
      display: none;
    }
  }
`;
