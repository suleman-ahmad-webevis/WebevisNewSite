import styled from "styled-components";

export const TrafficSec = styled.div`
  padding: 10px 30px;
  background: #424954;

  .container-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #424954;
    gap: 2rem;
    @media screen and (max-width: 1125px) {
      flex-direction: column-reverse;
    }
    @media screen and (max-width: 791px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 697px) {
    padding: 20px;
  }
`;
export const Booster = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* gap: 10px; */
  img {
    max-width: 100%;
    height: auto;
    display: flex;
    /* align-items: flex-start;
    justify-content: flex-start; */
    @media screen and (max-width: 697px) {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 1125px) {
    width: 90%;
    margin: 0 auto;
  }
  /* @media screen and (max-width: 749px) {
    width: 95%;
    margin: 0 auto;
  } */
  @media screen and (max-width: 705px) {
    flex-direction: column;
  }
  @media screen and (max-width: 705px) {
    width: 98%;
  }
`;

export const BoostItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
export const BoostText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }
    @media screen and (max-width: 791px) {
      font-size: 16px;
    }
    @media screen and (max-width: 705px) {
      font-size: 20px;
    }
  }
`;
export const BoostCircul = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ color }) => (color ? color : "#03F69B")};
  border-radius: 50%;
`;
export const TrafficText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  @media screen and (max-width: 1125px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-width: 905px) {
    align-items: center;
    .center {
      text-align: center;
    }
  }
  @media screen and (max-width: 500px) {
    width: 98%;
  }
  @media screen and (max-width: 360px) {
    .center {
      text-align: center;
    }
  }
  /* @media screen and (max-width: 905px) {
    text-align: center;
  } */
  h2 {
    font-family: "GT Haptik", "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(22px + (45 - 22) * (100vw - 320px) / (1440 - 320));
    }
    /* @media screen and (max-width: 1400px) {
      font-size: 40px;
    }
    @media screen and (max-width: 1168px) {
      font-size: 35px;
    }
    @media screen and (max-width: 1168px) {
      font-size: 35px;
    }
    @media screen and (max-width: 1125px) {
      font-size: 40px;
    }
    @media screen and (max-width: 516px) {
      font-size: 28px;
    }
    @media screen and (max-width: 360px) {
      font-size: 22px;
    } */
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 320px) / (1440 - 320));
    }
    /* @media screen and (max-width: 1400px) {
      font-size: 24px;
    }
    @media screen and (max-width: 1168px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1125px) {
      font-size: 24px;
    }
    @media screen and (max-width: 516px) {
      font-size: 18px;
    } */
  }
`;
export const TrafficOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;
export const OptionIcon = styled.div`
  padding: 8px;
  width: 62px;
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  border-radius: 11.625px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  @media screen and (max-width: 500px) {
    padding: 5px;
  }
`;
export const OptionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-family: "GT Haptik", "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 320px) / (1440 - 320));
    }
    /* @media screen and (max-width: 1400px) {
      font-size: 22px;
    }
    @media screen and (max-width: 1168px) {
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      font-size: 17px;
    } */
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 320px) / (1440 - 320));
    }
    /* @media screen and (max-width: 1168px) {
      font-size: 16px;
    }
    @media screen and (max-width: 500px) {
      font-size: 14px;
    } */
  }
`;
