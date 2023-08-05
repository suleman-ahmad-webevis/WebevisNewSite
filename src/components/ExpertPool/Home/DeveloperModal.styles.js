import styled from "styled-components";
import BG from "../../../assets/images/SeoExpert/Modal-BG.png";
export const ModalHolder = styled.section`
  display: flex;
  /* align-items: center; */
  .img-holder {
    max-width: 704px;
    padding: 100px 30px;
    background-image: url(${BG.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
  }
  form {
    padding: 20px;
    h2 {
      font-size: 44px;
      font-weight: 700;
      line-height: 48px;
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
    }
    .form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
    }
    .input-holder,
    .textarea {
      max-width: 264px;
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
      textarea {
        width: 100%;
        color: #a1a1a1;
        padding: 19px 0 19px 14px;
        outline: none;
        border-radius: 6.847px;
        border: 0.978px solid #d1d3d4;
        background: #fff;
        resize: none;
        box-shadow: 0px 0.9781021475791931px 2.9343066215515137px 0px
          rgba(0, 0, 0, 0.14);
      }
    }
    button {
      width: 100%;
    }
    .textarea {
      max-width: 100%;
    }
  }
`;
