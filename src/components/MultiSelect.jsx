import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const MultiSelect = forwardRef(
  ({ labelFor, label, className, value, onChange, children }, ref) => (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <select
        ref={ref}
        multiple
        className={className}
        value={value}
        id={labelFor}
        name={labelFor}
        onClick={onChange}
        onChange={() => {}}
      >
        {children}
      </select>
    </div>
  )
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
