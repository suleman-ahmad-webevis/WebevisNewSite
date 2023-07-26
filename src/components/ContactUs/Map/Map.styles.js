import styled from "styled-components";
import map from "../../../assets/images/ContactUs/map-bg.png";
import mapmini from "../../../assets/images/ContactUs/map-bg-mini.png";

export const MapContainer = styled.div`
  width: 100%;

  .office-map {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: var(--secondary, #434956);
      font-family: Outfit;
      font-size: 45px;
      margin-bottom: 30px;
      @media screen and (max-width: 375px) {
        display: none;
      }
    }
  }

  .offices {
    background: url(${map.src});
    min-width: 1343px;
    height: 533.089px;
    flex-shrink: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    margin-bottom: 40px;
    position: relative;

    .USA {
      top: 49px;
      left: 43px;
    }
    .UK {
      left: 354px;
      bottom: 8px;
    }
    .PAK {
      top: 15px;
      right: 379px;
    }
    .LHR {
      right: 37px;
      bottom: 135px;
    }
    .img-box {
      width: 85px;
      img {
        width: 100%;
        display: block;
      }
    }
    .address {
      display: flex;
      position: absolute;
      gap: 25px;

      .address-text {
        width: 100%;
        max-width: 160px;

        span {
          /* background: var(
            --linear,
            linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%)
          );
          background-clip: text; */
          font-family: Outfit;
          font-size: 45px;
          font-weight: 500;
          background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        p {
          color: var(--secondary, #434956);
          font-family: Outfit;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
        }
      }
    }

    @media screen and (max-width: 1199px) {
      .LHR {
        right: 215px;
        background-color: red;
      }
      /* .LHR {
        right: 215px;
        bottom: 135px;
      }
      .USA {
        top: 49px;
        left: 245px;
      } */
    }
    @media screen and (max-width: 1399px) {
      .LHR {
        right: 120px;
        bottom: 135px;
      }
      .USA {
        top: 49px;
        left: 150px;
      }
    }

    @media screen and (max-width: 375px) {
      background: url(${mapmini.src});
      width: 1920.042px;
      height: 1071.138px;
      /* transform: rotate(-45deg); */
      /* flex-shrink: 0; */
      .img-box {
        width: 65.29px;
      }
      font-size: 28px;
      .address .address-text span {
        font-size: 28px;
      }
      .address .address-text {
        width: 239px;
      }
      .address .address-text p {
        font-size: 20px;
      }
      .USA {
        top: 0;
        right: 0;
      }
    }
  }
`;
