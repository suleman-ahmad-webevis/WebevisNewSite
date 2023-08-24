// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { ModalHolders } from "./DeveloperModals.styles";
// import Developers from "../../../assets/images/SeoExpert/Developers-Img.png";
// import { PrimaryButton } from "src/components/Button.styles";
// import { BsSearch } from "react-icons/bs";
// import Select, { components } from "react-select";
// import chroma from "chroma-js";
// import PhoneInput, { useCountry } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import axios from "axios";
// import isValidUrl from "is-valid-http-url";
// import { option } from "./ModalData";

// const DeveloperModal = ({ type }) => {
//   const randomColor = () => {
//     const color = Math.floor(Math.random() * 16777215).toString(16);
//     return `#${"0".repeat(6 - color.length)}${color}`;
//   };
//   const optionWithRandomColors = option.map((opt) => ({
//     ...opt,
//     color: randomColor(),
//   }));

//   console.log({ type, optionWithRandomColors });

//   const defaultSelectedOption = optionWithRandomColors.find(
//     ({ value }) => value === type
//   );

// const colourStyles = {
//   control: (styles, { isFocused, isSelected }) => ({
//     ...styles,
//     maxHeight: "80px",
//     overflow: "auto",
//     backgroundColor: "white",
//     cursor: "pointer",
//     borderColor: isFocused ? "#28B781" : "#D9D9D9",
//     boxShadow: isFocused ? " 1px solid #28B781" : "none",
//     padding: "5px",
//     boxShadow:
//       " 0px 0.9781021475791931px 2.9343066215515137px 0px rgba(0, 0, 0, 0.14)",
//     "&:hover": {
//       borderColor: "none",
//     },
//     ".css-1xc3v61-indicatorContainer": {
//       transform: isSelected ? "rotateX(180deg)" : "rotateX(0deg)",
//       transition: "transform 0.9s ease",
//       span: {
//         display: "none",
//       },
//     },
//     ".css-1u9des2-indicatorSeparator": {
//       display: "none",
//     },
//     ".css-qbdosj-Input": {
//       display: "block",
//       height: isFocused ? "35px" : "0",
//       padding: "0",
//     },
//     ".css-19bb58m": {
//       input: {
//         maxHeight: "15px",
//       },
//     },
//   }),
//   menu: (styles) => ({
//     ...styles,
//     maxHeight: "180px",
//   }),
//   menuList: (styles) => ({
//     ...styles,
//     maxHeight: "180px", // Set the maximum height for the list
//     overflowY: "auto", // Enable vertical scroll if needed
//   }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       padding: "10px",
//     };
//   },
//   multiValue: (styles, { data }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       color: "red",
//       backgroundColor: color.alpha(0.1).css(),
//     };
//   },
//   multiValueLabel: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//   }),
//   multiValueRemove: (styles, { data }) => ({
//     ...styles,
//     color: data.color,
//     ":hover": {
//       backgroundColor: data.color,
//       color: "white",
//     },
//   }),
// };
//   const InputOption = ({
//     getStyles,
//     Icon,
//     isDisabled,
//     isFocused,
//     isSelected,
//     children,
//     innerProps,
//     ...rest
//   }) => {
//     const [isActive, setIsActive] = useState(false);
//     const onMouseDown = () => setIsActive(true);
//     const onMouseUp = () => setIsActive(false);
//     const onMouseLeave = () => setIsActive(false);

//     // styles
//     let bg = "transparent";
//     let color = "black";
//     if (isFocused) bg = "#eee";
//     if (isActive) color = " #28B781";

//     const style = {
//       alignItems: "center",
//       backgroundColor: bg,
//       color: color,
//       // color: "inherit",
//       display: "flex ",
//     };

//     // prop assignment
//     const props = {
//       ...innerProps,
//       onMouseDown,
//       onMouseUp,
//       onMouseLeave,
//       style,
//     };
//     const pseudoCheckboxStyle = {
//       marginRight: "8px",
//       cursor: "pointer",
//       position: "relative",
//       width: "16px",
//       height: "16px",
//       border: "1px solid #D9D9D9",
//       backgroundColor: isSelected ? "#28B781" : "transparent",
//       borderRadius: "3px",
//     };

//     const customCheckmarkStyle = {
//       position: "absolute",
//       top: "2px",
//       left: "4px",
//       width: "6px",
//       height: "8px",
//       border: "2px solid white",
//       borderLeft: "none",
//       borderTop: "none",
//       transform: isSelected ? "rotate(45deg)" : "rotate(0deg)",
//       visibility: isSelected ? "visible" : "hidden",
//     };
//     return (
//       <components.Option
//         {...rest}
//         isDisabled={isDisabled}
//         isFocused={isFocused}
//         isSelected={isSelected}
//         getStyles={getStyles}
//         innerProps={props}
//       >
//         {/* <input
//           type="checkbox"
//           style={pseudoCheckboxStyle}
//           checked={isSelected}
//         /> */}
//         <div style={pseudoCheckboxStyle}>
//           <div style={customCheckmarkStyle}></div>
//         </div>

//         {children}
//       </components.Option>
//     );
//   };
//   const [website, setWebsite] = useState("https://"); // State to store the website URL
//   const [isWebsiteValid, setIsWebsiteValid] = useState(true); // State to track URL validity

//   const handleWebsiteChange = (e) => {
//     const url = e.target.value;
//     setWebsite(url);

//     if (url.trim() == "https://") {
//       setIsWebsiteValid(true);
//     } else {
//       setIsWebsiteValid(isValidUrl(url)); // Check if the URL is valid
//     }
//   };
//   const [phoneNumber, setPhoneNumber] = useState();
//   const handlePhoneNumberChange = (value) => {
//     setPhoneNumber(value);
//   };
//   return (
//     <ModalHolders>
//       <div className="img-holder">
//         <Image src={Developers} alt="Developers" />
//       </div>
//       <form>
//         <div>
//           <h2>
//             Hire Dedicated Resources in
//             <br />
//             12 hours
//           </h2>
//         </div>
//         <div className="form">
//           <div className="input-holder">
//             <label>Name</label>
//             <input type="text" placeholder="Adam Mack" />
//           </div>
//           <div className="input-holder">
//             <label>Email</label>
//             <input type="text" placeholder="adam@webevis.com" />
//           </div>
//           <div className="input-holder">
//             <label>Phone Number</label>
//             <PhoneInput
//               defaultCountry="US"
//               value="+1"
//               onChange={handlePhoneNumberChange}
//             />
//           </div>
//           <div className="input-holder has-icon">
//             <label>Company Name</label>
//             <label for="label" className="icon-holder">
//               <BsSearch className="icon" size="28px" color="#A1A1A1" />
//             </label>
//             <input id="label" type="text" placeholder="Webevis Technologies" />
//           </div>
//           <div className="input-holder">
//             <label>Company Website</label>

//             <input type="text" value={website} onChange={handleWebsiteChange} />
//             {!isWebsiteValid && website.trim() !== "" && (
//               <p className="error-message">URL is invalid</p>
//             )}
//           </div>
//           <div className="input-holder select-input">
//             <label>Select Resources</label>
//             <Select
//               className="Select"
//               closeMenuOnSelect={false}
//               isMulti
//               styles={colourStyles}
//               options={optionWithRandomColors}
//               hideSelectedOptions={false}
//               defaultValue={[]}
//               components={{
//                 Option: InputOption,
//               }}
//             />
//           </div>
//         </div>
//         <div className="textarea">
//           <label>Share other important details</label>
//           <textarea
//             type="text"
//             rows={"5"}
//             placeholder="Please share anything that will help prepare for our meeting."
//           />
//         </div>

//         <PrimaryButton
//           height="50"
//           minheight="40"
//           size="23"
//           weight="500"
//           minsize="18"
//         >
//           {"Let's"} E-Meet
//         </PrimaryButton>
//         <h3>
//           Facing trouble in submiting form? them simply mail us in{" "}
//           <a href="mailto:info@webevis.com"> info@webevis.com</a>
//         </h3>
//       </form>
//     </ModalHolders>
//   );
// };

// export default DeveloperModal;

// import React, { useState } from "react";
// import Image from "next/image";
// import { ModalHolders } from "./DeveloperModals.styles";
// import Developers from "../../../assets/images/SeoExpert/Developers-Img.png";
// import { PrimaryButton } from "src/components/Button.styles";
// import { BsSearch } from "react-icons/bs";
// import Select, { components } from "react-select";
// import chroma from "chroma-js";
// import PhoneInput, { useCountry } from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import axios from "axios";
// import isValidUrl from "is-valid-http-url";
// import { option } from "./ModalData";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const DeveloperModal = ({ type }) => {
//   // Define the validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     // Add validation for other fields
//   });

//   // Handle form submission
//   const handleSubmit = (values) => {
//     const formTitle = "Hire Dedicated Resources"; // Set the title of the form/page
//     console.log("Form Title:", formTitle);
//     console.log("Form Data:", values);

//     // Perform your API call or data handling here
//   };

//   const randomColor = () => {
//     const color = Math.floor(Math.random() * 16777215).toString(16);
//     return `#${"0".repeat(6 - color.length)}${color}`;
//   };
//   const optionWithRandomColors = option.map((opt) => ({
//     ...opt,
//     color: randomColor(),
//   }));

//   const defaultSelectedOption = optionWithRandomColors.find(
//     ({ value }) => value === type
//   );

//   const colourStyles = {
//     control: (styles, { isFocused, isSelected }) => ({
//       ...styles,
//       maxHeight: "80px",
//       overflow: "auto",
//       backgroundColor: "white",
//       cursor: "pointer",
//       borderColor: isFocused ? "#28B781" : "#D9D9D9",
//       boxShadow: isFocused ? " 1px solid #28B781" : "none",
//       padding: "5px",
//       boxShadow:
//         " 0px 0.9781021475791931px 2.9343066215515137px 0px rgba(0, 0, 0, 0.14)",
//       "&:hover": {
//         borderColor: "none",
//       },
//       ".css-1xc3v61-indicatorContainer": {
//         transform: isSelected ? "rotateX(180deg)" : "rotateX(0deg)",
//         transition: "transform 0.9s ease",
//         span: {
//           display: "none",
//         },
//       },
//       ".css-1u9des2-indicatorSeparator": {
//         display: "none",
//       },
//       ".css-qbdosj-Input": {
//         display: "block",
//         height: isFocused ? "35px" : "0",
//         padding: "0",
//       },
//       ".css-19bb58m": {
//         input: {
//           maxHeight: "15px",
//         },
//       },
//     }),
//     menu: (styles) => ({
//       ...styles,
//       maxHeight: "180px",
//     }),
//     menuList: (styles) => ({
//       ...styles,
//       maxHeight: "180px", // Set the maximum height for the list
//       overflowY: "auto", // Enable vertical scroll if needed
//     }),
//     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//       const color = chroma(data.color);
//       return {
//         ...styles,
//         padding: "10px",
//       };
//     },
//     multiValue: (styles, { data }) => {
//       const color = chroma(data.color);
//       return {
//         ...styles,
//         color: "red",
//         backgroundColor: color.alpha(0.1).css(),
//       };
//     },
//     multiValueLabel: (styles, { data }) => ({
//       ...styles,
//       color: data.color,
//     }),
//     multiValueRemove: (styles, { data }) => ({
//       ...styles,
//       color: data.color,
//       ":hover": {
//         backgroundColor: data.color,
//         color: "white",
//       },
//     }),
//   };

//   const InputOption = ({
//     getStyles,
//     Icon,
//     isDisabled,
//     isFocused,
//     isSelected,
//     children,
//     innerProps,
//     ...rest
//   }) => {
//     const [isActive, setIsActive] = useState(false);
//     const onMouseDown = () => setIsActive(true);
//     const onMouseUp = () => setIsActive(false);
//     const onMouseLeave = () => setIsActive(false);

//     // styles
//     let bg = "transparent";
//     let color = "black";
//     if (isFocused) bg = "#eee";
//     if (isActive) color = " #28B781";

//     const style = {
//       alignItems: "center",
//       backgroundColor: bg,
//       color: color,
//       // color: "inherit",
//       display: "flex ",
//     };

//     // prop assignment
//     const props = {
//       ...innerProps,
//       onMouseDown,
//       onMouseUp,
//       onMouseLeave,
//       style,
//     };
//     const pseudoCheckboxStyle = {
//       marginRight: "8px",
//       cursor: "pointer",
//       position: "relative",
//       width: "16px",
//       height: "16px",
//       border: "1px solid #D9D9D9",
//       backgroundColor: isSelected ? "#28B781" : "transparent",
//       borderRadius: "3px",
//     };

//     const customCheckmarkStyle = {
//       position: "absolute",
//       top: "2px",
//       left: "4px",
//       width: "6px",
//       height: "8px",
//       border: "2px solid white",
//       borderLeft: "none",
//       borderTop: "none",
//       transform: isSelected ? "rotate(45deg)" : "rotate(0deg)",
//       visibility: isSelected ? "visible" : "hidden",
//     };
//     return (
//       <components.Option
//         {...rest}
//         isDisabled={isDisabled}
//         isFocused={isFocused}
//         isSelected={isSelected}
//         getStyles={getStyles}
//         innerProps={props}
//       >
//         {/* <input
//           type="checkbox"
//           style={pseudoCheckboxStyle}
//           checked={isSelected}
//         /> */}
//         <div style={pseudoCheckboxStyle}>
//           <div style={customCheckmarkStyle}></div>
//         </div>

//         {children}
//       </components.Option>
//     );
//   };

//   const [website, setWebsite] = useState("https://"); // State to store the website URL
//   const [isWebsiteValid, setIsWebsiteValid] = useState(true); // State to track URL validity

//   const handleWebsiteChange = (e) => {
//     const url = e.target.value;
//     setWebsite(url);

//     if (url.trim() === "https://") {
//       setIsWebsiteValid(true);
//     } else {
//       setIsWebsiteValid(isValidUrl(url)); // Check if the URL is valid
//     }
//   };

//   const [phoneNumber, setPhoneNumber] = useState();
//   const handlePhoneNumberChange = (value) => {
//     setPhoneNumber(value);
//   };

//   return (
//     <ModalHolders>
//       <div className="img-holder">
//         <Image src={Developers} alt="Developers" />
//       </div>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           // Initialize other form fields here
//         }}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <div>
//               <h2>
//                 Hire Dedicated Resources in
//                 <br />
//                 12 hours
//               </h2>
//             </div>
//             <div className="form">
//               <div className="input-holder">
//                 <label htmlFor="name">Name</label>
//                 <Field type="text" name="name" placeholder="Adam Mack" />
//                 <ErrorMessage
//                   name="name"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>
//               <div className="input-holder">
//                 <label htmlFor="email">Email</label>
//                 <Field
//                   type="text"
//                   name="email"
//                   placeholder="adam@webevis.com"
//                 />
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="error-message"
//                 />
//               </div>
//               <div className="input-holder">
//                 <label htmlFor="phone">Phone Number</label>
//                 <Field
//                   type="tel"
//                   name="phone"
//                   render={({ field }) => (
//                     <PhoneInput {...field} defaultCountry="US" />
//                   )}
//                 />
//               </div>
//               <div className="input-holder has-icon">
//                 <label htmlFor="companyName">Company Name</label>
//                 <label htmlFor="label" className="icon-holder">
//                   <BsSearch className="icon" size="28px" color="#A1A1A1" />
//                 </label>
//                 <Field
//                   id="label"
//                   type="text"
//                   name="companyName"
//                   placeholder="Webevis Technologies"
//                 />
//               </div>
//               <div className="input-holder">
//                 <label htmlFor="website">Company Website</label>
//                 <Field
//                   type="text"
//                   name="website"
//                   value={website}
//                   onChange={handleWebsiteChange}
//                 />
//                 {!isWebsiteValid && website.trim() !== "" && (
//                   <p className="error-message">URL is invalid</p>
//                 )}
//               </div>
//               <div className="input-holder select-input">
//                 <label htmlFor="resources">Select Resources</label>
//                 <Select
//                   className="Select"
//                   closeMenuOnSelect={false}
//                   isMulti
//                   styles={colourStyles}
//                   options={optionWithRandomColors}
//                   hideSelectedOptions={false}
//                   defaultValue={[]}
//                   components={{
//                     Option: InputOption,
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="textarea">
//               <label htmlFor="details">Share other important details</label>
//               <Field
//                 component="textarea"
//                 rows={5}
//                 name="details"
//                 placeholder="Please share anything that will help prepare for our meeting."
//               />
//             </div>
//             <PrimaryButton
//               height="50"
//               minheight="40"
//               size="23"
//               weight="500"
//               minsize="18"
//               type="submit"
//             >
//               {"Let's"} E-Meet
//             </PrimaryButton>
//             <h3>
//               Facing trouble in submitting the form? Simply mail us at{" "}
//               <a href="mailto:info@webevis.com">info@webevis.com</a>
//             </h3>
//           </Form>
//         )}
//       </Formik>
//     </ModalHolders>
//   );
// };

// export default DeveloperModal;

import React, { useState } from "react";
import Image from "next/image";
import { ModalHolders } from "./DeveloperModals.styles";
import Developers from "../../../assets/images/SeoExpert/Developers-Img.png";
import { PrimaryButton } from "src/components/Button.styles";
import { BsSearch } from "react-icons/bs";
import Select, { components } from "react-select";
import chroma from "chroma-js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import isValidUrl from "is-valid-http-url";
import { option } from "./ModalData";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const DeveloperModal = ({ type }) => {
  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${"0".repeat(6 - color.length)}${color}`;
  };

  const optionWithRandomColors = option.map((opt) => ({
    ...opt,
    color: randomColor(),
  }));
  // console.log("options", optionWithRandomColors);

  const defaultSelectedOption = optionWithRandomColors.find(
    ({ value }) => value === type
  );

  const colourStyles = {
    control: (styles, { isFocused, isSelected }) => ({
      ...styles,
      maxHeight: "80px",
      overflow: "auto",
      backgroundColor: "white",
      cursor: "pointer",
      borderColor: isFocused ? "#28B781" : "#D9D9D9",
      boxShadow: isFocused ? " 1px solid #28B781" : "none",
      padding: "5px",
      boxShadow:
        " 0px 0.9781021475791931px 2.9343066215515137px 0px rgba(0, 0, 0, 0.14)",
      "&:hover": {
        borderColor: "none",
      },
      ".css-1xc3v61-indicatorContainer": {
        transform: isSelected ? "rotateX(180deg)" : "rotateX(0deg)",
        transition: "transform 0.9s ease",
        span: {
          display: "none",
        },
      },
      ".css-1u9des2-indicatorSeparator": {
        display: "none",
      },
      ".css-qbdosj-Input": {
        display: "block",
        height: isFocused ? "35px" : "0",
        padding: "0",
      },
      ".css-19bb58m": {
        input: {
          maxHeight: "15px",
        },
      },
    }),
    menu: (styles) => ({
      ...styles,
      maxHeight: "180px",
    }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: "180px", // Set the maximum height for the list
      overflowY: "auto", // Enable vertical scroll if needed
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        padding: "10px",
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        color: "red",
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    let color = "black";
    if (isFocused) bg = "#eee";
    if (isActive) color = " #28B781";

    const style = {
      alignItems: "center",
      backgroundColor: bg,
      color: color,
      // color: "inherit",
      display: "flex ",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };
    const pseudoCheckboxStyle = {
      marginRight: "8px",
      cursor: "pointer",
      position: "relative",
      width: "16px",
      height: "16px",
      border: "1px solid #D9D9D9",
      backgroundColor: isSelected ? "#28B781" : "transparent",
      borderRadius: "3px",
    };

    const customCheckmarkStyle = {
      position: "absolute",
      top: "2px",
      left: "4px",
      width: "6px",
      height: "8px",
      border: "2px solid white",
      borderLeft: "none",
      borderTop: "none",
      transform: isSelected ? "rotate(45deg)" : "rotate(0deg)",
      visibility: isSelected ? "visible" : "hidden",
    };
    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        {/* <input
          type="checkbox"
          style={pseudoCheckboxStyle}
          checked={isSelected}
        /> */}
        <div style={pseudoCheckboxStyle}>
          <div style={customCheckmarkStyle}></div>
        </div>

        {children}
      </components.Option>
    );
  };

  const [website, setWebsite] = useState("https://"); // State to store the website URL
  const [isWebsiteValid, setIsWebsiteValid] = useState(true); // State to track URL validity

  const handleWebsiteChange = (e) => {
    const url = e.target.value;
    setWebsite(url);

    if (url.trim() === "https://") {
      setIsWebsiteValid(true);
    } else {
      setIsWebsiteValid(isValidUrl(url)); // Check if the URL is valid
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number().required("Phone number is required"),
    companyName: Yup.string().required("Company name is required"),
    website: Yup.string()
      .url("Invalid URL")
      .required("Website URL is required"),
    resources: Yup.array().min(1, "Select at least one resource").required(),
    details: Yup.string().required("Details are required"),
  });

  const handleSubmit = (values) => {
    const formTitle = "Hire Dedicated Resources"; // Set the title of the form/page
    console.log("Form Title:", formTitle);
    console.log("Form Data:", values);

    // Perform your API call or data handling here
  };

  const [phoneNumber, setPhoneNumber] = useState();
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <ModalHolders>
      <div className="img-holder">
        <Image src={Developers} alt="Developers" />
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          companyName: "",
          website: "https://",
          resources: [],
          details: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <h2>
                Hire Dedicated Resources in
                <br />
                12 hours
              </h2>
            </div>
            <div className="form">
              <div className="input-holder">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" placeholder="Adam Mack" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-holder">
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  name="email"
                  placeholder="adam@webevis.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-holder">
                <label htmlFor="phone">Phone Number</label>
                {/* <Field name="phone">
                  {({ field }) => (
                    <PhoneInput
                      {...field}
                      defaultCountry="US"
                      value={field.value || ""}
                      onChange={(value) =>
                        field.onChange({ target: { value } })
                      }
                    />
                  )}
                </Field> */}
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-holder has-icon">
                <label htmlFor="companyName">Company Name</label>
                <label htmlFor="label" className="icon-holder">
                  <BsSearch className="icon" size="28px" color="#A1A1A1" />
                </label>
                <Field
                  id="label"
                  type="text"
                  name="companyName"
                  placeholder="Webevis Technologies"
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-holder">
                <label htmlFor="website">Company Website</label>
                <Field
                  type="text"
                  name="website"
                  value={website}
                  onChange={handleWebsiteChange}
                />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="error-message"
                />
                {!isWebsiteValid && website.trim() !== "" && (
                  <p className="error-message">URL is invalid</p>
                )}
              </div>
              <div className="input-holder select-input">
                <label htmlFor="resources">Select Resources</label>
                <Select
                  className="Select"
                  closeMenuOnSelect={false}
                  isMulti
                  styles={colourStyles}
                  options={optionWithRandomColors}
                  hideSelectedOptions={false}
                  defaultValue={[]}
                  components={{
                    Option: InputOption,
                  }}
                  name="resources"
                />
                <ErrorMessage
                  name="resources"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="textarea">
              <label htmlFor="details">Share other important details</label>
              <Field
                component="textarea"
                rows={5}
                name="details"
                placeholder="Please share anything that will help prepare for our meeting."
              />
              <ErrorMessage
                name="details"
                component="div"
                className="error-message"
              />
            </div>
            <PrimaryButton
              height="50"
              minheight="40"
              size="23"
              weight="500"
              minsize="18"
              type="submit"
            >
              {"Let's"} E-Meet
            </PrimaryButton>
            <h3>
              Facing trouble in submitting the form? Simply mail us at{" "}
              <a href="mailto:info@webevis.com">info@webevis.com</a>
            </h3>
          </Form>
        )}
      </Formik>
    </ModalHolders>
  );
};

export default DeveloperModal;
