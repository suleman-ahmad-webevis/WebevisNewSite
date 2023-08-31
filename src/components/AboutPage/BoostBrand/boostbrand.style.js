import styled from "styled-components";
// export const LastHeading = styled.section`
// width: 1440px;
// height:125px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 15px 50px;

//   @media screen and (max-width: 1200px){

//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

// }
//   h1 {
//     color: var(--secondary, #434956);

// font-size: 35px;
// font-weight: 600;
// @media screen and (max-width: 1440px){
//   font-size: 30px;
//   line-height: 35px;

// }
// @media screen and (max-width: 992px){
//   font-size: 28px;

// }
//   }


//   button {
//     width: 188px;
//     height: 50px;

//   }
// `;

export const Amazon = styled.section`
  
    background: #EAF7EE;
box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.14);
  margin-top: 50px;
  @media screen and (max-width: 1440px){
width: 100%;

}
`;


export const LastHeading = styled.div`
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  button {
     width: 188px;
     height: 50px;

  }
  h1 {
  
color: var(--secondary, #434956);
    font-size: 30px;
    line-height: 35px;
    font-weight: 600;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (30 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(24px + (35 - 24) * (100vw - 390px) / (1440 - 390));
      text-align: center;
    }
  }
  @media screen and (max-width: 690px) {
    flex-direction: column;
    gap: 20px;
  }
  `;