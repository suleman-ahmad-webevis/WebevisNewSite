import styled, { css } from "styled-components";

export const StyledCacheModal = styled.div`
  position: fixed;
  bottom: 20px;
  left: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 12px;
  background: #fff;
  padding: 20px;
  z-index: 9999;
  opacity: ${({ toast }) => (toast ? "1" : "0")};
  ${({ toast }) =>
    toast
      ? css`
          animation: show_toast 0.3s ease forwards;

          @keyframes show_toast {
            0% {
              transform: translateY(10%);
            }
            40% {
              transform: translateY(-5%);
            }
            80% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-10px);
            }
          }
        `
      : css`
          animation: hide_toast 0.3s ease forwards;
          @keyframes hide_toast {
            0% {
              transform: translateY(-10%);
            }
            40% {
              transform: translateY(0%);
            }
            80% {
              transform: translateY(-5%);
            }
            100% {
              transform: translateY(calc(100% + 20px));
            }
          }
        `}
  @media screen and (max-width: 576px) {
    left: 0;
  }
`;

export const ContentHolders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  .text {
    max-width: 350px;
    margin-right: 10px;
    display: flex;
    p {
      color: #313131;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      }
    }
    a {
      color: rgb(28, 204, 151) !important;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  .cross {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 9999;
  }
`;
