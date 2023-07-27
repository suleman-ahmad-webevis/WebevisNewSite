import styled from "styled-components";

export const Button = styled.button`
  background: ${({ bg }) => (bg ? bg : "white")};
  color: ${({ color }) => (color ? color : "#a1a1a1")};
  border-radius: ${({ radius }) => (radius ? radius : "4px")};
  padding: ${({ padding }) => (padding ? padding : "0 1rem")};
  border: none;
  font-family: "General Sans", "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  transition: 0.5ms ease-in-out;
  margin: ${({ margin }) => (margin ? margin : "")};
  height: 50px;
  /* &:hover {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    color: white;
  } */
  /* @media screen and (max-width: 586px) {
    width: 80%;
    margin: auto;
    font-size: 16px;
  }
  @media screen and (max-width: 486px) {
    height: 40px;
    font-size: 14px;
  } */
`;
export const PrimaryButton = styled.button`
  background: ${({ bg }) =>
    bg ? bg : "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"};
  border-radius: ${({ radius }) => (radius ? radius : "12px")};
  width: ${({ width }) => (width ? `${width}px` : "")};
  height: ${({ height }) => (height ? `${height}px` : "")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? `${size}px` : "18px")};
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : "600")};
  line-height: normal;
  transition: 0.5s all ease-in-out;
  box-shadow: ${({ shadow }) => (shadow ? shadow : "")};
  display: ${({ flex }) => (flex ? flex : "")};
  align-items: ${({ items }) => (items ? items : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  @media screen and (max-width: 1440px) {
    width: ${({ width, minWidth }) => (
      width,
      minWidth
        ? `calc(${minWidth}px + (${width} - ${minWidth}) * (100vw - 390px) / (1440 - 390))`
        : `${width}px`
    )};
    height: ${({ height, minheight }) => (
      height,
      minheight
        ? `calc(${minheight}px + (${height} - ${minheight}) * (100vw - 390px) / (1440 - 390))`
        : `${height}px`
    )};
    font-size: ${({ size, minsize }) => (
      size,
      minsize
        ? `calc(${minsize}px + (${size} - ${minsize}) * (100vw - 390px) / (1440 - 390))`
        : `${minsize}px`
    )};
  }
  &:hover {
    background: ${({ hover }) =>
      hover ? hover : " linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"};
    box-shadow: ${({ shadowH }) =>
      shadowH ? shadowH : " 0px 3px 10px 0px rgba(255, 204, 3, 0.43)"};
  }
`;

export const SecondaryButton = styled.button`
  background: ${({ bg }) =>
    bg ? bg : "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"};
  border-radius: ${({ radius }) => (radius ? radius : "12px")};
  width: ${({ width }) => (width ? `${width}px` : "")};
  height: ${({ height }) => (height ? `${height}px` : "")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: ${({ size }) => (size ? `${size}px` : "18px")};
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : "600")};
  line-height: normal;
  transition: 0.5s all ease-in-out;
  box-shadow: ${({ shadow }) => (shadow ? shadow : "")};
  display: ${({ flex }) => (flex ? flex : "")};
  align-items: ${({ items }) => (items ? items : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  border: ${({ border }) => (border ? border : "")};

  label {
    font-size: inherit;
    font-weight: inherit;
    background: ${({ bgText }) =>
      bgText ? bgText : "linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
  }
  @media screen and (max-width: 1440px) {
    width: ${({ width, minWidth }) => (
      width,
      minWidth
        ? `calc(${minWidth}px + (${width} - ${minWidth}) * (100vw - 390px) / (1440 - 390))`
        : `${width}px`
    )};
    height: ${({ height, minheight }) => (
      height,
      minheight
        ? `calc(${minheight}px + (${height} - ${minheight}) * (100vw - 390px) / (1440 - 390))`
        : `${height}px`
    )};
    font-size: ${({ size, minsize }) => (
      size,
      minsize
        ? `calc(${minsize}px + (${size} - ${minsize}) * (100vw - 390px) / (1440 - 390))`
        : `${minsize}px`
    )};
  }
  &:hover {
    background: ${({ hover }) =>
      hover ? hover : " linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"};
    box-shadow: ${({ shadowH }) =>
      shadowH ? shadowH : " 0px 3px 10px 0px rgba(255, 204, 3, 0.43)"};
    label {
      background: ${({ bgTextH }) => (bgTextH ? bgTextH : "#fff")};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;
