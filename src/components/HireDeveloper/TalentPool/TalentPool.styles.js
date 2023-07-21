import styled from "styled-components";
export const Talent = styled.section`
  padding-bottom: 130px;
`;
export const Pool = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const Slider = styled.section`
  width: 1015px;
`;
export const Title = styled.div`
  width: 25%;
  h2 {
    color: #434956;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 40px;
  }
  ul {
    width: 70%;
    li {
      color: #434956;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      padding-bottom: 20px;
      padding-left: 10px;
    }
    li::marker {
      content: ".";
      font-size: 50px;
      line-height: 0;
      color: #28b781;
    }
  }
`;
