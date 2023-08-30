import styled from "styled-components";
export const CardHolder = styled.div`
text-align: center;
.header{
  margin-bottom: 50px;
  h1{
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    color: var(--secondary, #434956);  
    @media screen and (max-width: 1500px){
      font-size: 35px;
      line-height: 40px;
    }
    @media screen and (max-width: 992px){
      font-size: 28px;
      line-height: 32px;
     
    }
  }
}
.Card-parent{
  max-width: 1420px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-bottom: 100px;
  @media screen and (max-width: 1500px){
      padding: 10px;
     
    }
}
`;

export const Card = styled.div`
/* display: flex; */
@media screen and (max-width: 1500px){
      padding: 10px;

    }

`;
export const Approach = styled.div`

display: flex;
flex-direction: column;
align-items: start;
max-width: 350px;
gap: 20px;
margin-bottom: 50px;

.imagewrapper{
  position: relative;
      &::after{
        content: "";
    position: absolute;
    left: 151px;
    border: 1px dashed #28B781;
    width: 310px;
  }
  filter: drop-shadow(0px 1px 11px rgba(0, 0, 0, 0.10));
  border-radius: 50%;
  background-color: #fff;
  width: 145px;
  height: 145px;
  align-items: center;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      
  }

.title-holder{
      display: flex;
      justify-content: start;
      
      h2{
        margin-bottom: 20px;
      }
    }
.text-holder{

      text-align: left;
      p{
        
          @media screen and (max-width: 992px){
      font-size: 16px;
    }
      }
   
    }
`







