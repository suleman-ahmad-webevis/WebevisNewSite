import styled from "styled-components";

export const CreatorSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1199px) {
    min-height: 1200px;
    gap: 300px;
  }
`;
export const CreatorText = styled.div`
  width: 60%;
  margin: 3rem auto 7rem auto;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1300px) {
      font-size: 40px;
    }
    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
    @media screen and (max-width: 400px) {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    /* margin: 2rem auto; */
  }
`;

export const CreatorPlan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  /* @media screen and (max-width: 800px) {
    transform: rotate(90deg);
    top: 200px;
  } */
  /* @media screen and (max-width: 1000px) {
    display: none;
  } */
`;
export const CreatorBg = styled.div`
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 235px;
  /* width: 17.5%; */
  aspect-ratio: 1/1;
  border-radius: 50%;
  @media screen and (max-width: 1399px) {
    width: 220px;
  }
  @media screen and (max-width: 1199px) {
    width: 190px;
  }
  /* @media screen and (max-width: 1150px) {
    width: 210px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
  }
  @media screen and (max-width: 801px) {
    width: 170px;
  } */
`;
export const CreatorBg1 = styled.div`
  background: white;
  width: 200px;
  /* width: 30%; */
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1399px) {
    width: 190px;
  }
  @media screen and (max-width: 1199px) {
    width: 170px;
  }
  /* @media screen and (max-width: 1150px) {
    width: 180px;
  }
  @media screen and (max-width: 900px) {
    width: 160px;
  }
  @media screen and (max-width: 801px) {
    width: 140px;
  } */
`;

export const CreatorBg2 = styled.div`
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1399px) {
    width: 170px;
  }
  @media screen and (max-width: 1199px) {
    width: 150px;
  }
`;

export const CreatorBg3 = styled.div`
  background: white;
  padding: 0 10px;
  width: 170px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: 1399px) {
    width: 160px;
  }
  @media screen and (max-width: 1199px) {
    width: 140px;
    gap: 10px;
    transform: rotate(-90deg);
  }

  h1 {
    background: ${({ bg }) => (bg ? bg : "gray")};
    /* linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    /* color: gray; */
    opacity: ${({ opacity }) => (opacity ? opacity : "0.2")};
    font-size: 80px;
    position: absolute;
    top: ${({ top }) => (top ? top : "-5%")};
    left: ${({ left }) => (left ? left : "19%")};
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1799px) {
      /* font-size: 70px; */
      top: ${({ xltop }) => (xltop ? xltop : "-5%")};
      left: ${({ xlleft }) => (xlleft ? xlleft : "19%")};
    }
    @media screen and (max-width: 1599px) {
      top: ${({ lgtop }) => (lgtop ? lgtop : "-5%")};
      left: ${({ lgleft }) => (lgleft ? lgleft : "22%")};
      font-size: 60px;
    }
    @media screen and (max-width: 1199px) {
      top: ${({ mdtop }) => (mdtop ? mdtop : "-5%")};
      left: ${({ mdleft }) => (mdleft ? mdleft : "22%")};
      font-size: 60px;
    }

    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (80 - 32) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1399px) {
      font-size: 60px;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media screen and (max-width: 1399px) {
      font-size: 20px;
      padding: 0 10px;
    }
    @media screen and (max-width: 1199px) {
      font-size: 16px;
      padding: 0;
    }
  }
  @media screen and (max-width: 1199px) {
    br {
      display: none;
    }
  }
`;

export const MoveAble = styled.div`
  height: 400px;
  width: 100%;
  position: static;
  top: -20%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  @media screen and (max-width: 1151px) {
    top: -25%;
  }
  @media screen and (max-width: 951px) {
    top: -30%;
  }
  /* @media screen and (max-width: 800px) {
    transform: rotate(90deg);
    top: 75%;
  } */
  img {
    transition: 0.5s ease-in;
    /* display: inline-block;
    vertical-align:top ;
    width: 100%; */
    /* height: auto; */
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const PlaneCreatorRes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  /* margin-bottom: 7rem; */
  position: relative;
  .imgres {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: -1;
  }
  @media screen and (min-width: 1001px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  /* position: relative; */
  width: 100%;
  background-image: url(${(props) => props.image.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1919px) {
    min-height: 470px;
  }
  @media screen and (max-width: 1799px) {
    min-height: 430px;
  }
  @media screen and (max-width: 1599px) {
    min-height: 355px;
  }
  @media screen and (max-width: 1399px) {
    min-height: 345px;
  }
  @media screen and (max-width: 1199px) {
    min-height: 265px;
  }
  @media screen and (max-width: 1199px) {
    width: 986.585px;
    height: 238.929px;
    transform: rotate(90deg);
    justify-content: space-around;
  }
`;
