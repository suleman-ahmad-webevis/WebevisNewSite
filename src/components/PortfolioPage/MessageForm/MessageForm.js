// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Container } from "src/components/Container.styles";
// import { Message, MessageContainer } from "./MessageForm.styles";
// import { PrimaryButton } from "src/components/Button.styles";
// import Image from "next/image";
// import MainImg from "../../../assets/images/Portfolio/MainImg.svg";
// import { Flex } from "src/components/Flex.styles";
// import Grid from "src/components/Grid";
// import GridCol from "src/components/GridCol";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PhoneInputField from "src/components/DeveloperModal/PhoneInputField";
// import axios from "axios";

// const initialValues = {
//   name: "",
//   company: "",
//   phone: "",
//   email: "",
//   message: "",
// };

// const validationSchema = Yup.object().shape({
//   name: Yup.string().max(25, "*Name must not exceed 25 characters"),
//   company: Yup.string().max(25, "*company must not exceed 25 characters"),
//   email: Yup.string().email("*Email is Invalid").required("*Email is required"),
//   phone: Yup.string()
//     .required("*Phone is required")
//     .max(15, "*Phone number must not exceed 15 digits"),
//   message: Yup.string().max(500, "*Message must not exceed 500 characters"),
// });

// const MessageForm = () => {
//   // const handleSubmit = (values) => {
//   //   console.log(values);
//   // };

//   const handleSubmit = async (values) => {
//     console.log("values", values);

//     try {
//       const payload = {
//         name: values.name,
//         email: values.email,
//         phone: values.phone,
//         company: values.company,
//         message: values.message,
//       };
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_MAIN_URL}/query/enquiry`,
//         JSON.stringify(payload),
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "X-path": window.location.pathname,
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_STAGING_API_KEY}`,
//           },
//         }
//       );
//       console.log("API response:", response.data);

//       if (response.status === 200) {
//         toast.success(
//           "Thank you for considering us! We will get back to you shortly.",
//           {
//             className: "custom-toast-success",
//           }
//         );
//       } else {
//         throw new Error("Failed to submit form");
//       }
//     } catch (error) {
//       toast.error("An error occurred while submitting the form");
//     }
//   };

//   return (
//     <>
//       <ToastContainer />

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => (
//           <MessageContainer>
//             <Container className="GetContainer">
//               <div className="image-box">
//                 <Image src={MainImg} alt="MainImg" />
//               </div>
//               <Message>
//                 <h1>Ready To Collaborate?</h1>
//                 <p>
//                   If you are seeking results-driven solutions that drive growth
//                   and amplify your brand&apos;s impact, look no further. Contact
//                   us to embark on your own success journey with Webevis
//                   Technologies.
//                 </p>

//                 <Form>
//                   <div className="input-wrap">
//                     <div className="fields">
//                       <label htmlFor="name">Name</label>
//                       <Field
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="Adam Mack"
//                         maxLength={25}
//                       />
//                     </div>
//                     <div className="fields">
//                       <label htmlFor="company">Company</label>
//                       <Field
//                         type="text"
//                         id="company"
//                         name="company"
//                         placeholder="Webevis"
//                         maxLength={25}
//                       />
//                     </div>
//                   </div>
//                   <div className="input-wrap">
//                     <div className="fields">
//                       <label htmlFor="phone">
//                         Phone<span>*</span>
//                       </label>
//                       <Field component={PhoneInputField} name="phone" />
//                     </div>
//                     <div className="fields">
//                       <label htmlFor="email">
//                         Email<span>*</span>
//                       </label>
//                       <Field
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="adam@webevis.com"
//                         className={
//                           errors.email && touched.email ? "error-border" : ""
//                         }
//                       />
//                     </div>
//                   </div>
//                   <div className="fields">
//                     <label>Share other important details</label>
//                     <Field
//                       as="textarea"
//                       id="message"
//                       name="message"
//                       placeholder="Please share anything that will help prepare for our meeting."
//                       maxLength={500}
//                     />
//                   </div>
//                   <div className="captcha"></div>
//                   <PrimaryButton
//                     shadowH="none"
//                     height="50"
//                     minheight="40"
//                     size="24"
//                     minsize="16"
//                     weight="700"
//                     radius="3px"
//                     onClick={() => {
//                       if (Object.keys(errors).length > 0) {
//                         Object.values(errors).forEach((errorMessage) => {
//                           toast.error(errorMessage);
//                         });
//                       } else {
//                         handleSubmit();
//                       }
//                     }}
//                   >
//                     Submit Now
//                   </PrimaryButton>
//                 </Form>
//               </Message>
//             </Container>
//           </MessageContainer>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default MessageForm;

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
import PhoneInputField from "src/components/DeveloperModal/PhoneInputField";
import axios from "axios";

const initialValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().max(25, "*Name must not exceed 25 characters"),
  company: Yup.string().max(25, "*company must not exceed 25 characters"),
  email: Yup.string().email("*Email is Invalid").required("*Email is required"),
  phone: Yup.string()
    .required("*Phone is required")
    .max(15, "*Phone number must not exceed 15 digits"),
  message: Yup.string().max(500, "*Message must not exceed 500 characters"),
});

const MessageForm = () => {
  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

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

      if (response.status === 200) {
        toast.success(
          "Thank you for considering us! We will get back to you shortly.",
          {
            className: "custom-toast-success",
          }
        );
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.log("error", error);
      toast.error("An error occurred while submitting the form");
    }
  };

  return (
    <>
      <ToastContainer />

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
                  <div className="captcha"></div>
                  <PrimaryButton
                    shadowH="none"
                    height="50"
                    minheight="40"
                    size="24"
                    minsize="16"
                    weight="700"
                    radius="3px"
                    onClick={() => {
                      if (Object.keys(errors).length > 0) {
                        Object.values(errors).forEach((errorMessage) => {
                          toast.error(errorMessage);
                        });
                      } else {
                        handleSubmit(values);
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
