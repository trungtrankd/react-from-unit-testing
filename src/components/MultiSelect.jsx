import React from "react";
import PropTypes from "prop-types";

const MultiSelect = ({
  labelFor,
  label,
  className,
  value,
  onChange,
  children,
}) => (
  <div>
    <label htmlFor={labelFor}>{label}</label>
    <select
      multiple
      className={className}
      value={value}
      id={labelFor}
      name={labelFor}
      onClick={onChange}
    >
      {children}
    </select>
  </div>
);

MultiSelect.propTypes = {
  className: PropTypes.string,
  labelFor: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  label: PropTypes.string,
};

MultiSelect.defaultProps = {
  className: "form-group",
  labelFor: "checkbox",
  value: [],
  onChange() {},
  label: "MultiSelect",
};

export default MultiSelect;
