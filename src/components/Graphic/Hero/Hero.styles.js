import styled from "styled-components";
export const HeroHolder = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContentHolder = styled.div`
  width: 50%;
  h1 {
    color: #2b2c2f;
    font-size: 60px;
    line-height: 65px;
    font-weight: 700;
    margin-bottom: 20px;
    span {
      background: linear-gradient(97.77deg, #00c3fb 0.78%, #00feb1 77.81%),
        linear-gradient(0deg, #ffffff, #ffffff);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }
  p {
    color: #434956;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
  }
`;
export const ImageHolder = styled.div``;
