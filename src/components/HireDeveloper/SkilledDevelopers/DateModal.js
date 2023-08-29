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
// import { Container } from "src/components/Container.styles";
// import {
//   Message,
//   MessageContainer,
// } from "../../ContactUs/MessageUs/MessageUs.styles";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomCalendarNavButtons = ({ onClick, label }) => {
  return (
    <button className={`custom-calendar-nav-button ${label}`} onClick={onClick}>
      {label === "next" ? <FaChevronRight /> : <FaChevronLeft />}
    </button>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .max(25, "Name must not exceed 25 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  guestEmails: Yup.array().of(Yup.string().email("Invalid email format")),
  description: Yup.string().max(200, "Details must not exceed 200 characters"),
});

const initialValues = {
  name: "",
  email: "",
  guestEmails: [""],
  description: "",
};

const DateModal = (props) => {
  const [date, setDate] = useState(new Date());
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showCalendarForm, setShowCalendarForm] = useState(false);

  const handleNextClick = () => {
    setShowCalendarForm(true);
  };

  const onChange = (date) => {
    setDate(date);
  };
  const [selectdate, setSelectDate] = useState(new Date());
  const handleSelect = (date) => {
    console.log("dada", date);
    setSelectDate(date);
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
              <h2>Schedule a Consultation {props.title}</h2>
              <ul>
                <li>
                  <BsClock size="20px" />
                  30m
                </li>
                <li>
                  <GoDeviceCameraVideo size="30px" />
                  Web conferencing details provided upon confirmation.
                </li>
              </ul>
              <p>Book a call to catch up with our solutions experts.</p>
              <div className="Cookie">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
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
                  <TimeFilters selectDate={selectdate} />
                </div>
                <TimezoneList />
              </div>
              <PrimaryButton
                shadowH="none"
                width="165"
                minWidth="165"
                height="40"
                size="24"
                minsize="16"
                weight="500"
                radius="9px"
                type="submit"
                onClick={handleNextClick}
                style={{
                  marginTop: "20px",
                  width: "165px",
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
                <ToastContainer />

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="fields">
                        <label htmlFor="name">
                          Name<span className="required">*</span>
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Adam Mack"
                          maxLength={25}
                          className={
                            errors.name && touched.name ? "error-border" : ""
                          }
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
                          placeholder="Adam@webevis.com"
                          className={
                            errors.email && touched.email ? "error-border" : ""
                          }
                        />
                      </div>
                      <div className="fields">
                        <label>Guest Emails</label>
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
                        <ErrorMessage
                          name="guestEmails"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="fields">
                        <label htmlFor="description">
                          Share other important details
                        </label>
                        <Field
                          as="textarea"
                          id="description"
                          name="description"
                          maxLength={200} // Corrected attribute name
                          placeholder="Please share anything that will help prepare for our meeting."
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
                          onClick={() => {
                            if (Object.keys(errors).length > 0) {
                              Object.values(errors).forEach((errorMessage) => {
                                toast.error(errorMessage);
                              });
                            } else {
                              handleSubmit();
                            }
                          }}
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
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </DateHolder>
      ) : (
        <ThankYou />
      )}
    </>
  );
};

export default DateModal;
