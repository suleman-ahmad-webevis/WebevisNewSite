// import styled from "styled-components";
// export const ClientSec = styled.div`
//   text-align: center;
//   width: 95%;
//   margin: 3rem auto 3rem auto;
//   box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.14);
//   border-radius: 21px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 2rem;
//   padding: 2rem 0;
//   h1 {
//     margin: 0;
//     font-weight: 700;
//     font-size: 45px;
//     line-height: 150%;
//     color: #424954;
//   }
//   @media screen and (max-width: 970px) {
//     width: 100%;
//     h1 {
//       width: 80%;
//       font-size: 40px;
//     }
//   }
//   @media screen and (max-width: 650px) {
//     h1 {
//       width: 90%;
//       font-size: 30px;
//     }
//   }
// `;
// export const ClientBrand = styled.div`
//   width: 90%;
//   margin: auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 1.5rem;
//   @media screen and (max-width: 520px) {
//     gap: 10px;
//   }
//   img {
//     display: inline-block;
//     vertical-align: top;
//     width: 20%;
//     aspect-ratio: 1/1;
//     /* height: auto; */
//     object-fit: contain;
//     @media screen and (max-width: 730px) {
//       &:nth-child(1) {
//         display: none;
//       }
//     }
//     @media screen and (max-width: 520px) {
//       &:nth-child(3) {
//         display: none;
//       }
//     }
//   }
// `;
import styled from "styled-components";
import Image from "next/image";

export const Trust = styled.div`
  background: #eaf7ee;
  padding: 30px 0;
  margin: 10px 0;
  @media screen and (max-width: 870px) {
    padding: 0px 0;
    margin: 0px 0;
  }
  h2 {
    font-size: 45px;
    font-weight: 600;
    text-align: center;
    color: #424954;
    margin-bottom: 55px;
    @media screen and (min-width: 768px) {
    }
  }

  .slick-slider {
    width: 100%;
  }
  .carousel-slider {
    transition: transform 1s ease-in-out;
  }

  .carousel-slider.playing {
    transition: none;
  }
  .slick-track {
    display: flex;
    align-items: center;
    gap: 70px;
    /* width: calc(150px * 12); */
    animation: scroll 20s linear infinite;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1200px);
    }
  }
`;
export const SliderImage = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
  object-fit: contain;
`;