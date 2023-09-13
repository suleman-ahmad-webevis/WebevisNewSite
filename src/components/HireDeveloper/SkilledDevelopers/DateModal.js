import React, { useContext, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import Image from "next/image";
import Logo from "../../../assets/images/HireDeveloper/Modal-Logo.png";
import { BsClock } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { DateHolder, CalendarForm } from "./DateModal.styles";
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
import Toastify from "src/components/Modal/toastify/Toastify";
import { ToastContext } from "src/context/toastContext";
import Loader from "../../Loader/formLoader";

// const CustomCalendarNavButtons = ({ onClick, label }) => {
//   return (
//     <button className={`custom-calendar-nav-button ${label}`} onClick={onClick}>
//       {label === "next" ? <FaChevronRight /> : <FaChevronLeft />}
//     </button>
//   );
// };

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

const DateModal = ({ title, setModal, modal }) => {
  const [date, setDate] = useState(new Date());
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showCalendarForm, setShowCalendarForm] = useState(false);
  const [timeFiltersSelected, setTimeFiltersSelected] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { showToast } = useContext(ToastContext);

  const handleNextClick = () => {
    if (timeFiltersSelected) {
      setShowCalendarForm(true);
    } else {
      showToast({
        error: true,
        text: "Select Time Slot!",
      });
    }
  };
  // const handleNextClick = () => {
  //   if (timeFiltersSelected) {
  //     setShowCalendarForm(true);
  //   } else {
  //     alert("Select Time Slot!");
  //   }
  // };
  const onChange = (date) => {
    setDate(date);
  };
  const [selectdate, setSelectDate] = useState(new Date());
  const handleSelect = (date) => {
    console.log("date", date);
    setSelectDate(date);
  };

  const handleSubmit = (values) => {
    console.log(values);

    const hasFilledField = Object?.values(values).some((fieldValue) => {
      if (fieldValue) {
        if (Array.isArray(fieldValue)) {
          return fieldValue.length > 0;
        } else {
          return fieldValue.trim() !== "";
        }
      }
      return false;
    });

    if (hasFilledField) {
      setIsFormSubmitted(true);
      showToast({
        success: true,
        text: "Thank you for considering us! We will get back to you shortly.",
      });
      setModal(!modal);
    }
  };

  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <>
      {/* {!isFormSubmitted ? ( */}
      <>
        <DateHolder>
          <div className="Content">
            <div className="image-holder">
              <Image src={Logo} alt="Logo" />
            </div>
            <div className="company-content">
              <h2>Schedule a Consultation {title} </h2>
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
                    // renderNavNext={(onClick) => (
                    //   <CustomCalendarNavButtons
                    //     onClick={onClick}
                    //     label="next"
                    //   />
                    // )}
                    // renderNavPrev={(onClick) => (
                    //   <CustomCalendarNavButtons
                    //     onClick={onClick}
                    //     label="prev"
                    //   />
                    // )}
                  />
                  <TimeFilters
                    selectedTimezone={selectedTimezone}
                    selectDate={selectdate}
                    onTimeFiltersSelect={() => setTimeFiltersSelected(true)}
                  />
                </div>
                <TimezoneList
                  selectedTimezone={selectedTimezone}
                  onTimezoneChange={setSelectedTimezone}
                />
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
                // disabled={!timeFiltersSelected}
              >
                {isLoading ? <Loader /> : "Next"}
              </PrimaryButton>
              <Toastify
                open={error}
                setOpen={setError}
                text="Please fill all required fields : Email and Phone Number before submitting."
                error={error}
              />
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
                          maxLength={200}
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
                          width="165"
                          minWidth="165"
                          height="40"
                          size="24"
                          minsize="16"
                          weight="500"
                          radius="9px"
                          type="submit"
                          style={{
                            marginTop: "20px",
                            width: "165px",
                          }}
                          onClick={() => {
                            if (Object.keys(errors).length > 0) {
                              handleSubmit();
                            }
                          }}
                        >
                          {isLoading ? <Loader /> : "Let's E-Meet"}
                        </PrimaryButton>
                        <Toastify
                          open={success}
                          setOpen={setSuccess}
                          text={
                            "Thank you for considering us! We will get back to you shortly."
                          }
                          success={success}
                        />
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
      </>
      {/* ) : (
         <ThankYou />
     )
      
      } */}
    </>
  );
};

export default DateModal;
