import styled from "styled-components";
export const CommentHolder = styled.section`
  padding-top: 60px;
`;
export const Comment = styled.div`
  max-width: 863px;
  padding-bottom: 50px;
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  .commentPost {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
    @media screen and (max-width: 575px) {
      align-items: start;
    }
    border-bottom: 1px solid #d9d9d9;
    &:nth-last-child(2) {
      padding-top: 0;
    }
    .Post-Holder {
      width: 100%;
      p {
        color: #434956;
        font-size: 18px;
        font-weight: 400;
        max-width: 670px;
        @media screen and (max-width: 1440px) {
          font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
        }
      }
    }
    .Post {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        color: #434956;
        font-size: 28px;
        line-height: 28px;
        font-weight: 600;
        @media screen and (max-width: 1440px) {
          font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
        }
      }
    }
  }

  .Comments-Skeleton {
    width: 100%;
    height: 20px;
  }
`;
export const ImageHolder = styled.div``;
export const LeaveComment = styled.div`
  max-width: 863px;
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    input,
    textarea {
      color: #898989;
      font-size: 18px;
      font-weight: 500;
      border-radius: 3px;
      background: #f1f1f1;
      outline: none;
      border: none;
    }
    input {
      width: 100%;
      max-width: 420px;
      padding: 23px 0 23px 15px;
      @media screen and (max-width: 991px) {
        max-width: initial;
      }
    }
    textarea {
      padding: 23px 0 0 15px;
      width: 100%;
      resize: none;
    }
  }
`;
