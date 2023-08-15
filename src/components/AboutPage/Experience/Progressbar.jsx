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
    conic-gradient(from 90deg #ffffff calc(0 * 1%), #ffffff 0);
  }
  100% {
    --pgPercentage: var(--value);
    background: radial-gradient(
      closest-side,
      #2b2c2f 80%,
      transparent 0 100%,
      white 0
    ),
    conic-gradient( #28b781 calc(var(--pgPercentage) * 1%), #ffffff 0);
  }
`;

const ProgressBarContainer = styled.div`
  /* --fg: #28b781;
  --bg: #ffffff; */
  --pgPercentage: var(--value);
  animation: ${GrowProgressBar}10s all ease-in;

  width: 210px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    width: calc(162px + (210 - 162) * (100vw - 390px) / (1440 - 390));
  }
  background: radial-gradient(
      closest-side,
      #2b2c2f 80%,
      transparent 0 100%,
      white 0
    ),
    conic-gradient(#28b781 calc(var(--pgPercentage) * 1%), #ffffff 0);
  font-size: 56.64px;
  @media screen and (max-width: 1440px) {
    font-size: calc(30px + (56.64 - 30) * (100vw - 390px) / (1440 - 390));
  }
  color: #ffffff;
`;

const ProgressBar = ({ value }) => (
  <ProgressBarContainer
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{ "--value": value }}
  >
    {value}%
  </ProgressBarContainer>
);

export default ProgressBar;
