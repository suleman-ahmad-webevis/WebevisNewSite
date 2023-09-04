import styled from "styled-components";
import black from "../../../../public/assets/images/wordPressPage/black.png";
export const WordSec = styled.div`
  background-image: url(${black.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 41px 49px;
  }
  h3 {
    background: linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-transform: capitalize;
  }
`;
