import styled from "styled-components";
export const ProposalHolder = styled.section`
  padding: 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const ProposalContent = styled.div`
  .image-holder {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 1430px) {
      max-width: 1200px;
    }
    @media screen and (max-width: 1199px) {
      max-width: 990px;
    }
    @media screen and (max-width: 991px) {
      max-width: 767px;
      flex-direction: column;
      gap: 2px;
    }
    @media screen and (max-width: 767px) {
      max-width: 575px;
      /* text-align: center; */
    }
    @media screen and (max-width: 575px) {
      max-width: 390px;
      text-align: center;
    }

    .title {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;

      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
        line-height: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      }
      /* @media screen and (max-width: 400px) {
        font-size: 12px;
        line-height: 14px;
      } */
    }
    p {
      color: #313131;
      font-size: 16px;
      line-height: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(14px + (16 - 14) * (100vw - 390px) / (1440 - 390));
        line-height: calc(18px + (20 - 18) * (100vw - 390px) / (1440 - 390));
      }
      /* @media screen and (max-width: 575px) {
        font-size: 12px;
        line-height: 14px;
        text-align: center;
      } */
    }

    .center-box {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-align: center;
      padding: 20px 10px 10px;
      flex-shrink: 0;
      width: 240px;
      height: 240px;
      border-radius: 100%;
      background: linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%);
      border: 10px solid #fff;
      box-shadow: 0 10px 0 0 rgba(0, 0, 0, 0.12);
      @media screen and (max-width: 767px) {
        box-shadow: 7px 0 0 0 rgba(0, 0, 0, 0.12);
        border: 7px solid #fff;
      }
      @media screen and (max-width: 1430px) {
        width: 220px;
        height: 220px;
      }
      /* @media screen and (max-width: 575px) {
        width: 200px;
        height: 200px;
      } */
      @media screen and (max-width: 575px) {
        width: 160px;
        height: 160px;
      }

      p {
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        color: #fff;
        @media screen and (max-width: 1370px) {
          font-size: 18px;
          line-height: 22px;
        }
        /* @media screen and (max-width: 575px) {
          font-size: 16px;
          line-height: 20px;
        } */
        @media screen and (max-width: 575px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
    .img-holder1,
    .img-holder2 {
      position: relative;

      @media screen and (max-width: 991px) {
        transform: rotate(90deg);
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
      .text-box {
        width: 160px;
        @media screen and (max-width: 575px) {
          width: 130px;
        }
        @media screen and (max-width: 991px) {
          transform: rotate(-90deg);
        }
      }
    }
    .img-holder1 {
      .text-box {
        position: absolute;

        &.box1 {
          top: 95px;
          right: 60px;
          @media screen and (max-width: 1370px) {
            top: 75px;
            right: 40px;
          }
          @media screen and (max-width: 991px) {
            top: 75px;
            right: 71px;
          }
          /* @media screen and (max-width: 575px) {
            top: 82px;
            right: 64px;
          } */
          @media screen and (max-width: 575px) {
            top: 51px;
            right: 38px;
          }
        }
        &.box2 {
          top: 50%;
          left: 90px;
          transform: translateY(-50%);
          @media screen and (max-width: 1370px) {
            left: 72px;
          }
          @media screen and (max-width: 991px) {
            transform: rotate(-90deg) translateY(-50%);
            top: 38%;
            left: 131px;
          }
          /* @media screen and (max-width: 575px) {
            top: 39%;
            left: 127px;
          } */
          @media screen and (max-width: 575px) {
            top: 37%;
            left: 95px;
          }
        }
        &.box3 {
          bottom: 85px;
          right: 60px;
          @media screen and (max-width: 1370px) {
            bottom: 65px;
            right: 40px;
          }
          @media screen and (max-width: 991px) {
            bottom: 98px;
            right: 75px;
          }
          /* @media screen and (max-width: 575px) {
            bottom: 80px;
            right: 71px;
          } */
          @media screen and (max-width: 575px) {
            right: 41px;
            bottom: 50px;
          }
        }
      }
    }
    .img-holder2 {
      .text-box {
        position: absolute;

        &.box4 {
          top: 63px;
          left: 84px;
          @media screen and (max-width: 1370px) {
            top: 46px;
            left: 78px;
          }
          @media screen and (max-width: 991px) {
            top: 40px;
            left: 74px;
          }
          /* @media screen and (max-width: 575px) {
            top: 57px;
            left: 76px;
          } */
          @media screen and (max-width: 575px) {
            top: 31px;
            left: 45px;
          }
        }
        &.box5 {
          top: 50%;
          right: 90px;
          transform: translateY(-50%);
          @media screen and (max-width: 1370px) {
            top: 49%;
            right: 67px;
          }
          @media screen and (max-width: 991px) {
            transform: rotate(-90deg) translateY(-50%);
            top: 40%;
            right: 46px;
          }
          /* @media screen and (max-width: 575px) {
            top: 41%;
            right: 40px;
          } */
          @media screen and (max-width: 575px) {
            top: 37%;
            right: 10px;
          }
        }
        &.box6 {
          bottom: 85px;
          left: 80px;
          @media screen and (max-width: 1370px) {
            bottom: 72px;
            left: 55px;
          }
          @media screen and (max-width: 991px) {
            bottom: 102px;
            left: 84px;
          }
          @media screen and (max-width: 767px) {
            bottom: 110px;
            left: 85px;
          }
          /* @media screen and (max-width: 575px) {
            bottom: 88px;
            left: 76px;
          } */
          @media screen and (max-width: 575px) {
            bottom: 57px;
            left: 50px;
          }
        }
      }
    }
  }
  .btn-holder {
    text-align: center;
    padding-top: 40px;
    @media screen and (max-width: 1440px) {
      padding-top: calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
