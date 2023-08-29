import styled from "styled-components";
export const ContainerWrapper = styled.div`
position: relative;
margin-bottom: 100px;
`;
export const HeaderSection = styled.div`
    padding: 50px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1200px){
        flex-direction: column;
        gap:20px;
        text-align: center;
        padding: 20px;
    }
    
h1{
    font-size: 45px;
    @media screen and (max-width: 1570px){
        margin-left: 20px;
        font-size: 40px;
      line-height:45px;
 
}
@media screen and (max-width: 1440px){
        margin-left: 30px;
        font-size: 35px;
      line-height:40px;
}
@media screen and (max-width: 876px){
        font-size: 28px;
      line-height:35px;
}
}
p{
    font-size: 20px;
    color: #434956;
    max-width: 600px;
    @media screen and (max-width: 1440px){
      font-size: 18px;
}
@media screen and (max-width: 1440px){
      font-size: 16px;
}
}

`;

export const ContentHolder = styled.div`
display: flex;
width: 100%;
align-items: start;
gap: 30px;
justify-content: space-between;

@media screen and (max-width: 991px){
    display: block;
}

.left-col{
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-grow: 1;
    Button{
        align-items: center;
    justify-content: center;
   
    display: flex;
    gap: 5px;
        @media screen and (max-width: 540px){
    font-size: 12px;
    padding: 0 ;
}
    }
     
    :hover {
        Button{
            background-color:#EAF7EE;
}
    }
    @media screen and (max-width: 540px){
    font-size: 12px;
    padding: 0 ;
}
}
.right-col{
    width: 460px;
    flex-shrink: 0;
    display: flex;
    @media screen and (max-width: 1199px){
        width: 419px;
    }
    @media screen and (max-width: 992px){
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}
`;









