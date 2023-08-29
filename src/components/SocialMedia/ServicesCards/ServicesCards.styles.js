import styled from "styled-components";
export const Cardwrapper = styled.div`
width: 100%;
max-width: 900px;
display:flex;
flex-wrap:wrap;
justify-content: start;
gap: 20px;
margin-bottom: 20px;
@media screen and (max-width: 540px){
  gap: 15px;
  margin-bottom: 10px;
}

`;
export const Iconbox = styled.div`
 width:70px;
 height:70px;
 margin-bottom: 20px;
 background-color: #28B781;
 border-radius: 50%;
 display: flex;
 align-items: center;
  justify-content: center;
position: relative;
z-index: 5;
@media screen and (max-width: 540px){
  width:40px;
 height:40px;
}
  
 img{
  
  display: block;
  width: 100%;
  max-width: 30px;
  height: auto;
  &.hover-view{
      display: none; 
  }
  @media screen and (max-width: 540px){
  width:20px;
 height:20px;
}
}
 `;

export const Card = styled.div`
  width: 270px;
  background-color:#fff;
  border-radius: 10px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
  @media screen and (max-width: 1400px){
    width: 48%;
  }
  @media screen and (max-width: 540px){
    width: 45%;
}
  &:hover{
    img {
      transition: all 0.5s ease-in-out;
    filter: invert(57%) sepia(61%) saturate(618%) hue-rotate(106deg) brightness(97%) contrast(69%);
      } 
    background: #28B781;
    .header{
      ::after{
        background: linear-gradient(113deg, #F6F3F3 0%, rgba(246, 243, 243, 0.00) 100%);
      }
     
    }
    ${Iconbox}{
      background-color:#fff;     
       
    }
    .text-holder{
      .title{
      color:#FFF;
      }
      .view-more{
        background-color:#fff;
      }   
    }
    }

    .header{
      position: relative;
      &::after{
        content:"";
        position: absolute;
        top: 22px;
        left: -20px;
        right: -20px;     
        height: 27px;
        background-color: #F6F3F3;
        @media screen and (max-width: 540px){
          top: 9px;
        }
      }
    }
    .text-holder{
      max-width: 200px;
  .title{
    width: 100%;
  display: block;
  color: #434956;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 20px;
  @media screen and (max-width: 540px){
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 5px;
}
}
.view-more{
  display: inline-flex;
  padding: 10px;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  border-radius: 11px;
  background: #EAF7EE;
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.13);


}
.btn{
  font-size: 16px;
  @media screen and (max-width: 540px){
    font-size: 12px;
    padding: 0 ;
}
}}
 `;





