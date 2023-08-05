import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(50, 59, 75, 0.3);
  backdrop-filter: blur(4px);
  z-index: 99999;
  padding: 20px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentHolder = styled.div`
  max-width: ${({ width }) => (width ? width : "1000px ")}; //must prop
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : "")}; //must prop
  background: ${({ bg }) => (bg ? bg : "")}; //must props
  border-radius: 15px;
  position: relative;
`;
