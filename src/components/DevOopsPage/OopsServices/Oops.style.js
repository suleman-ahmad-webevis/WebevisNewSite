import styled from "styled-components";
import triangle from "../../../../public/assets/images/DevOopsPage/triangle.png";
export const OopSec = styled.div`
  margin: 100px 0;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
  }

  .main_parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media screen and (max-width: 1106px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .oop {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 50px;
      .image {
        background-image: url(${triangle.src});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 70px;
        img {
          width: 76px;
          height: 76px;
          object-fit: contain;
        }
      }
      h3 {
        color: #434956;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
      }
    }
  }
`;
