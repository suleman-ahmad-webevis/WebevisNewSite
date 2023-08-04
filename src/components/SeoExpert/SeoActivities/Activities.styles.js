import styled from "styled-components";
export const ActivityHolder = styled.section`
  padding: 100px 0 80px 0;
`;
export const Activity = styled.div`
  text-align: center;
  h2 {
    color: #434956;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(33px + (50 - 33) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const TabHolder = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    /* align-items: center; */
  }
  .Tab-content {
    max-width: 710px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    .content {
      display: flex;
      gap: 10px;
      text-align: start;
      color: #434956;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      .check-image {
        margin-top: 3px;
        flex-shrink: 0;
      }
    }
  }
`;
export const Tab = styled.div`
  height: 75px;
  width: 610px;
  background-image: url(${(props) => props.image.src});
  color: ${({ color }) => (color ? color : "")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0 11px 20px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  &:hover {
    background-image: url(${(props) => props.img.src});
    color: #fff;
  }
  @media screen and (max-width: 1440px) {
    width: calc(350px + (610 - 350) * (100vw - 390px) / (1440 - 390));
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (24 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Image-Icon {
    max-width: 25px;
    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;
