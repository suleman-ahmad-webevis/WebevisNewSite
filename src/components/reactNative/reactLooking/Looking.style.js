import styled from "styled-components";
import look from "../../../../public/assets/images/ReactNative/look.png";
export const LookSec = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .look_text {
    display: flex;
  align-items: center;
  flex-direction: column;
    h2 {
      color: #434956;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .looking_card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .card {
      background-image: url(${look.src});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      
      .text {
        h3 {
          color: #fff;
          font-size: 35px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
      .image {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
