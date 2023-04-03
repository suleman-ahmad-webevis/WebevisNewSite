<<<<<<< HEAD
import styled, { css } from "styled-components";
export const Flex = styled.div`
  display: flex;
  align-items: ${({ Align }) => (Align ? Align : "center")};
  justify-content: ${({ content }) => (content ? content : "space-between")};
  gap: ${({ Gap }) => (Gap ? Gap : "0")};
  ${({ md }) =>
    md &&
    css`
      @media (max-width: 992px) {
        display: block;
        justify-content: space-around;
        gap: 50px;
        display: grid;
        grid-template-columns: auto auto auto;
      }
    `}
    ${({ xs }) =>
    xs &&
    css`
      @media (max-width: 576px) {
        grid-template-columns: auto auto;
        gap: 0;
      }
    `}
    ${({sm})=> sm && css`
    @media (max-width: 768px){
     display: block;
    }
    `}
=======
import styled, {css} from "styled-components";
export const Flex = styled.div`
display: flex;
align-items: ${({Align})=> (Align ? Align:"center")};
justify-content: ${({ content }) => (content ? content : "space-between")};
gap: ${({Gap})=> (Gap ? Gap:"0")};
>>>>>>> 837d90ea33d7b353190ddd61b09e4838e1097364
`;
