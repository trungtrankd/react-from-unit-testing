import React, { useState } from "react";

const Button = ({ href, children, ...rest }) => {
  const Tag = href ? "a" : "button";

  const [click, setClick] = useState(false)
  const onclickEvent = () => {
    setClick(prev => !prev)
  }
  return (
    <>
      <Tag href={href} onClick={onclickEvent} >
        Click Me!
      </Tag>
      <p>{click.toString()}</p>
    </>

  );
};

export default Button;
