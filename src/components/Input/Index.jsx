import React from "react";

const Input = ({ id, name, type, value, onChange, htmlFor, title }) => {
  return (
    <React.Fragment>
      <label htmlFor={htmlFor}>{title}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

export default Input;
