import styled, { css } from "styled-components";
export const ToastConatiner = styled.div`
  /* .show {
    animation: show_toast 0.3s ease forwards;

    @keyframes show_toast {
      0% {
        transform: translateX(10%);
      }
      40% {
        transform: translateX(-5%);
      }
      80% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-10px);
      }
    }
  }
  .hide {
    animation: hide_toast 0.3s ease forwards;
    @keyframes hide_toast {
      0% {
        transform: translateX(-10px);
      }
      40% {
        transform: translateX(0%);
      }
      80% {
        transform: translateX(-5%);
      }
      100% {
        transform: translateX(calc(100% + 20px));
      }
    }
  } */
`;
export const StyledToastify = styled.div`
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 999999;
  width: 350px;
  min-height: 60px;
  background: ${({ error, info, warning, success }) =>
    error
      ? "rgba(253, 127, 127, 0.8)"
      : info
      ? "rgba(100, 236, 255, 0.8)"
      : warning
      ? "rgba(255, 207, 86, 0.8)"
      : success
      ? "rgba(28, 204, 151, 0.8)"
      : ""};
  /* right: ${({ toast }) => (toast ? "10px" : "0")};
  transform: translateX(${({ toast }) => (toast ? "0%" : "100%")}); */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 30px 10px 10px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: ${({ toast }) => (toast ? "1" : "0")};
  /* visibility: ${({ toast }) => (toast ? "visible" : "hidden")}; */
  ${({ toast }) =>
    toast
      ? css`
          animation: show_toast 0.3s ease forwards;

          @keyframes show_toast {
            0% {
              transform: translateX(10%);
            }
            40% {
              transform: translateX(-5%);
            }
            80% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-10px);
            }
          }
        `
      : css`
          animation: hide_toast 0.3s ease forwards;
          @keyframes hide_toast {
            0% {
              transform: translateX(-10px);
            }
            40% {
              transform: translateX(0%);
            }
            80% {
              transform: translateX(-5%);
            }
            100% {
              transform: translateX(calc(100% + 20px));
            }
          }
        `}
  @media screen and (max-width: 768px) {
    background: ${({ error, info, warning, success }) =>
      error
        ? "rgba(253, 127, 127, 1)"
        : info
        ? "rgba(100, 236, 255, 1)"
        : warning
        ? "rgba(255, 207, 86, 1)"
        : success
        ? "rgba(28, 204, 151, 1)"
        : ""};
  }
`;
export const ToastImage = styled.div`
  max-width: 20px;
  height: max-content;
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const ToastText = styled.span`
  color: #fff !important;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 130%;
  margin-bottom: 7px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
`;
