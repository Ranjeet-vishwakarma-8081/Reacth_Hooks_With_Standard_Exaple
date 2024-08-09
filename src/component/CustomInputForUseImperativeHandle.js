import React from "react";

export default function CustomInputForUseImperativeHandle({ style, ...props }) {
  return (
    <>
      <input
        type="text"
        {...props}
        style={{
          border: "none",
          backgroundColor: "lightpink",
          padding: "0.25rem",
          borderBottom: "0.1rem solid black",
          borderTopRightRadius: "0.25rem",
          borderTopLeftRadius: "0.25rem",
          ...style,
        }}
      />
    </>
  );
}
