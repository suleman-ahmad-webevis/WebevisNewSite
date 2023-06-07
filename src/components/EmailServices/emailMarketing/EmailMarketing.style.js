import styled from "styled-components";
import email  from "../../EmailServices/assests/emailback.png"
export const Market = styled.section`
  // display: flex;
  // align-items: flex-start;
  // justify-content: flex-start;
  // padding: 56px 50px;
  // gap: 10rem;
  //
`;
export const MarketText = styled.section`
  //  width: 576px;
  //   ul {
  //   }
  //   li{
  //     list-style: circle;
  //     font-family: 'Outfit';
  // font-style: normal;
  // font-weight: 400;
  // font-size: 28px;
  // line-height: 150%;
  // color: #434956;
  //   }
  //
`;
export const MarketHeading = styled.section`
  //   padding-left: 15px;
  // font-family: 'Outfit';
  // margin-top: 3rem;
  // font-style: normal;
  // font-weight: 600;
  // font-size: 45px;
  // line-height: 150%;
  // color: #424954;
  //
`;
export const MarketGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  grid-gap: 30px;
  width: 95%;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  @media screen and (max-width:900px){
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media screen and (max-width:500px){
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

`;
export const GridDiv = styled.section`
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  width: 249px;
  height: 227px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:900px){
   width: 100%;
  }

  img {
    object-fit: contain;
    width: 51px;
    height: 55.11px;
  }
  h1 {
    width: 154px;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
:nth-child(1){
background-image: url(${email.src});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
h1{
  color: white;
}
img{
  fill: #ffffff;

}
}
:nth-child(6){

h1{
  width: 207px;
}
}


`;
