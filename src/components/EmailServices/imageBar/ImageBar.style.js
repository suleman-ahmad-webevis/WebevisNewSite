import styled from "styled-components";
export const ImageSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 10px;
  padding: 30px 10px;
  justify-items: center;
  align-items: center;
  background-color: #2b2c2f;
  margin-bottom: 50px;
  z-index: 0;
  img {
    width: 111.95px;
    z-index: 1;
    color: "white";
    background-color: white;
    object-fit: contain;
  }
`;
