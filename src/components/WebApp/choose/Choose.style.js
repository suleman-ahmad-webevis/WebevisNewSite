import styled from "styled-components";
import tick from "../../../../public/assets/images/webApp/tick.png";

export const ChooseSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0;
  h2 {
    width: 74%;
    margin: auto;
    color: #424954;
    font-size: 45px;
    font-style: normal;
    margin-bottom: 50px;
    font-weight: 600;
    text-align: center;
    line-height: 150%;
    text-transform: capitalize;
 @media screen and (max-width:991px) {
  width: 100%;
  font-size: 35px;
  
 }
 @media screen and (max-width:574px) {
  font-size: 28px;
  
 }
  }
  .main_choose {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }
    width: 100%;
    gap: 40px;
    .choose_list {
      flex-basis: 40%;
      ul {
        li {
          list-style: none;
          position: relative;
          max-width: 611px;
          &::before {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            top: 13px;
            background-image: url(${tick.src});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            @media screen and (max-width: 767px) {
              width: 16.7px;
            height: 16.7px;
            top: 7px;
            }
          }
          span {
            color: #434956;
            font-size: 28px;
            display: inline-block;
            padding-left: 30px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            text-transform: lowercase;
            @media screen and (max-width: 1300px) {
              font-size: 24px;
            }
            @media screen and (max-width: 1200px) {
              font-size: 21px;
            }
            @media screen and (max-width: 1023px) {
              font-size: 24px;
            }
            @media screen and (max-width: 767px) {
              font-size: 18px;
            }
          }
        }
      }
    }
    .choose_image {
      flex-basis: 60%;

      img {
        width: 100%;
        @media screen and (max-width: 767px) {
          height: auto;
            }
      }
    }
  }
`;
