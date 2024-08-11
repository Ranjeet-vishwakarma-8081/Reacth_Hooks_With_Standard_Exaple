import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Use forwardRef to pass the ref from parent to child component
const CustomInputForUseImperativeHandle = forwardRef((props, ref) => {
  // Ref to the close button
  const closeButtonRef = useRef();

  // Expose the focusCloseBtn method to the parent
  useImperativeHandle(ref, () => ({
    focusCloseBtn: () => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus(); // Focus the button
      }
    },
  }));

  return (
    <div>
      <button ref={closeButtonRef}>Close</button>
      {props.children}
    </div>
  );
});

export default CustomInputForUseImperativeHandle;

// import React, { forwardRef, useImperativeHandle, useRef } from "react";

// function CustomInputForUseImperativeHandle({ isOpen, onClose }, ref) {
//   const closeRef = useRef(null);
//   const confirmRef = useRef(null);
//   const denyRef = useRef(null);

//   // You can use these bellow three function outside the Module
//   useImperativeHandle(
//     ref,
//     () => {
//       return {
//         focusCloseBtn: () => closeRef.current.focus(),
//         focusConfirmBtn: () => confirmRef.current.focus(),
//         focusDenyBtn: () => denyRef.current.focus(),
//       };
//     },
//     []
//   );

//   if (!isOpen) return null;

//   return (

//     <div className="model" ref={ref}>
//       <button className="close-btn" ref={closeRef} onClick={onClose}>
//         &times;
//       </button>

//       <div className="model-header">
//         <h1>Title</h1>
//       </div>

//       <div className="model-body">Do you Confirm?</div>

//       <div className="model-footer">
//         <button className="confirm-btn" ref={confirmRef} onClick={onClose}>
//           Yes
//         </button>
//         <button className="deny-btn" ref={denyRef} onClick={onClose}>
//           Yes
//         </button>
//       </div>
//     </div>
//   );
// }

// export default forwardRef(CustomInputForUseImperativeHandle);

// import React, { forwardRef } from "react";

// function CustomInputForUseImperativeHandle({ style, ...props }, ref) {
//   return (
//     <>
//       <input
//         ref={ref}
//         {...props}
//         style={{
//           border: "none",
//           backgroundColor: "lightpink",
//           padding: "0.25rem",
//           borderBottom: "0.1rem solid black",
//           borderTopLeftRadius: "0.25rem",
//           ...style,
//         }}
//       />
//     </>
//   );
// }
// export default forwardRef(CustomInputForUseImperativeHandle);
