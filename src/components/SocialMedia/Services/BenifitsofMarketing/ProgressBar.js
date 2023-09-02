import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  /* width: 40%; */
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 33px;
  overflow: hidden;
  margin-bottom: 50px;

  @media screen and (max-width: 1199px){
    margin-bottom: 30px;
  }
`;

const ProgressBarFill = styled.div`
  height: 100%;
background: #28B781;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  transition: width 0.3s ease-in-out;

`;

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressContainer>
      <ProgressBarFill
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${percentage}%` }}
      >
        {`${percentage}% `}
      </ProgressBarFill>
    </ProgressContainer>
  );
};

export default ProgressBar;
