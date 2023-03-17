import styled, {css} from "styled-components";
export const Flex = styled.div`
display: flex;
align-items: ${({Align})=> (Align ? Align:"center")};
justify-content: ${({ content }) => (content ? content : "space-between")};
gap: ${({Gap})=> (Gap ? Gap:"0")};
`;
