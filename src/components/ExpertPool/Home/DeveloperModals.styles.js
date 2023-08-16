import styled from "styled-components";
import BG from "../../../assets/images/SeoExpert/Modal-BG.png";
import chroma from "chroma-js";
export const ModalHolders = styled.section`
  width: 100%;
  display: flex;
  overflow: hidden;
  background: #fff;
  border-radius: 25px;

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
    border-radius: 25px;
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
    @media screen and (max-width: 991px) {
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
      /* .css-qbdosj-Input {
        display: none;
      } */
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
      textarea {
        height: 100%;
        &::placeholder {
          font-family: "Outfit";
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
      }
    }
    .PhoneInputCountrySelectArrow {
      display: none;
    }
  }
`;

// Styled components
// const StyledSelectControl = styled.div`
//   display: flex;
//   min-height: 48px;
//   max-height: 80px;
//   overflow: auto;
//   background-color: white;
//   cursor: pointer;
//   border-color: ${(props) => (props.isFocused ? "#28B781" : "#D9D9D9")};
//   box-shadow: ${(props) => (props.isFocused ? "1px solid #28B781" : "none")};
//   padding: 5px;
//   box-shadow: 0px 0.9781021475791931px 2.9343066215515137px 0px
//     rgba(0, 0, 0, 0.14);

//   &:hover {
//     border-color: none;
//   }
//   /*
//   .css-1xc3v61-indicatorContainer {
//     transform: ${(props) =>
//     props.isSelected ? "rotateX(180deg)" : "rotateX(0deg)"};
//     transition: transform 0.9s ease;
//     span {
//       display: none;
//     }
//   }

//   .css-1u9des2-indicatorSeparator {
//     display: none;
//   }

//   .css-qbdosj-Input {
//     display: block;
//     height: ${(props) => (props.isFocused ? "35px" : "0")};
//     padding: 0;
//   } */
// `;

// const StyledSelectMenu = styled.div`
//   max-height: 220px;
// `;

// const StyledSelectMenuList = styled.div`
//   max-height: 220px;
//   overflow-y: auto;
//   background-color: #fff;
// `;

// const StyledSelectOption = styled.div`
//   background-color: ${(props) =>
//     props.isDisabled
//       ? "transparent"
//       : props.isSelected
//       ? props.data.color
//       : props.isFocused
//       ? chroma(props.data.color).alpha(0.1).css()
//       : "transparent"};
//   color: ${(props) =>
//     props.isDisabled
//       ? "#ccc"
//       : props.isSelected
//       ? chroma.contrast(chroma(props.data.color), "white") > 2
//         ? "white"
//         : "black"
//       : props.data.color};
//   cursor: ${(props) => (props.isDisabled ? "not-allowed" : "default")};

//   &:active {
//     background-color: ${(props) =>
//       !props.isDisabled
//         ? props.isSelected
//           ? props.data.color
//           : chroma(props.data.color).alpha(0.3).css()
//         : "transparent"};
//   }
// `;

// const StyledMultiValue = styled.div`
//   color: red;
//   /* background-color: ${(props) =>
//     chroma(props.data.color).alpha(0.1).css()}; */
// `;

// const StyledMultiValueLabel = styled.div`
//   /* color: ${(props) => props.data.color}; */
// `;

// const StyledMultiValueRemove = styled.div`
//   /* color: ${(props) => props.data.color};
//   &:hover {
//     background-color: ${(props) => props.data.color};
//     color: white;
//   } */
// `;

export // StyledSelectControl,
// StyledSelectMenu,
// StyledSelectMenuList,
// StyledSelectOption,
// StyledMultiValue,
// StyledMultiValueLabel,
// StyledMultiValueRemove,
 {};
