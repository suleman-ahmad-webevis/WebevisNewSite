import back from "../../semservices/assests/card.png";
import styled from "styled-components";
// export const MarketingSec = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   margin-top: 100px;
//   margin-bottom: 100px;
//   img {
//     width: 620px;
//     height: 400px;
//   }
// `;
// export const MarketingHeading = styled.section`
//   position: relative;
//   text-align: center;
//   h1 {
//     position: absolute;
//     top: 140px;
//     left: 110px;
//     width: 384px;
//     font-family: "Outfit";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 45px;
//     line-height: 150%;
//     text-align: center;
//     color: #434956;
//   }
// `;
// export const MarketImg = styled.section`
//   img {
//     width: 70px;
//     height: 50px;
//     object-fit: contain;
//   }
//   :nth-child(1) {
//     position: absolute;
//     top: 60px;
//     left: 380px;
//     padding: 20px 10px;
//     background: #2b2c2f;
//     border-radius: 50%;
//     h3 {
//       position: absolute;
//       top: -100px;
//       left: -320px;
//       width: 396px;
//       font-family: "Outfit";
//       font-style: normal;
//       font-weight: 700;
//       font-size: 28px;
//       line-height: 150%;
//       text-align: center;
//       color: #434956;
//     }
//   }
//   :nth-child(2) {
//     position: absolute;
//     top: 250px;
//     left: 320px;
//     background: #26b37c;
//     padding: 20px 10px;
//     border-radius: 50%;
//     h3 {
//       position: absolute;
//       top: -100px;
//       left: -320px;
//       color: #26b37c;
//       font-family: "Outfit";
//       font-style: normal;
//       font-weight: 700;
//       font-size: 28px;
//       line-height: 150%;

//       text-align: center;

//       color: #28b781;
//     }
//   }
//   :nth-child(4) {
//     position: absolute;
//     top: 60px;
//     right: 385px;
//     padding: 20px 10px;
//     background: #2b2c2f;
//     border-radius: 50%;
//     h3 {
//       color: #2b2c2f;
//       position: absolute;
//       top: -80px;
//       right: -320px;
//       font-family: "Outfit";
//       font-style: normal;
//       font-weight: 700;
//       font-size: 26px;
//       line-height: 150%;

//       text-align: center;

//       color: #434956;
//     }
//   }
//   :nth-child(5) {
//     position: absolute;
//     top: 250px;
//     right: 320px;
//     padding: 20px 10px;
//     background: #26b37c;
//     border-radius: 50%;
//     h3 {
//       color: #26b37c;
//       position: absolute;
//       top: -100px;
//       right: -320px;
//       font-family: "Outfit";
//       font-style: normal;
//       font-weight: 700;
//       font-size: 26px;
//       line-height: 150%;
//       text-align: center;
//       color: #28b781;
//     }
//   }
//   :nth-child(6) {
//     position: absolute;
//     top: -40px;
//     left: 630px;
//     padding: 20px 10px;
//     background: red;
//     border-radius: 50%;
//     h3 {
//       position: absolute;
//       top: -50px;
//       left: -50px;
//       font-family: "Outfit";
//       font-style: normal;
//       font-weight: 700;
//       font-size: 28px;
//       line-height: 150%;
//       text-align: center;
//       color: #28b781;
//     }
//   }

//   /* ::before{
//     content: '';
//     color: yellow;
// padding: 70px 100px;
// background: red;
// border-radius: 50%;

// z-index: -1;
// background: #FFFFFF;
// }  */
// `;
export const MarketHeading = styled.section`
  display: flex;
  flex-direction: column;
  h5 {
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    /* margin-top: -30px; */
    font-size: 45px;
    color: #424954;
  }
  @media screen and (max-width:658px){
  
    h5{
      font-size: 30px;
    }
  }
  `;
export const MarketFlex = styled.section`

  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8.86434px;
  background-image: url(${back.src}),
    linear-gradient(
      110.26deg,
      rgba(12, 145, 204, 0.82) -1.17%,
      rgba(2, 185, 128, 0.87) 60.57%
    );
  background-size: cover;
  background-position: center;
  padding: 20px;
  margin-bottom: 50px;
  @media screen and (max-width:1024px) {
    flex-wrap: wrap;
    max-width: 100%;
  }
  @media screen and (max-width:768px) {
    flex-wrap: wrap;
    max-width: 85%;
  }
`;
export const MarketInside = styled.section`
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 150%;
    margin: 0;
    color: #ffffff;
  }
  p {
    margin: 0;
    font-family: "GT Haptik";
    font-style: normal;
    text-align: center;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
  }
  @media screen and (max-width:1024px) {
    h1{
font-size: 30px;
    }
    p{
      font-size: 35px;
    }
  }
  @media screen and (max-width:658px) {
    h1{
font-size: 20px;
    }
    p{
      font-size: 22px;
    }
  }
`;
export const SemSec = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const SemFlex = styled.section`
text-align: center;
max-width: 1124px;


h1{
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  color: #424954;
}
p{
  font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 28px;
text-align: center;
color: #2B2C2F;
}
img{
  width: 900px;
  height: 500px;
  max-width: 100%;
  min-height: 100%;
  margin: auto;
  object-fit: contain;
}


@media screen and (max-width:658px){
  h1{
font-size: 36px;
  }
  p{
    font-size: 18px;
  }
  img{
    max-width: 90%;
    margin-top: -167px;
    margin-bottom: -150px;
  }
}
`

