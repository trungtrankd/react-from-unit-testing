import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(
  ({ labelFor, label, type, name, id, value, onChange, className }, ref) => {
    return (
      <div className="form-group">
        <label htmlFor={labelFor}>{label}</label>
        <input
          ref={ref}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={className}
        />
      </div>
    );
  }
);

TextInput.propTypes = {
  label: PropTypes.string,
  labelFor: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

TextInput.defaultProps = {
  label: "Text Input",
  labelFor: "text input",
  value: "Hello Text Input",
  onChange() {},
  id: "input",
  name: "input",
  type: "input",
  className: "form-control",
};

export default TextInput;
