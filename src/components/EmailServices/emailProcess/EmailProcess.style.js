import styled from "styled-components";
import img1 from "../../EmailServices/assests/radial.png";
export const EmailBackground = styled.section`
  background: radial-gradient(
    127.73% 112.58% at 49.18% 50.2%,
    #8c8c8c 0%,
    #898989 1%,
    #5f5f5f 17%,
    #3d3d3d 33%,
    #222222 49%,
    #0f0f0f 65%,
    #040404 82%,
    #000000 100%
  );
  padding: 20px 0px;
`;
export const EmailSection = styled.section`
  background-image: url(${img1.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const EmailText = styled.section`
  width: 90%;
  margin: auto;
  h1 {
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
    margin: auto;
  }
  p {
    margin: auto;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
  }
`;
export const EmailFlex = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EmailOne = styled.section`
  width: 50%;
  margin: auto;

  h5 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    margin: auto;
  }
  button{
    position: fixed;
    top: 12%;
  }
`;
export const EmailTwo = styled.section`
  width: 80%;
  margin: auto;
  p {
    margin: auto;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
  }
`;

export const Scroll = styled.section`
  width: 250px;
  height: 200px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: red;
  }

  ::-webkit-scrollbar-thumb {
    background-color: green;
    border-radius: 4px;
  }
`;
