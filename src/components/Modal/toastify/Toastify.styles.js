import styled from "styled-components";

export const StyledToastify = styled.div`
  position: fixed;
  width: 350px;
  min-height: 60px;
  background: ${({ error, info, warning, success }) =>
    error
      ? "rgba(253, 127, 127, 0.3)"
      : info
      ? "rgba(100, 236, 255, 0.3)"
      : warning
      ? "rgba(255, 207, 86, 0.3)"
      : success
      ? "rgba(28, 204, 151, 0.2)"
      : ""};
  z-index: 99999;
  top: 100px;
  right: ${({ toast }) => (toast ? "10px" : "0")};
  transform: translateX(${({ toast }) => (toast ? "0%" : "100%")});
  transition: all 0.3s ease-in-out;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 30px 10px 10px;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  color: #313131;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
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
