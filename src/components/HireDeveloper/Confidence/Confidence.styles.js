import styled from "styled-components";
export const ConfidenceHolder = styled.section`
  padding: 100px 0;
`;
export const Confident = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ImageHolder = styled.div`
  max-width: 487px;
`;
export const Discription = styled.div`
  /* max-width: 476px; */
  width: 50%;
  h2 {
    color: #434956;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    color: #434956;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
    max-width: 476px;
  }
  .butn {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 50px;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    .White-btn {
      border-radius: 12px;
      background: #fff;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
      padding: 13px 35px 13px 20px;
    }
    .Green-btn {
      border-radius: 12px;
      background: var(--new, linear-gradient(135deg, #28b781 0%, #cfef00 100%));
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
      padding: 13px 20px;
      color: #fff;
      margin-left: -15px;
    }
  }
`;
