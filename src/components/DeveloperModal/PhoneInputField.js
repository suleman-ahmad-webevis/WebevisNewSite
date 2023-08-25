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
        maxLength={15}
      />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="error-message">{form.errors[field.name]}</div>
      )}
    </div>
  );
};

export default PhoneInputField;
