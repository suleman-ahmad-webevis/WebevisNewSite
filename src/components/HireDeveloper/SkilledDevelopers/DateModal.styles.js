import styled from "styled-components";
import Bg from "../../../assets/images/HireDeveloper/thankYouBg.svg";

export const DateHolder = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  .react-calendar__month-view__weekdays__weekday {
    color: red; /* Change the color as desired */
    text-decoration: none;
  }
  .full-width-calendar {
    width: 100%;
  }

  h2 {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: start;
  }
  .Content {
    border-right: 1px solid #d9d9d9;
    width: 40%;
  }
  .image-holder {
    padding: 50px;
    border-bottom: 1px solid #d9d9d9;
  }
  .company-content {
    padding: 40px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    text-align: start;
    .span {
      color: #a1a1a1;
      margin-bottom: 10px;
    }

    ul {
      margin-bottom: 20px;
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: #898989;
        &:nth-last-child(1) {
          align-items: start;
          margin-bottom: 0;
        }
      }
    }
    p {
      color: #434956;
      margin-bottom: 70px;
    }
  }
  .Cookie {
    display: flex;
    align-items: center;
    span {
      color: #28b781;
      font-size: 16px;
      line-height: 18px;
      border-right: 1px solid #898989;
      padding-right: 10px;
      &:nth-last-child(1) {
        border-right: 0;
        padding-left: 10px;
      }
    }
  }
  .Calendar {
    width: 100%;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;

    .calendar-body {
      display: flex;

      .custom-calendar {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        button {
          box-shadow: none;
        }
        .rdrDayStartPreview,
        .rdrDayEndPreview {
          color: #28b781 !important;
        }
        .rdrDayToday .rdrDayNumber span:after {
          background: #28b781 !important;
        }
        .rdrMonth {
          width: 100%;
          font-size: 16px;

          color: #a1a1a1;
          font-weight: 500;
          line-height: 20px;
        }

        .rdrSelected {
          background-color: var(--primary, #28b781);
          left: 1px;
          right: 1px;
          top: 3px;
          bottom: 3px;
        }
        .rdrWeekDay {
          color: var(--secondary, #434956);

          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .rdrMonthAndYearPickers {
          color: var(--secondary, #434956);

          font-size: 18px;
          font-weight: 400;
          line-height: 22px;
        }
      }
      .custom-calendar-inner {
        .custom-calendar-nav-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
        }

        .next {
          margin-left: auto;
        }

        .prev {
          margin-right: auto;
        }
      }
      .custom-calendar-inner .rdrNextPrevButton {
        background-color: transparent;
        color: #000;
        font-size: 20px;
      }
    }
  }

  .CalendarForm {
    width: 36%;
    margin: auto 50px;
    text-align: left;
    form {
      width: 100%;
    }
    .required {
      color: red;
      margin-left: 4px;
    }
    button {
      width: 100%;
      margin-top: 10px;
    }

    h2 {
      color: var(--secondary, #434956);

      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      margin-bottom: 10px;

      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      color: var(--banner-colour, #2b2c2f);
      font-variant-numeric: lining-nums proportional-nums;

      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 40px;
      width: 100%;
    }

    .form-group {
      margin-bottom: 15px;
    }
    .input-wrap {
      display: flex;
      align-items: center;
      gap: 20px;
      .fields {
        width: 48%;
      }
    }

    .fields {
      width: 100%;
      margin-bottom: 5px;
      /* max-width: 255px; */
    }

    label {
      color: var(--secondary, #434956);
      font-variant-numeric: lining-nums proportional-nums;

      font-size: 17.606px;
      font-weight: 500;
      line-height: 30px;
    }

    input,
    textarea {
      padding: 13px;
      /* border: 1px solid #ccc; */
      border-radius: 6.847px;
      font-size: 15.65px;
      border: 2px solid #e3e3e3;
      width: 100%;
      ::placeholder {
        color: #cdcfd2;
        font-variant-numeric: lining-nums proportional-nums;

        font-size: 15.65px;
        font-weight: 500;
        line-height: normal;
      }
    }
    input:focus {
      border: 1px solid var(--primary, #28b781);
      outline: none;
      background: #fff;
    }
    .error {
      color: red;
      font-size: 14px;
      margin-top: 5px;
      display: none;
    }

    #description {
      /* width: 540px; */
      height: 105px;
      width: 100%;
      flex-shrink: 0;
      :focus {
        border: 1px solid var(--primary, #28b781);
        outline: none;
        background: #fff;
      }
    }
    button[type="submit"] {
      background-color: #007bff;
      width: 165px;
      color: white;
      height: 40px;
      /* padding: 10px 15px; */
      border: none;
      border-radius: 85px;
      cursor: pointer;
    }

    @media screen and (max-width: 390px) {
      padding: 20px 25px;
      min-height: 521px;

      p {
        font-size: 14px;
        margin-bottom: 20px;
      }
      label {
        font-size: 16px;
      }

      input,
      textarea {
        font-size: 14px;
      }
    }
  }
`;

export const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Bg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  height: 675px;
  .Content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
      color: var(--primary, #28b781);
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      font-family: "Fredoka", sans-serif;

      font-style: normal;
      font-size: 82.021px;
      font-weight: 600;
      line-height: 86px;
      span {
        color: var(--banner-colour, #2b2c2f);
        font-family: "Fredoka", sans-serif;
      }
    }
    p {
      color: var(--secondary, #434956);
      text-align: center;

      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;

export const TimeHolder = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  .time-slots {
    max-height: 340px;
    overflow-y: auto;
  }
  h1 {
    color: var(--secondary, #434956);

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    li {
      color: var(--primary, #28b781);

      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      border: 1px solid var(--primary, #28b781);
      padding: 10px;
      width: 100%;
      max-width: 125px;
      cursor: pointer;
    }
  }

  p {
    color: red;
  }

  .time-slot {
    color: #898989;
    border: 1px solid #898989;
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
  }

  .time-slot.selected {
    color: var(--primary, #28b781);
    border-color: var(--primary, #28b781);
  }
`;
