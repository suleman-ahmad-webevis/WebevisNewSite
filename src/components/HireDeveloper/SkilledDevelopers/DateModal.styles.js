import styled from "styled-components";
import Bg from "../../../assets/images/HireDeveloper/thankYouBg.svg";
import globe from "../../../assets/images/HireDeveloper/globe.png";

export const DateHolder = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    padding: 10px;
  }
  .react-calendar__month-view__weekdays__weekday {
    color: red;
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
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 580px) {
      margin-bottom: 10px;
    }
  }
  .Content {
    border-right: 1px solid #d9d9d9;
    width: 40%;
    @media screen and (max-width: 580px) {
      width: 100%;
      border: none;
    }
  }
  .image-holder {
    padding: 50px;
    border-bottom: 1px solid #d9d9d9;
    @media screen and (max-width: 580px) {
      padding: 10px 0px;
      text-align: left;
    }
    img {
      @media screen and (max-width: 820px) {
        width: 185px;
        height: 50.598px;
      }
    }
  }
  .company-content {
    padding: 40px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    text-align: start;
    @media screen and (max-width: 580px) {
      padding: 15px 0px;
      border-bottom: 1px solid #d9d9d9;
    }
    .span {
      color: #a1a1a1;
      margin-bottom: 10px;
      @media screen and (max-width: 580px) {
        font-size: 16px;
      }
    }

    ul {
      margin-bottom: 20px;
      @media screen and (max-width: 580px) {
        margin-bottom: 10px;
      }
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: #898989;
        @media screen and (max-width: 580px) {
          font-size: 16px;
        }
        &:nth-last-child(1) {
          align-items: start;
          margin-bottom: 0;
        }
      }
    }
    p {
      color: #434956;
      margin-bottom: 70px;
      @media screen and (max-width: 580px) {
        margin-bottom: 15px;
        font-size: 16px;
      }
    }
  }
  .Cookie {
    display: flex;
    align-items: center;
    @media screen and (max-width: 580px) {
      display: none;
    }
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
  .Cookie-footer {
    display: none;
    align-items: center;
    bottom: 0;
    @media screen and (max-width: 580px) {
      display: flex;
      margin: 10px 0px;
    }
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
    @media screen and (max-width: 580px) {
      padding: 20px 0px;
      h2 {
        text-align: center;
      }
    }

    .calendar-body {
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 580px) {
        width: 100%;
        flex-wrap: wrap;
      }
      .custom-calendar {
        width: 100%;
        display: flex;
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
        .rdrCalendarWrapper {
          /* width: 70%; */
          flex-grow: 1;
        }
        @media screen and (max-width: 580px) {
          flex-direction: column;
          max-width: none;
          margin-bottom: 20px;
          .rdrCalendarWrapper {
            width: 100%;
          }
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
    @media screen and (max-width: 580px) {
      width: 100%;
      margin: 20px 0px 10px 0px;
    }
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
    @media screen and (max-width: 580px) {
      .submit-button {
        text-align: center;
      }
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
      min-width: 165px;
      color: white;
      height: 40px;
      border: none;
      border-radius: 85px;
      cursor: pointer;
      @media screen and (max-width: 580px) {
        border-radius: 7px;
        font-size: 18px;
        width: 189px;
      }
    }

    @media screen and (max-width: 390px) {
      padding: 20px 0px;
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
  @media screen and (max-width: 580px) {
    height: 500px;
    padding: 0px 20px;
  }
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
      @media screen and (max-width: 580px) {
        font-size: 36px;
      }
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
      @media screen and (max-width: 580px) {
        font-size: 15px;
      }
    }
  }
`;

export const TimeHolder = styled.div`
  width: 30%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 580px) {
    width: 100%;
    text-align: left;
  }

  .time-slots {
    max-height: 340px;
    overflow-y: auto;
    @media screen and (max-width: 580px) {
      flex-direction: row;
      gap: 10px;
    }
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
    @media screen and (max-width: 580px) {
      padding: 4px 30.3px;
      margin: 0px 0px 10px 0px;
    }
  }

  .time-slot.selected {
    color: var(--primary, #28b781);
    border-color: var(--primary, #28b781);
  }
`;

export const TimeZone = styled.div`
  width: 100%;
  text-align: left;
  .select-dropdown {
    width: 100%;
    max-width: 380px;
    height: 33px;
    border-radius: 51px;
    background: #f4f4f4;
    color: #434956;
    font-family: "Outfit";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    border: none;
    margin-top: 10px;
    padding: 5px 23px;
    border-color: transparent;
    outline: none;
    background-image: url(${globe.src});
    background-repeat: no-repeat;
    background-position: left center;
    background-position-x: 6px;
    .caret {
      display: none;
    }

    @media screen and (max-width: 786px) {
      font-size: 15px;
    }
  }

  .select-option {
    padding: 5px 10px;
    background: #ffffff;
    margin-bottom: 50px;
  }
`;
