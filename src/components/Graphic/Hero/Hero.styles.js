import styled from "styled-components";
export const HeroHolder = styled.section`
  padding: 40px 0;
`;
export const ContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.div`
  max-width: 570px;
  h1 {
    color: #2b2c2f;
    font-size: 60px;
    line-height: 65px;
    font-weight: 700;
    margin-bottom: 30px;
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
    margin-bottom: 30px;
  }
`;

export const ImageHolder = styled.div``;
