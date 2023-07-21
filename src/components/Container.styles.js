import styled from "styled-components";
export const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 0 ${({ resPadding }) => (resPadding ? resPadding : "20px")};
  }
`;

export const ContainerWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
