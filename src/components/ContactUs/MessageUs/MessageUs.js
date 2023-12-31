import React, { useContext, useState } from "react";
import { Container } from "src/components/Container.styles";
import { Message, MessageContainer } from "./MessageUs.styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PrimaryButton } from "src/components/Button.styles";
import PhoneInputField from "../../DeveloperModal/PhoneInputField";
import axios from "axios";
// import { ToastContext } from "src/context/toastContext";
import Link from "next/link";
import Loader from "src/components/Loader/formLoader";

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
  company: Yup.string().max(25, "*Company must not exceed 25 characters"),
  phone_number: Yup.string().max(15, "*Phone number must not exceed 15 digits"),
  email: Yup.string().email("*Email is Invalid").required("*Email is required"),
  message: Yup.string().max(500, "*Message must not exceed 500 characters"),
  termsCheckbox: Yup.boolean()
    .oneOf([true], "You must accept terms and conditions")
    .required("*You must accept terms and conditions"),
});

const MessageUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const { showToast } = useContext(ToastContext);
  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone_number: values.phone_number,
        company: values.company,
        message: values.message,
        formTitle: "Contact us",
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/query/enquiry`,
        JSON.stringify(payload),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
          },
        }
      );
      if (response.status == 200 || response.status == 201) {
        resetForm();
        // showToast({
        //   success: true,
        //   text: "Thank you for considering us! We will get back to you shortly.",
        // });
      }
    } catch (error) {
      // showToast({
      //   error: true,
      //   text: "An error occurred while submitting the form",
      // });
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
                  <div className="check-box custom-checkbox">
                    <Field
                      type="checkbox"
                      id="termsCheckbox"
                      name="termsCheckbox"
                    />
                    <label
                      htmlFor="termsCheckbox"
                      className={
                        errors.termsCheckbox && touched.termsCheckbox
                          ? "error-borders"
                          : ""
                      }
                    >
                      <span for="termsCheckbox">
                        I understand and agree to the{" "}
                        <Link href="/terms-conditions" id="termsLink">
                          Terms & Conditions
                        </Link>
                      </span>
                    </label>
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
                    flex="flex"
                    items="center"
                    justify="center"
                  >
                    {isLoading ? <Loader /> : "Send Message"}
                  </PrimaryButton>
                  <h3>
                    Facing trouble in submitting the form? Simply mail us a {""}
                    <a href="mailto:info@webevis.com">info@webevis.com</a>
                  </h3>{" "}
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
