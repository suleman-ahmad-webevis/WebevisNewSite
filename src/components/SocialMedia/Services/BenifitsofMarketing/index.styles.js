import styled from "styled-components";
export const DigitalMarketing = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;

@media screen and (max-width: 991px){
      display: block;
    }
`
export const ImageHolder = styled.div`
max-width: 600px;
@media screen and (max-width: 1199px){
    max-width: 450px;
}
@media screen and (max-width: 991px){
    max-width: 100%;
}
img{
    display: block;
    max-width: 100%;
    height: auto;
}
`;

export const TextHolder = styled.div`
max-width: 500px;
display: flex;
flex-direction: column;
color: var(--secondary, #434956);
@media screen and (max-width: 1400px){}
@media screen and (max-width: 991px){
    max-width: 100%;
}
h1{ 
    font-size: 45px;
    margin-bottom: 30px;

       @media screen and (max-width: 1400px){
    font-size: 35px;

    } @media screen and (max-width: 540px){
  font-size  : 28px ;
}

}
p{
    margin-bottom: 50px;
    font-size: 24px;
    font-weight: 400;
    line-height: 150%; 

    @media screen and (max-width: 1400px){
    font-size: 20px;

    @media screen and (max-width: 1199px){
        margin-bottom: 30px;
    }
   
  @media screen and (max-width: 540px){
  font-size  :16px ;
}

    }
}
h2{
    font-size: 24px;
   font-weight: 600;
    line-height: 150%; 
    margin-bottom: 15px;

    @media screen and (max-width: 1400px){
    font-size: 20px;
    }
}
ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    justify-content: start;

    @media screen and (max-width: 767px){
      gap: 0;
    }
    li{
        width: 48%;
        color: var(--secondary, #434956);
        font-size: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        @media screen and (max-width: 1400px){
            font-size: 18px;
    }

    @media screen and (max-width: 1199px){
    margin-bottom: 6px;
  }

  @media screen and (max-width: 767px){
       font-size: 16px;
  }
        
    }

}
.icon-holder{
   display: flex;
   width: 25px;
   height: 25px;
   align-items: center;
   justify-content: center;
background: #28B781;
border-radius: 50%;
padding: 5px;

flex-shrink: 0;
margin-right: 10px;

@media screen and (max-width: 767px){
    width: 15px;
   height: 15px;
   padding: 2px;
  }
}

`;