import styled from "styled-components";
import consultation from "../../../../public/assets/images/uiPage/consultation.png";
export const ConsultationSec = styled.div`
  background-image: url(${consultation.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36px 0;
  }
  h3 {
    color: #fff;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 52.5px */
  }
`;
