import styled from "styled-components";
import BG from "../../assets/images/Hire/Hire-bg.png"

export const Expert = styled.div`
  padding: 60px 0 60px 0;
  background: url(${BG.src});
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 992px){
    padding: 80px 0 100px 0;
  }
  h2 {
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    color: #424954;
  }
  p {
    text-align: center;
    color: #424954;
  }
`;
export const Pictures = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    max-width: 300px;
    height: 350px;
    @media screen and (min-width: 992px){
      max-width: 400px;
      height: auto;
    } 
    @media screen and (min-width: 1400px) {
      max-width: initial;
    }
  }
  button {
    background: #d9d9d9;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #959a8d;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 20px;
    transition: 0.5s;
    &:hover {
      color: #fff;
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    }
    @media screen and (min-width: 1400px) {
      margin-bottom: 40px;
      margin-top: 40px;
    }
    .material-symbols-outlined {
      font-size: 25px;
      font-weight: 700;
    }
  }
`;
