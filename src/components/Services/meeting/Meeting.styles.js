import styled from "styled-components";
import MeetingBg from "../../../assets/images/Services/meetingBg.png";
import mobMeetingBg from "../../../assets/images/Services/mobilemeeting.png";
export const MeetinWraaper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2rem;
  @media screen and (max-width: 1200px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 913px) {
    padding: 0;
  }
`;
export const MeetingSec = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  background-image: url(${MeetingBg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 30px 30px 0 30px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  @media screen and (max-width: 1000px) {
    position: static;
  }
  @media screen and (max-width: 913px) {
    width: 80%;
    flex-direction: column;
    background-image: url(${mobMeetingBg.src});
  }
  @media screen and (max-width: 450px) {
    /* width: 100%; */
    flex-direction: column;
    background-image: url(${mobMeetingBg.src});
  }
`;
export const MeetingTxt = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0 40px 0;
  @media screen and (max-width: 913px) {
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 435px) {
    width: 100%;
  }
`;
export const Paragraph = styled.h3`
  font-style: normal;
  font-weight: ${({ FW }) => (FW ? FW : "600")};
  font-size: ${({ FS }) => (FS ? FS : "60px")};
  line-height: ${({ LH }) => (LH ? LH : "76px")};
  text-transform: ${({ Transfrom }) => (Transfrom ? "none" : "uppercase")};
  color: #ffffff;
  margin-top: ${({ mt }) => (mt ? mt : "1rem")};
  @media screen and (max-width: 1300px) {
    font-size: ${({ FSRF }) => (FSRF ? FSRF : "40px")};
    line-height: ${({ LHRF }) => (LHRF ? LHRF : "50px")};
  }
  @media screen and (max-width: 1200px) {
    font-size: ${({ FSRS }) => (FSRS ? FSRS : "30px")};
    line-height: ${({ LHRS }) => (LHRS ? LHRS : "40px")};
  }
  @media screen and (max-width: 913px) {
    text-align: center;
  }
`;
export const MeetingImage = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-end;
  margin-left: auto;
  z-index: 10;
  @media screen and (max-width: 1000px) {
    display: none;
    width: 100%;
  }
  img {
    @media screen and (max-width: 1170px) {
      width: 400px;
    }
    @media screen and (max-width: 1060px) {
      width: 350px;
    }
  }
`;
export const MeetingImg = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 1000px) {
    display: none;
  }
  @media screen and (max-width: 913px) {
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 320px;
    height: 500px;
    @media screen and (max-width: 450px) {
      width: 290px;
      height: 400px;
    }
  }
`;
