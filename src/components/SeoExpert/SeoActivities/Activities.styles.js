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
  }
  p {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 40px;
  }
`;
export const TabHolder = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
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
  background-size: cover;
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
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }
`;
