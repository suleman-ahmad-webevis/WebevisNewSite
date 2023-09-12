import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneInputField = ({ field, form, ...props }) => {
  const handleChange = (value) => {
    form.setFieldValue(field.name, value);
  };

  const handleBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <div>
      <PhoneInput
        {...field}
        {...props}
        value={field.value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        defaultCountry="US"
        placeholder="xxxx-xxxxxxx"
      />
    </div>
  );
};

export default PhoneInputField;

// import React from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { PhoneInputContainer } from "./DeveloperModals.styles";

// const PhoneInputField = ({ field, form, ...props }) => {
//   const handleChange = (value) => {
//     form.setFieldValue(field.name, value);
//   };

//   const handleBlur = () => {
//     form.setFieldTouched(field.name, true);
//   };

//   const hasError = form.touched[field.name] && form.errors[field.name];

//   return (
//     <PhoneInputContainer>
//       <div className={`phone-input-field ${hasError ? "error" : ""}`}>
//         <PhoneInput
//           {...field}
//           {...props}
//           value={field.value || ""}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           defaultCountry="US"
//           maxLength={15}
//           className={hasError ? "error-input" : ""}
//           placeholder="xxxx-xxxxxxx"
//         />
//       </div>
//     </PhoneInputContainer>
//   );
// };

// export default PhoneInputField;
