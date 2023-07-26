import styled from "styled-components";
import map from "../../../assets/images/ContactUs/map-bg.png";

export const MapContainer = styled.div`
  width: 100%;

  .office-map {
    width: 100%;
    h1 {
      color: var(--secondary, #434956);
      font-family: Outfit;
      font-size: 45px;
      margin-bottom: 30px;
      text-align: center;
      @media screen and (max-width: 540px) {
        display: none;
      }
    }
  }

  .offices {
    width: 100%;
    margin-bottom: 40px;
    position: relative;
    min-height: 533px;

    .bgImg {
      background: url(${map.src});
      width: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      left: 50%;
      bottom: 0;
      right: 0;
      transform: translateX(-50%);
      z-index: -1;
    }

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
      flex-shrink: 0;

      img {
        width: 100%;
        display: block;
        height: auto;
      }
    }
    .address {
      display: flex;
      position: absolute;
      gap: 25px;

      .address-text {
        width: 100%;
        max-width: 160px;
        flex-grow: 1;

        span {
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

    @media screen and (max-width: 1399px) {
      .USA {
        top: 49px;
        left: 150px;
      }
      .PAK {
        top: 15px;
        right: 200px;
      }
      .LHR {
        right: 65px;
        bottom: 135px;
      }
    }
    @media screen and (max-width: 1199px) {
      .img-box {
        width: 75px;
      }
      .UK {
        left: 225px;
        bottom: 70px;
      }
      .USA {
        top: 49px;
        left: 120px;
      }
      .PAK {
        top: 15px;
        right: 72px;
      }
      .LHR {
        right: 100px;
        bottom: 173px;
      }

      .address .address-text span {
        font-size: 28px;
      }
      .address .address-text {
        width: 239px;
      }
      .address .address-text p {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 991px) {
      .UK {
        left: 170px;
        bottom: 75px;
      }
      .USA {
        top: 49px;
        left: 55px;
      }
      .PAK {
        top: 15px;
        right: 72px;
      }
      .LHR {
        right: 3px;
        bottom: 170px;
      }
    }

    @media screen and (max-width: 767px) {
      .img-box {
        width: 65.29px;
      }

      padding: 0px 15px;

      .address {
        gap: 15px;
      }
      .UK {
        left: 111px;
        bottom: 97px;
      }
      .USA {
        top: 49px;
        left: 30px;
      }
      .PAK {
        top: 15px;
        right: 20px;
      }
      .LHR {
        right: 3px;
        bottom: 206px;
      }
    }
    @media screen and (max-width: 575px) {
      .address {
        position: static;
        margin-bottom: 30px;
      }

      .UK {
        left: 18px;
        bottom: 270px;
      }
      .USA {
        top: 0;
        left: 134px;
        justify-content: flex-end;
      }
      .PAK {
        top: 265px;
        right: -12px;
        justify-content: flex-end;
      }
      .LHR {
        right: 115px;
        bottom: 45px;
      }
    }
  }
`;
