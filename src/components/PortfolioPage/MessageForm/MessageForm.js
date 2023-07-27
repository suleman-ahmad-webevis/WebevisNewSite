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

const initialValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  company: Yup.string().required("Company is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const MessageForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <MessageContainer>
        <Container className="GetContainer">
          <div className="image-box">
            <Image src={MainImg} alt="MainImg" />
          </div>
          <Message>
            <h1>Get In Touch With Us</h1>
            <p>
              We are creative, strategy-driven marketing experts here to help
              you build your brand while maximizing your business’s potential
              through multiple platforms.
            </p>
            <Form>
              <div className="input-wrap">
                <div className="fields">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First Name"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="fields">
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Last Name"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
              </div>
              <div className="input-wrap">
                <div className="fields">
                  <Field
                    type="text"
                    id="phone"
                    name="Email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="fields">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Phone No."
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="fields">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
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
              >
                {" "}
                Submit Now{" "}
              </PrimaryButton>
            </Form>
          </Message>
        </Container>
      </MessageContainer>
    </Formik>
  );
};

export default MessageForm;
