import styled from "styled-components";
import HeroBG from "../../../assets//images/Services/youtubeMarketting/HeroBG.png";

export const HeroContainer = styled.div`
  height: 100vh;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background: url(${HeroBG.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;