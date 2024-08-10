import React, { forwardRef } from "react";

 function CustomInputForUseImperativeHandle({ style, ...props },ref) {
  return (
    <>
      <input
      ref={ref}
        {...props}
        style={{
          border: "none",
          backgroundColor: "lightpink",
          padding: "0.25rem",
          borderBottom: "0.1rem solid black",
          borderTopLeftRadius: "0.25rem",
          ...style,
        }}
      />
    </>
  );
}
export default forwardRef(CustomInputForUseImperativeHandle)
