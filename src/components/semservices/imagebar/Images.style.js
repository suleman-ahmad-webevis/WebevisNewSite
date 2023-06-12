import styled from "styled-components";
export const ImageBar = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(133px, 1fr));
  grid-gap: 76px;
  justify-items: center;
  align-items: center;
  background: #d9d9d9;
  padding: 17px;
  margin-top: 50px;
  margin-bottom: 60px;
  img {
    width: 140px;
    object-fit: contain;
  }
  @media screen and (max-width:658px){
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
  grid-gap: 60px;
  img{
    width: 112px;
  }
  }
`;
