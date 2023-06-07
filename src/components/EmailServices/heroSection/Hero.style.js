import styled from "styled-components";
export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 97%;
  margin: auto;
  @media screen and (max-width:900px) {
    flex-direction: column;
  }

`;
export const HeroText = styled.section`
  width: 55%;
  margin-left: 30px;
  @media screen and (max-width: 900px) {
    width: 100%;
    }
  
  h1 {
    font-family: "Outfit";
    width: 457px;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    margin: 0;
    line-height: 76px;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 900px) {
    width: 100%;
  }
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    width: 487px;
    margin-top: 20px;
    line-height: 30px;
    color: #2b2c2f;
    margin-bottom: 15px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 900px) {
    width: 100%;
  }

  }
`;
export const HeroImages = styled.section`
  width: 45%;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
  }
  @media screen and (max-width:400px) {
    width: 100%;
    margin-top: -10px;
  }
  img {
    width: 100%;
    object-fit: contain;
  }

`;
export const Btns = styled.section`
display: flex;
gap: 10px;

@media screen and (max-width:548px){
  flex-direction: column;
  width: 100%;
  align-items: center;
}
`
export const Button = styled.section`
 width: ${({ width }) => (width ? width : "")};
   background: ${({ bg }) => (bg ? bg : "white")};
  border: ${({Border }) => (Border ?Border : "1px solid linear-gradient(93.39deg, #28B781 21.84%, #CFEF00 178.39%)")};
  padding: ${({ padding }) => (padding ? padding : "0 1rem")};
  color: ${({ Color }) => (Color ? Color : "red")}; 
  margin-top: 50px;
  text-align: center;
  border-radius: 40px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 800;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  @media screen and (max-width: 548px){
    width: 80%;
    margin-top: 10px;
  }

`;
