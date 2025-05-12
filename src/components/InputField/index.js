import React from "react";

const InputField = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
