import React from "react";
import styled, { keyframes } from "styled-components";

const GrowProgressBar = keyframes`
  0% {
    background: radial-gradient(
      closest-side,
      #2b2c2f 80%,
      transparent 0 100%,
      white 0
    ),
    conic-gradient(#ffffff calc(0 * 1%), #ffffff 10deg);
  }
  100% {
    --pgPercentage: var(--value);
    background: radial-gradient(
      closest-side,
      #2b2c2f 80%,
      transparent 0 100%,
      white 0
    ),
    conic-gradient(#28b781 calc(var(--pgPercentage) * 1%), #ffffff 180deg);
  }
`;

const ProgressBarContainer = styled.div`
  --fg: #28b781;
  --bg: #ffffff;
  --pgPercentage: var(--value);
  animation: ${GrowProgressBar} 5s all ease-in;

  width: 209.578px;
  height: 209.578px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      #2b2c2f 80%,
      transparent 0 100%,
      white 0
    ),
    conic-gradient(#28b781 calc(var(--pgPercentage) * 1%), #ffffff 0);
  font-size: 56.64px;
  color: #ffffff;
`;

const ProgressBar = ({ value }) => (
  <ProgressBarContainer
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="10"
    aria-valuemax="110"
    style={{ "--value": value }}
  >
    {value}%
  </ProgressBarContainer>
);

export default ProgressBar;
