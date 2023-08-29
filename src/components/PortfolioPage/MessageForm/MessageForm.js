import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container } from "src/components/Container.styles";
import { Message, MessageContainer } from "./MessageForm.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Image from "next/image";
import MainImg from "../../../assets/images/Portfolio/MainImg.svg";
import { Flex } from "src/components/Flex.styles";
import Grid from "src/components/Grid";
import GridCol from "src/components/GridCol";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  last_name: "",
  email: "",
  phone: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("*Name is required")
    .max(25, "*Name must not exceed 25 characters"),
  last_name: Yup.string()
    .required("*Last Name is required")
    .max(25, "*Last Name must not exceed 25 characters"),
  email: Yup.string().email("*Invalid email").required("*Email is required"),
  phone: Yup.string()
    .required("*Phone is required")
    .max(15, "*Phone number must not exceed 15 digits"),

  message: Yup.string()
    .required("*Message is required")
    .max(500, "*Message must not exceed 500 characters"),
});

const MessageForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <>
      <ToastContainer />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <MessageContainer>
            <Container className="GetContainer">
              <div className="image-box">
                <Image src={MainImg} alt="MainImg" />
              </div>
              <Message>
                <h1>Ready To Collaborate?</h1>
                <p>
                  If you are seeking results-driven solutions that drive growth
                  and amplify your brand&apos;s impact, look no further. Contact
                  us to embark on your own success journey with Webevis
                  Technologies.
                </p>
                <Form>
                  <div className="input-wrap">
                    <div className="fields">
                      <label htmlFor="name">First Name</label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="First Name"
                        maxLength={25}
                        className={
                          errors.name && touched.name ? "error-border" : ""
                        }
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="last_name">Last Name</label>
                      <Field
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Last Name"
                        maxLength={25}
                        className={
                          errors.last_name && touched.last_name
                            ? "error-border"
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="fields">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className={
                          errors.email && touched.email ? "error-border" : ""
                        }
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="phone">Phone No.</label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone No."
                        maxLength={15}
                        className={
                          errors.phone && touched.phone ? "error-border" : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="fields">
                    <label htmlFor="message">Message</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Message"
                      maxLength={500}
                      className={
                        errors.message && touched.message ? "error-border" : ""
                      }
                    />
                  </div>
                  <PrimaryButton
                    shadowH="none"
                    minWidth="124"
                    height="50"
                    minheight="40"
                    size="18"
                    minsize="16"
                    weight="700"
                    radius="47px"
                    width="170"
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
                    Submit Now
                  </PrimaryButton>
                </Form>
              </Message>
            </Container>
          </MessageContainer>
        )}
      </Formik>
    </>
  );
};

export default MessageForm;
