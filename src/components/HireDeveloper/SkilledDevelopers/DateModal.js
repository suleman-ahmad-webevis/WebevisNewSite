import React, { useState } from "react";
// import Calendar from "react-calendar";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import Image from "next/image";
import Logo from "../../../assets/images/HireDeveloper/Modal-Logo.png";
import { BsClock } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { DateHolder, CalendarForm } from "./DateModal.styles";
import { Container } from "src/components/Container.styles";
import {
  Message,
  MessageContainer,
} from "../../ContactUs/MessageUs/MessageUs.styles";
import { PrimaryButton } from "src/components/Button.styles";

import "react-calendar/dist/Calendar.css";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import EmailTagInput from "./EmailTagInput";
import TimeFilters from "./TimeFilters";
import TimezoneList from "./TimezoneList";
import ThankYou from "./ThankYou";
import { IoIosArrowBack } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomCalendarNavButtons = ({ onClick, label }) => {
  return (
    <button className={`custom-calendar-nav-button ${label}`} onClick={onClick}>
      {label === "next" ? <FaChevronRight /> : <FaChevronLeft />}
    </button>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  guestEmails: Yup.array().of(Yup.string().email("Invalid email format")),
  description: Yup.string()
    .required("Description is required")
    .test(
      "wordCount",
      "Description must be less than or equal to 200 words",
      (value) => {
        if (!value) return true;

        const wordCount = value.trim().split(/\s+/).length;
        return wordCount <= 200;
      }
    ),
});

const initialValues = {
  name: "",
  email: "",
  guestEmails: [""],
  description: "",
};

const DateModal = () => {
  const [date, setDate] = useState(new Date());
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showCalendarForm, setShowCalendarForm] = useState(false);
  const [showTimezoneList, setShowTimezoneList] = useState(false);

  const handleNextClick = () => {
    setShowCalendarForm(true);
  };

  const onChange = (date) => {
    setDate(date);
  };
  const [selectdate, setSelectDate] = useState();
  const handleSelect = (date) => {
    console.log("dada", date);
    setSelectDate(date);
    setShowTimezoneList(true);
  };

  const handleSubmit = (values) => {
    console.log(values);

    setIsFormSubmitted(true);
  };

  return (
    <>
      {!isFormSubmitted ? (
        <DateHolder>
          <div className="Content">
            <div className="image-holder">
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="company-content">
              <div className="span">
                <span>Company Webevis</span>
              </div>
              <h2>Schedule a Consultation Dedicated Developers</h2>
              <ul>
                <li>
                  <BsClock size="20px" />
                  15m
                </li>
                <li>
                  <GoDeviceCameraVideo size="30px" />
                  Web conferencing details provided upon confirmation.
                </li>
              </ul>
              <p>Book a call to catch up with our solutions experts.</p>
              <div className="Cookie">
                <span>Cookie Settings</span>
                <span>Report Abuse</span>
              </div>
            </div>
          </div>
          {!showCalendarForm && (
            <div className="Calendar">
              <h2>Select a Date & Time</h2>
              <div className="calendar-body">
                <div className="custom-calendar">
                  <Calendar
                    date={selectdate}
                    onChange={handleSelect}
                    minDate={new Date()}
                    showMonthAndYearPickers={false}
                    className="custom-calendar-inner"
                    renderNavNext={(onClick) => (
                      <CustomCalendarNavButtons
                        onClick={onClick}
                        label="next"
                      />
                    )}
                    renderNavPrev={(onClick) => (
                      <CustomCalendarNavButtons
                        onClick={onClick}
                        label="prev"
                      />
                    )}
                  />
                  {showTimezoneList && <TimeFilters selectDate={selectdate} />}
                </div>
                <TimezoneList />
              </div>

              <PrimaryButton
                shadowH="none"
                width="165"
                height="40"
                size="24"
                minsize="16"
                weight="500"
                radius="9px"
                type="submit"
                onClick={handleNextClick}
                style={{
                  marginTop: "20px",
                }}
              >
                Next
              </PrimaryButton>
            </div>
          )}
          {showCalendarForm && (
            <div className="CalendarForm">
              <>
                <h2>We`d love to hear about your Idea!</h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, handleChange }) => (
                    <Form>
                      <div className="fields">
                        <label htmlFor="name">
                          Name<span className="required">*</span>
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Ahmad"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="fields">
                        <label htmlFor="email">
                          Email<span className="required">*</span>
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Ahmad@gmail.com"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="fields">
                        <label>
                          Guest Emails<span className="required">*</span>
                        </label>
                        <Field
                          name="guestEmails"
                          render={({ field }) => (
                            <EmailTagInput
                              tags={field.value}
                              handleTagsChange={(newTags) => {
                                const event = {
                                  target: {
                                    name: "guestEmails",
                                    value: newTags,
                                  },
                                };
                                field.onChange(event);
                              }}
                            />
                          )}
                        />
                      </div>
                      <div className="fields">
                        <label htmlFor="description">
                          Description<span className="required">*</span>
                        </label>
                        <Field
                          as="textarea"
                          id="description"
                          name="description"
                          placeholder="Lorem ipsum dolor sit amet consectetur. 
                  Malesuada dictum risus lorem
                  quam faucibus egestas. "
                        />
                        <ErrorMessage
                          name="description"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="submit-button">
                        <PrimaryButton
                          shadowH="none"
                          width="115px"
                          minWidth="50"
                          size="22"
                          minsize="16"
                          weight="700"
                          radius="3px"
                          type="submit"
                        >
                          Submit
                        </PrimaryButton>
                      </div>
                    </Form>
                  )}
                </Formik>
              </>
            </div>
          )}
          <div className="Cookie-footer">
            <span>Cookie Settings</span>
            <span>Report Abuse</span>
          </div>
        </DateHolder>
      ) : (
        <ThankYou />
      )}
    </>
  );
};

export default DateModal;
