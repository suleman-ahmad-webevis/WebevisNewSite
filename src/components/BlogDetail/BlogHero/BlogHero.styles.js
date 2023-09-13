import styled from "styled-components";
export const BlogDetailHolder = styled.section`
  padding-top: 60px;
  .flex {
    display: flex;
    align-items: start;
    gap: 30px;
    @media screen and (max-width: 991px) {
      display: block;
    }
  }
`;

export const BlogDetail = styled.div`
  max-width: 900px;
  padding-bottom: 70px;
  overflow: hidden;
  h2 {
    color: #424954;
    font-size: 40px;
    line-height: 45px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Content {
    margin-bottom: 60px;
  }

  .Content-Skeleton {
    width: 100%;
    height: 20px;
    margin-top: 20px;
  }
  p {
    color: #434956;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (30 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Title-Skeleton {
    width: 100%;
    height: 60px;
  }
`;
export const ImageHolder = styled.div`
  margin-bottom: 20px;
  max-width: 900px;
  @media screen and (max-width: 1440px) {
    max-width: calc(560px + (900 - 560) * (100vw - 390px) / (1440 - 390));
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
    margin: 0 auto;
  }
  .BlogDetail-Img-Skeleton {
    height: 400px;
    width: 900px;
    @media screen and (max-width: 1440px) {
      width: calc(350px + (900 - 350) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const PersonHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 40px;
  font-size: 18px;
  @media screen and (max-width: 1440px) {
    font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
  }
  .IconHolder {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .Person-Skeleton {
    width: 30px;
    height: 30px;
  }
  .Person {
    background-color: rgba(40, 183, 129, 1);
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Author-Skeleton {
    width: 80px;
    height: 10px;
  }
`;
export const TagsHolder = styled.div`
  max-width: 863px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .Tags {
    display: flex;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
    span {
      color: #2b2c2f;
      font-size: 24px;
      font-weight: 400;
    }
  }
  .Buttons {
    display: flex;
    gap: 15px;
    a {
      background-color: #d9d9d9;
      transition: 0.4s;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #434956;
      &:hover,
      .active {
        background-color: #28b781;
        color: #fff;
      }
    }
  }
`;
export const WidgetsHolder = styled.div`
  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Search {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 13px;
    background: var(
      --linear,
      linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%)
    );
    margin-bottom: 20px;

    padding: 15px 30px;
    input {
      max-width: 350px;
      background: none;
      color: #fff;
      outline: none;
      font-size: 18px;
      font-weight: 600;
      ::placeholder {
        color: #fff;
      }
    }
  }
`;
