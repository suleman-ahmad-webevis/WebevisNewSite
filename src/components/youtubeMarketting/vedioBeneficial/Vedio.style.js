import styled from "styled-components";
export const VedioFlex = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: auto;
  gap: 10px;
`;
export const VideoMain = styled.section`
  display: flex;
  gap: 20px;
`;
export const VedioImage = styled.section``;
export const VedioText = styled.section`
  img {
  }
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin: auto;
  }
  p {
    margin: auto;

    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
  }
`;
