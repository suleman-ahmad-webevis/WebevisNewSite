import styled from "styled-components";
export const ChooseSection = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 750px) {
    width: 90%;
    margin: auto;
    /* padding: 0 20px; */
  }
`;
export const Heading = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 150%;
  color: #ffffff;
`;
export const Paragraph = styled.h3`
  font-style: normal;
  font-weight: ${({ FW }) => (FW ? FW : "400")};
  font-size: ${({ FS }) => (FS ? FS : "28px")};
  line-height: ${({ LH }) => (LH ? LH : "35px")};
  text-transform: ${({ Transfrom }) => (Transfrom ? "none" : "lowercase")};
  color: #424954;
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  &:nth-child(2) {
    margin-bottom: 2rem;
    padding-left: 10px;
  }
  &:nth-child(1) {
    padding-left: 10px;
  }
  @media screen and (max-width: 1400px) {
    font-size: ${({ FSR }) => (FSR ? FSR : "20px")};
    line-height: ${({ LHR }) => (LHR ? LHR : "30px")};
  }
  @media screen and (max-width: 950px) {
    font-size: ${({ FSRF }) => (FSRF ? FSRF : "20px")};
    line-height: ${({ LHR }) => (LHR ? LHR : "30px")};
  }
  @media screen and (max-width: 500px) {
    font-size: ${({ FSRS }) => (FSRS ? FSRS : "20px")};
    line-height: ${({ LHRS }) => (LHRS ? LHRS : "30px")};
  }
`;
export const StepWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  @media screen and (max-width: 1100px) {
    align-items: center;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-left: 10px; */
  }
`;
export const StepItems = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 2rem;
  grid-gap: 1.5rem;
  position: relative;
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: auto;
    grid-gap: 1rem;
  }
`;
export const Stepitem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
export const ItemImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 1rem 0 2rem 0;

  @media screen and (max-width: 850px) {
    width: 50px;
    height: 50px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
export const StepImage = styled.div`
  width: 50%;
  @media screen and (max-width: 750px) {
    width: 100%;
    margin: auto;
    text-align: center;
  }

  img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    height: auto;
    border-radius: 30px;
    @media screen and (max-width: 750px) {
      margin-bottom: 2rem;
    }
  }
`;
export const FloatLine = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "11%")};
  left: ${({ left }) => (left ? left : "12%")};
  z-index: -10;
  @media screen and (max-width: 750px) {
    left: 8%;
  }

  img {
    display: inline-block;
    /* vertical-align: ; */
    width: 240px;
    height: auto;
    @media screen and (max-width: 1000px) {
      width: 180px;
    }
    @media screen and (max-width: 850px) {
      width: 150px;
    }
    @media screen and (max-width: 750px) {
      width: 300px;
      object-fit: contain;
    }
    @media screen and (max-width: 650px) {
      width: 250px;
      object-fit: contain;
    }
    @media screen and (max-width: 550px) {
      width: 230px;
      object-fit: contain;
    }
    @media screen and (max-width: 452px) {
      width: 190px;
      object-fit: contain;
    }
    @media screen and (max-width: 350px) {
      width: 160px;
      object-fit: contain;
    }
  }
`;
