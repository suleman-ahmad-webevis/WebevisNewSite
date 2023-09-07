import React, { useContext, useState } from "react";
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
import PhoneInputField from "src/components/DeveloperModal/PhoneInputField";
import axios from "axios";
import { ToastContext } from "src/context/toastContext";

const initialValues = {
  name: "",
  company: "",
  phone_number: "",
  email: "",
  message: "",
  termsCheckbox: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().max(25, "*Name must not exceed 25 characters"),
  company: Yup.string().max(25, "*company must not exceed 25 characters"),
  email: Yup.string().email("*Email is Invalid").required("*Email is required"),
  phone_number: Yup.string().max(15, "*Phone number must not exceed 15 digits"),
  message: Yup.string().max(500, "*Message must not exceed 500 characters"),
  termsCheckbox: Yup.boolean()
    .oneOf([true], "You must accept terms and conditions")
    .required("*You must accept terms and conditions"),
});

const MessageForm = () => {
  const [error, setError] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values", values);
    if (values.termsCheckbox) {
      try {
        setIsLoading(true);
        setError(false);
        const payload = {
          name: values.name,
          email: values.email,
          phone_number: values.phone_number,
          company: values.company,
          message: values.message,
        };
        console.log("sending", payload);
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
        //     if (response.status === 200) {
        //       setSuccess(true);
        //       resetForm();
        //     } else {
        //       throw new Error("Failed to submit form");
        //     }
        //   } catch (error) {
        //     setError(false);
        //     setSubmitForm(true);
        //     console.log("An error occurred while submitting the form");
        //   } finally {
        //     setIsLoading(false);
        //   }
        // };
        if (response.status === 200) {
          console.log(response);

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
        setSubmitForm(true);
        console.log("An error occurred while submitting the form");
      } finally {
        setIsLoading(false);
      }
    } else {
      // Display an error toast if the checkbox is not checked
      showToast({
        error: true,
        text: "You must accept terms and conditions",
      });
    }
  };
  const { showToast } = useContext(ToastContext);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
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
                      <label htmlFor="phone_number">Phone</label>
                      <Field component={PhoneInputField} name="phone_number" />
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
                  </div>{" "}
                  <PrimaryButton
                    shadowH="none"
                    height="50"
                    minheight="40"
                    size="24"
                    minsize="16"
                    weight="700"
                    radius="3px"
                    // onClick={() => {
                    //   if (errors) {
                    //     setError(true);
                    //   } else {
                    //     handleSubmit();
                    //   }
                    // }}
                    onClick={() => {
                      if (errors.email || errors.phone_number) {
                        showToast({
                          error: true,
                          text: " Email before submitting.",
                        });
                      } else if (errors.termsCheckbox) {
                        showToast({
                          error: true,
                          text: "You must accept terms and conditions",
                        });
                      } else {
                        handleSubmit();
                      }
                    }}
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
                      "Submit Now"
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

export default MessageForm;
