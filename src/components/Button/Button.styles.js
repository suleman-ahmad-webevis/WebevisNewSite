import styled from "styled-components"
export const Buton = styled.div`
  display: flex;
  justify-content: ${({ content }) => content ? content : "center"};

  button {
    background-color: ${({ color }) => color ? color : "#fff"};
    color: ${({colour})=> colour ? colour : "#000"};
    border-radius: 30px;  
    font-weight: 700;
    font-size: 18px;
    padding: 10px 23px;
    margin-top: ${({ margin }) => (margin ? margin : "0")};
  }
`
