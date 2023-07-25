import styled from "styled-components";
export const BlogDetailHolder = styled.section`
  padding-top: 60px;
  .flex {
    display: flex;
    align-items: start;
    gap: 30px;
  }
`;

export const BlogDetail = styled.div`
  max-width: 900px;
  padding-bottom: 70px;
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    color: #434956;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }
`;
export const ImageHolder = styled.div`
  margin-bottom: 20px;
  img {
    width: 100%;
    display: block;
    border-radius: 15px;
    margin: 0 auto;
  }
`;
export const PersonHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 40px;
  .IconHolder {
    display: flex;
    align-items: center;
    gap: 5px;
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
`;
export const TagsHolder = styled.div`
  max-width: 863px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Tags {
    display: flex;
    align-items: center;
    gap: 15px;
    span {
      color: #2b2c2f;
      font-size: 24px;
      font-weight: 400;
    }
  }
  .Buttons {
    display: flex;
    gap: 15px;
    button {
      background-color: #d9d9d9;
      transition: 0.4s;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      &:hover,
      .active {
        background-color: #28b781;
        color: #fff;
      }
    }
  }
`;
export const WidgetsHolder = styled.div`
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
