import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
import { Message, MessageContainer } from "./MessageUs.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PrimaryButton } from "src/components/Button.styles";
import Grid from "src/components/Grid";
import GridCol from "src/components/GridCol";
import PhoneInputField from "../../DeveloperModal/PhoneInputField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Toastify from "src/components/Modal/toastify/Toastify";

const initialValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().max(25, "*Name must not exceed 25 characters"),
  company: Yup.string().max(25, "*Company must not exceed 25 characters"),
  phone: Yup.string()
    .required("*Phone is required")
    .max(15, "*Phone number must not exceed 15 digits"),
  email: Yup.string().email("*Email is Invalid").required("*Email is required"),

  message: Yup.string().max(500, "*Message must not exceed 500 characters"),
});

const MessageUs = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values) => {
    console.log("values", values);

    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        message: values.message,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/query/enquiry`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
            "X-path": window.location.pathname,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
          },
        }
      );

      console.log("API response:", response.data);
      if (response.status === 200) {
        console.log(response);

        setSuccess(true);
        // toast.success(
        //   "Thank you for considering us! We will get back to you shortly.",
        //   {
        //     className: "custom-toast-success",
        //   }
        // );
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form");
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleSubmit }) => (
          <MessageContainer>
            <Container resPadding="0px">
              <Message>
                <h1>Send Us A Message</h1>
                <p>
                  Use the form below to send us a message, and we will get back
                  to you promptly. We are here to help with new projects,
                  guidance, or collaborations.
                </p>
                <Form>
                  <div className="input-wrap">
                    <div className="fields">
                      <label htmlFor="name">Name</label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Adam Mack"
                        maxLength={25}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="company">Company</label>
                      <Field
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Webevis"
                        maxLength={25}
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="fields">
                      <label htmlFor="phone">
                        Phone<span>*</span>
                      </label>
                      <Field component={PhoneInputField} name="phone" />
                    </div>
                    <div className="fields">
                      <label htmlFor="email">
                        Email<span>*</span>
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="adam@webevis.com"
                        className={
                          errors.email && touched.email ? "error-border" : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="fields">
                    <label>Share other important details</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Please share anything that will help prepare for our meeting."
                      maxLength={500}
                    />
                  </div>

                  <PrimaryButton
                    shadowH="none"
                    minWidth="327.019"
                    height="50"
                    minheight="40"
                    size="24"
                    minsize="16"
                    weight="700"
                    radius="3px"
                    onClick={() => {
                      if (errors) {
                        setError(true);
                      } else {
                        handleSubmit();
                      }
                    }}
                  >
                    Send Message
                  </PrimaryButton>
                </Form>
              </Message>
            </Container>
          </MessageContainer>
        )}
      </Formik>
      <Toastify
        open={error || success}
        setOpen={error ? setError : setSuccess}
        text={
          error
            ? "Please fill all required fields: Email and Phone Number before submitting."
            : "Thank you for considering us! We will get back to you shortly."
        }
        error={error}
        success={success}
      />
    </>
  );
};

export default MessageUs;
