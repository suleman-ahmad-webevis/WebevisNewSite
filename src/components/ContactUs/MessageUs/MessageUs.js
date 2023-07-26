import React from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
import { Message, MessageContainer } from "./MessageUs.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PrimaryButton } from "src/components/Button.styles";
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

const MessageUs = () => {
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
        <Message>
          <h1>Send us a message</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Form id="submit-form" style={{ width: "100%" }}>
            <Grid
              xs={25}
              sm={24}
              // gap={{ xs: 10, lg: 24 }}
              gap={15}
              style={{ marginBottom: "20px" }}
            >
              <GridCol xs={24} sm={12}>
                <div className="fields">
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
              </GridCol>
              <GridCol xs={24} sm={12}>
                <div>
                  <label htmlFor="company">Company</label>
                  <Field
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Webevis"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="error"
                  />
                </div>
              </GridCol>
              {/* <GridCol xs={12} sm={12}>
                <div className="fields">
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="210498230573"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
              </GridCol>
              <GridCol xs={12} sm={12}>
                <div className="fields">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="user@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </GridCol>
              <GridCol xs={24} style={{ marginBottom: "20px" }}>
                <div className="fields">
                  <label htmlFor="subject">Subject</label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Seo"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="error"
                  />
                </div>
              </GridCol>
              <GridCol xs={24} style={{ marginBottom: "20px" }}>
                <div className="fields">
                  <label htmlFor="message">Message</label>
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
              </GridCol> */}
            </Grid>

            {/* <PrimaryButton
              shadowH="none"
              width="540"
              minWidth="327.019"
              height="50"
              minheight="40"
              size="24"
              minsize="16"
              weight="700"
              radius="3px"
            >
              {" "}
              Send Message
            </PrimaryButton> */}
          </Form>
        </Message>
      </MessageContainer>
    </Formik>
  );
};

export default MessageUs;