import React, { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffect() {
  const [show, setShow] = useState(false);

  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  useLayoutEffect(() => {
    if (!buttonRef.current || !popupRef.current) return;
    const { bottom, left } = buttonRef.current.getBoundingClientRect();

    popupRef.current.style.top = `${bottom + 25}px`;
    popupRef.current.style.left = `${left + 25}px`;
    console.log("left side px - ", left);
    console.log("bottom side px - ", bottom);
  }, [show]);

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>

      {show && (
        <div ref={popupRef} style={{ position: "absolute" }}>
          This is a popup
        </div>
      )}
    </>
  );
}
