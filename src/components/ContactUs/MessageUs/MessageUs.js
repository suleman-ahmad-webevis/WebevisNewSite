import React, { useContext, useState } from "react";
import { Container } from "src/components/Container.styles";
import { Message, MessageContainer } from "./MessageUs.styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PrimaryButton } from "src/components/Button.styles";
import PhoneInputField from "../../DeveloperModal/PhoneInputField";
import axios from "axios";
import { ToastContext } from "src/context/toastContext";

const initialValues = {
  name: "",
  company: "",
  phone_number_1: "",
  email: "",
  message: "",
  termsCheckbox: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().max(25, "*Name must not exceed 25 characters"),
  company: Yup.string().max(25, "*Company must not exceed 25 characters"),
  phone_number_1: Yup.string().max(
    15,
    "*Phone number must not exceed 15 digits"
  ),
  email: Yup.string().email("*Email is Invalid").required("*Email is required"),
  message: Yup.string().max(500, "*Message must not exceed 500 characters"),
  termsCheckbox: Yup.boolean()
    .oneOf([true], "You must accept terms and conditions")
    .required("*You must accept terms and conditions"),
});

const MessageUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useContext(ToastContext);
  const handleSubmit = async (values, { resetForm }) => {
    console.log("The ---->");
    try {
      setIsLoading(true);
      const payload = {
        name: values.name,
        email: values.email,
        phone_number_1: values.phone_number_1,
        company: values.company,
        message: values.message,
        formTitle: "Send us message",
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
      if (response.status == 200 || response.status == 201) {
        resetForm();
        showToast({
          success: true,
          text: "Thank you for considering us! We will get back to you shortly.",
        });
      }
    } catch (error) {
      showToast({
        error: true,
        text: "An error occurred while submitting the form",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
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
                      <label htmlFor="phone_number_1">Phone</label>
                      <Field
                        component={PhoneInputField}
                        name="phone_number_1"
                      />
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
                  <div className="check-box">
                    <Field
                      type="checkbox"
                      id="termsCheckbox"
                      name="termsCheckbox"
                      className={
                        errors.termsCheckbox && touched.termsCheckbox
                          ? "error-border"
                          : ""
                      }
                    />
                    I understand and agree to the{" "}
                    <a href="#" id="termsLink">
                      terms & conditions
                    </a>
                    .
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
                    type="submit"
                  >
                    {isLoading ? (
                      <i
                        className="fa fa-circle-o-notch fa-spin"
                        style={{
                          marginRight: "5px",
                          fontSize: "24px",
                          padding: "12px 16px",
                        }}
                      ></i>
                    ) : (
                      "Send Message"
                    )}
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

export default MessageUs;
