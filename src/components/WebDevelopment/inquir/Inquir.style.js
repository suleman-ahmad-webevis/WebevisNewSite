import styled from "styled-components";
import background from "../../../assets/images/Services/WebDevelopmentServices/background.png";

export const InquirSec = styled.section`
  background-image: url(${background.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 60px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 34px 27px 34px 64px;
  }
  .inqiur_Text {
    h3 {
      color: #fff;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
