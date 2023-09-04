import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoaderStyled>
      <div className="loader"></div>
    </LoaderStyled>
  );
};

export default Loading;

export const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 0px;
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #1fabd3; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
