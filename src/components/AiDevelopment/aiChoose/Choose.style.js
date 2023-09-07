import styled from "styled-components";

export const ChooseSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 150px;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 90px;
    @media screen and (max-width: 991px) {
      font-size: 35px;
    }
    @media screen and (max-width: 574px) {
      font-size: 28px;
    }
  }
  h3 {
    color: #424954;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 42px */
    text-transform: capitalize;
    margin-bottom: 10px;
    @media screen and (max-width: 991px) {
      font-size: 24px;
    }
    @media screen and (max-width: 767px) {
      font-size: 20px;
      max-width: 214px;
    }
    @media screen and (max-width: 574px) {
      width: 100%;
      font-size: 18px;
    margin-bottom: 0px;
    }
  }
  p {
    color: #434956;
    font-size: 18px;
    font-style: normal;
    width: 491px;
    font-weight: 400;
    line-height: 150%; /* 27px */
    @media screen and (max-width: 1200px) {
      width: 400px;
    }
    @media screen and (max-width: 991px) {
      width: 300px;
      font-size: 16px;
    }
    @media screen and (max-width: 767px) {
      width: 224px;
      font-size: 14px;
    }
    @media screen and (max-width: 574px) {
      width: 100%;
      font-size: 14px;
      line-height: 19px;
    }
  }
  h5 {
    color: #fff;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    @media screen and (max-width: 991px) {
      font-size: 35px;
    }
    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
  }
  .line {
    position: relative;
    .center_image {
      text-align: center;
      position: relative;
      width: 1000px;
      margin: 0 auto;
      @media screen and (max-width: 1200px) {
        width: 800px;
      }
      @media screen and (max-width: 767px) {
        width: 500px;
      }
      @media screen and (max-width: 574px) {
        width: 500px;
      }
      @media screen and (max-width: 574px) {
        width: 286px;
        text-align: left;
      }
      .step1 {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        top: -30px;
        left: -90px;
        @media screen and (max-width: 991px) {
          left: 30px;
        }
        @media screen and (max-width: 767px) {
          left: -23px;
        }
        @media screen and (max-width: 574px) {
          left: 51px;
          align-items: flex-start;
        }
      }
      .step2 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 22%;
        right: -90px;
        @media screen and (max-width: 991px) {
          right: 30px;
        }
        @media screen and (max-width: 767px) {
          right: -26px;
        }
        @media screen and (max-width: 574px) {
          left: 51px;
          align-items: flex-start;
        }
      }
      .step3 {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        top: 43%;
        left: -90px;
        @media screen and (max-width: 991px) {
          left: 30px;
        }
        @media screen and (max-width: 767px) {
          left: -23px;
        }
        @media screen and (max-width: 574px) {
          left: 51px;
    top: 44%;
          align-items: flex-start;
        }
       
      }
      .step4 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 68%;
        right: -90px;
        @media screen and (max-width: 991px) {
          right: 30px;
        }
        @media screen and (max-width: 767px) {
          right: -26px;
        }
        @media screen and (max-width: 574px) {
          left: 51px;
          align-items: flex-start;
        }
      }
      .step5 {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        position: absolute;
        top: 88%;
        left: -90px;
        @media screen and (max-width: 991px) {
          left: 30px;
        }
        @media screen and (max-width: 767px) {
          left: -23px;
        }
        @media screen and (max-width: 574px) {
          left: 51px;
          align-items: flex-start;
          top: 92%;
        }
      }
      .circle1 {
        background-color: #28b781;
        width: 86.419px;
        height: 86.419px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        position: absolute;
        top: -1%;
        right: 46%;
        @media screen and (max-width: 1200px) {
          right: 45%;
        }
        @media screen and (max-width: 991px) {
          right: 45%;
        }
        @media screen and (max-width: 767px) {
          right: 44%;
          width: 60px;
          height: 60px;
        }
        @media screen and (max-width: 574px) {
          left: -29px;
          top: -24px;
        }
      }
      .circle2 {
        background-color: #313131;
        width: 86.419px;
        height: 86.419px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        position: absolute;
        top: 23%;
        right: 46%;
        @media screen and (max-width: 1200px) {
          right: 45%;
        }
        @media screen and (max-width: 991px) {
          right: 45%;
        }
        @media screen and (max-width: 767px) {
          right: 44%;
          width: 60px;
          height: 60px;
        }
        @media screen and (max-width: 574px) {
          left: -29px;
        }
      }
      .circle3 {
        background-color: #28b781;
        width: 86.419px;
        height: 86.419px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        position: absolute;
        top: 46%;
        right: 46%;
        @media screen and (max-width: 1200px) {
          right: 45%;
        }
        @media screen and (max-width: 991px) {
          right: 45%;
        }
        @media screen and (max-width: 767px) {
          right: 44%;
          width: 60px;
          height: 60px;
        }
        @media screen and (max-width: 574px) {
          left: -29px;
        }
      }
      .circle4 {
        background-color: #313131;
        width: 86.419px;
        height: 86.419px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        position: absolute;
        top: 69%;
        right: 46%;
        @media screen and (max-width: 1200px) {
          right: 45%;
        }
        @media screen and (max-width: 991px) {
          right: 45%;
        }
        @media screen and (max-width: 767px) {
          right: 44%;
          width: 60px;
          height: 60px;
        }
        @media screen and (max-width: 574px) {
          left: -29px;
        }
      }
      .circle5 {
        background-color: #28b781;
        width: 86.419px;
        height: 86.419px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        position: absolute;
        top: 91%;
        right: 46%;
        @media screen and (max-width: 1200px) {
          right: 45%;
        }
        @media screen and (max-width: 991px) {
          right: 45%;
        }
        @media screen and (max-width: 767px) {
          right: 44%;
          width: 60px;
          height: 60px;
        }
        @media screen and (max-width: 574px) {
          left: -29px;
        }
      }
    }
  }
`;
