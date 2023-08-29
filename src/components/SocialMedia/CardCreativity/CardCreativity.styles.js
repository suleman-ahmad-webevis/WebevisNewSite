import styled from "styled-components";


export const Card = styled.div`
  max-width: 460px;
  position: relative;
  color: #fff;
  img{
    display: block;
    max-width: 100%;
    height: auto;
    
  }
  .bottom-text{
    margin-bottom: 20px;
    position: absolute;
    bottom: 40px;
    padding: 0 30px;
   
    h1{
      font-size: 45px;
      margin-bottom: 20px;

      @media screen and (max-width: 540px){
      font-size: 38px;
      margin-bottom : 30px;
}
    }
  }
  .title{
    display: block;
    font-size:28px;
    line-height: 32px;
    background: linear-gradient(151deg, #00C6FF 0%, #00FFB2 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;


@media screen and (max-width: 540px){
      font-size: 23px;
}

  }
  Button{
    
  @media screen and (max-width: 540px){
  font-size  :18px ;
  margin: 0;

}
}
`;

