import styled from "styled-components";
import black1 from "../../semservices/assests/black1.png";
export const OfferSec = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OfferText = styled.div`
  width: 50%;
  margin: 0 auto 6rem auto;
  display: flex;
  flex-direction: column; 
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
  }
  @media screen and (max-width:1024px) {
    width: 100%;
    margin: auto;
   
  }
  @media screen  and (max-width:658px){
    h1{
      font-size: 39px;
    }
    p{
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
`;
export const OfferMain = styled.div`
  width: 90%;
  margin: auto;
  position: relative;
  display: flex;
  @media screen and (max-width:1024px){
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const OfferCard = styled.div`
  width: 33%;
  position: relative;
  background: #d9d9d9;
  border-radius: 48px;
  color: #2b2c2f;
  display: flex;
  flex-direction: column;
  transition: 0.5s all ease-in-out;
  margin-bottom: 5rem;

  /* &::before {
    content: "";
    background-image: url(${pol.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
    width: 120px;
    border: 10px solid white;
    border-radius: 50%;
  } */
  @media screen and (max-width:1024px){
    width: 57%;
  }
  @media screen and (max-width:658px){
    width: 100%;
    padding: 3px;
  }
  .img-2 {
    display: none;
  }
  hr {
    border: 0.8px solid #a1a1a1;
    width: 90%;
    margin: auto;
  }
  &.active {
    background: url(${black1.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #d9d9d9;
    transform: scale(1.04);
    z-index: 1;
    .img-1 {
      display: block;
    }
    .img-2 {
      display: none;
    }
    button {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    }
  }
  &:hover {
    background: url(${black1.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #d9d9d9;
    transform: scale(1.04);
    z-index: 1;
    .img-1 {
      display: block;
    }
    .img-2 {
      display: none;
    }
    button {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    }
  }
`;
export const Border = styled.section`
 /* text-align: center; */
  /* height: 100px; */
  /* background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%); */
  /* border: 10px solid red; */
  /* box-shadow: 0px 2px 12px -1px rgba(0, 0, 0, 0.25); */
  /* object-fit: contain;
  border-radius: 100%;
  img {
    width: 110.18px;
height: 100.18px;
    object-fit: contain;
  } */
  /* &::before {
    content: "";
    border: 10px solid white;
    position: absolute;
    top: -80px;
    left: 130px;
    width: 135px;
      height: 110px;

border-radius: 65%;
border-top-right-radius: 50%;
border-start-end-radius: 50%;
border-end-start-radius: 100%;
     border-bottom-left-radius: 50%; 
     border-bottom-right-radius: 50%;
  } */
`;
export const OfferHead = styled.div`
  width: 90%;
  margin: 3rem auto 1rem auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
  }
  @media screen and (max-width:658px){
  margin: 4px;
 h1{
  font-size: 34px;
 }
}
`;
export const OfferTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  img {
    width: 78px;
    aspect-ratio: 1/1;
  }
  span {
    text-align: left;
    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 150%;
    }
    p {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
  }
`;
export const Offerbody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
  margin: 1.5rem auto;
`;

export const BodyText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
  }
`;
export const Button = styled.button`
  width: 95%;
  background: #bbbbbb;
  border-radius: 49px;
  border: none;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  transition: 0.5ms ease-in-out;
  margin: 2rem auto;
  height: 66px;
  &:hover {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  }
`;
