import styled from "styled-components";
export const LookSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2b2c2f;
  padding: 30px;
  margin-top: 60px;
  margin-bottom: 50px;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
export const LookText = styled.section`
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #ffffff;
    margin: 0;
    line-height: 64px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #f2f4f5;
  }
  img {
    width: 88px;
    height: 88px;
    margin-right: 3rem;
    background: #ffffff;
    object-fit: contain;
    border-radius: 8px;
  }

@media screen and (max-width:658px){
  text-align: center;
  h1{
    font-size: 34px;
margin-top: 16px;
    line-height: 45px;
  }
  p{
    font-size: 17px;
  }
  img{
    margin: 0;
  }
} 
`;
export const LookFlex = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width:658px) {
  flex-direction: column;
  
}
`;
export const Button = styled.section`
  background: #28b781;
  padding: 10px 30px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  @media screen and (max-width:768px){
    font-size: 15px;
    text-align: center;
    margin: auto;
  }
`;
export const LookInside = styled.section`
  display: flex;
  flex-direction: column;
`;
