import styled from "styled-components";

export const FlowSec = styled.div`
  display: flex;
  align-items: center;
  border-radius: 37.352px;
  border: 0.934px solid var(--neutral-300, #eff0f6);
  background: #eaf7ee;
  box-shadow: 0px 6.536630153656006px 22.411304473876953px 0px
    rgba(20, 20, 43, 0.05);
  justify-content: space-between;
  @media screen and (max-width:767px){
    flex-direction: column;
    }
  .flow_text {
    padding: 20px 0px 20px 40px;
    @media screen and (max-width:1204px){
      width: 50%;
    }
    @media screen and (max-width:992px){
      width: 69%;
    }
    @media screen and (max-width:768px){
      width: 82%;
    }
    @media screen and (max-width:574px){
      width: 100%;
    }

    h3 {
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 20px;
      @media screen and (max-width:1204px){
      font-size: 35px;
    }
    @media screen and (max-width:1023px){
      font-size: 30px;
    }
    }
    p {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      max-width: 625px;
      line-height: 28.014px;
      margin-bottom: 20px;
      @media screen and (max-width:1204px){
      font-size: 20px;
    }
    @media screen and (max-width:1023px){
      font-size: 17px;
    }
    }
  }
  .flow_image {
    img {
      @media screen and (max-width:1204px){
        max-width: 100%;
        height: 100%;
    }
    }
  }
`;
