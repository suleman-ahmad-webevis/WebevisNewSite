import styled from "styled-components";
export const Recent = styled.section`
  background-color: #2b2c2f;
  padding: 30px;
  color: #fff;
  width: 413px;
  border-radius: 13px;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    max-width: calc(390px + (413 - 390) * (100vw - 390px) / (1440 - 390));
  }
  &:nth-last-child(1) {
    margin-bottom: 0;
    @media screen and (max-width: 1440px) {
      margin-bottom: 60px;
    }
  }
  h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .Latest-Post {
    display: flex;
    gap: 13px;
    padding-bottom: 20px;
    &:nth-last-child(1) {
      padding-bottom: 0;
    }
    h4 {
      font-weight: 500;
    }
    .img-holder {
      img {
        border-radius: 10px;
        box-shadow: 0px 0px 4px 0px #28b781;
        display: block;
      }
    }
    .profile-Pic {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 5px;
    }
  }
  .li-list {
    li {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
      .Image {
        width: 35px;
        height: 35px;
        background-color: #fff;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
    }
  }
`;
export const BlogButton = styled.div`
  width: 100%;
  padding: 14px 0 14px 15px;
  text-align: start;
  border-radius: 7px;
  color: #fff;
  margin-bottom: 10px;
  background-color: #2b2c2f;
  transition: 1s;
  background: ${({ bg }) => (bg ? bg : "")};
  cursor: pointer;
  &:hover,
  .active {
    background: var(
      --linear,
      linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%)
    );
  }
`;
export const TagButtonHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
export const TagButton = styled.div`
  padding: 14px 20px;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
  border-radius: 32px;
  background: #a1a1a1;
  transition: 1s;
  background: ${({ bg }) => (bg ? bg : "")};
  cursor: pointer;
  &:hover,
  .active {
    background: var(
      --linear,
      linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%)
    );
  }
`;
