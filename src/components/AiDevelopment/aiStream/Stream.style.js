import styled from "styled-components";

export const StreamSec = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  margin-top: 60px;
  position: relative;
.text_center{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 15px;
    max-width: 673px;
    @media screen and (max-width:991px){
    font-size: 35px;

    }
    @media screen and (max-width:574px){
    font-size: 28px;

    }
  }
  p {
    color: #434956;
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
    margin-bottom: 70px;
    max-width: 1195px;
    @media screen and (max-width:991px){
    font-size: 24px;

    }
    @media screen and (max-width:574px){
    font-size: 18px;

    }
  }
}
  
  .main_stream {
    /* display: flex; */
    position: relative;
    padding: 0 231px 0 0;
    @media screen and (max-width: 1430px) {
      margin-bottom: 60px;
    }
    @media screen and (max-width: 1199px) {
      padding: 0 130px 0 0;
    }
    @media screen and (max-width: 1199px) {
      padding: 0 100px 0 0;
    }
    @media screen and (max-width: 767px) {
      padding: 0 30px 0 0;
    }
    @media screen and (max-width: 574px) {
      padding: 0 0 0 0;
    }
    .stream_text {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      padding: 44px 50px;

      gap: 30px;

      background: linear-gradient(
        270deg,
        #eaf7ee 82.96%,
        rgba(234, 247, 238, 0) 99.94%
      );
      @media screen and (max-width: 1199px) {
        padding: 30px 50px;
      }
      @media screen and (max-width: 991px) {
        padding: 19px 30px;
        gap: 20px;
        text-align: center;
      }
      @media screen and (max-width: 767px) {
        flex-wrap: wrap;
      }

      .inside {
        display: flex;
        align-items: center;
        flex-direction: column;
        @media screen and (max-width: 574px) {
          img {
            width: 35px;
            height: auto;
            display: block;
          }
        }
      }
      h3 {
        color: #424954;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 42px */
        @media screen and (max-width: 1430px) {
          font-size: 20px;
        }
        @media screen and (max-width: 991px) {
          font-size: 16px;
        }
        @media screen and (max-width: 574px) {
          font-size: 15px;
        }
      }
    }
    .stream_image {
      width: 400px;
      position: absolute;
      top: -30%;
      right: 0px;
      @media screen and (max-width: 1430px) {
        right: -21px;
      }
      @media screen and (max-width: 1199px) {
        width: 300px;
        position: absolute;
        top: -19%;
        right: -42px;
      }
      @media screen and (max-width: 991px) {
        width: 250px;
        position: absolute;
        top: -29%;
        right: -42px;
      }
      @media screen and (max-width: 767px) {
        width: 400px;
        position: absolute;
        top: -26%;
        right: -215px;
      }
      @media screen and (max-width: 574px) {
        width: 400px;
        position: absolute;
        top: -22%;
        right: -290px;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
