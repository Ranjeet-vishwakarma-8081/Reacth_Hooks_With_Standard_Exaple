import React, { useId } from "react";

export default function EmailFormforUseId() {
  const idForEmail = useId();
  return (
    <>
      <label htmlFor={idForEmail}>Email :</label>
      <input type="email" name="" id={idForEmail} />
    </>
  );
}
