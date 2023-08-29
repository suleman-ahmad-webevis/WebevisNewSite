import styled from "styled-components";
export const CardHolder = styled.div`

text-align: center;
.header{
  margin-bottom: 50px;
  h1{
    font-size: 45px;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-bottom: 100px;
  @media screen and (max-width: 1200px){
    flex-wrap: wrap;
  }
}
`;

export const Card = styled.div`
display: flex;
.content-holder{

}
`;
export const Approach = styled.div`

display: block;
text-align: center;
max-width: 350px;
margin-bottom: 50px;

p{

@media screen and (max-width: 992px){
    font-size: 16px;
  }
}
`;







