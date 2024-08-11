import React, { useRef } from "react";
import CustomInputForUseImperativeHandle from "./CustomInputForUseImperativeHandle.js";

function UseImperativeHandle() {
  // Create a ref to hold the Modal component's instance
  const modalRef = useRef();

  const handleButtonClick = () => {
    if (modalRef.current) {
      modalRef.current.focusCloseBtn(); // Call the method to focus the close button
    }
  };

  return (
    <div>
      <CustomInputForUseImperativeHandle ref={modalRef}>
        <p>Some content in the modal...</p>
      </CustomInputForUseImperativeHandle>
      <button onClick={handleButtonClick}>Focus Close Button in Modal</button>
    </div>
  );
}

export default UseImperativeHandle;

// import React, { useRef, useState } from "react";
// import CustomInputForUseImperativeHandle from "./CustomInputForUseImperativeHandle.js";

// export default function UseImperativeHandle() {
//   const [open, setOpen] = useState(false);
//   const modelRef = useRef(null);

//   function handleOpen() {
//     setOpen(true);
//   }

//   return (
//     <>
//       <button onClick={handleOpen}>Open</button>
//       <button onClick={() => modelRef.current.focusCloseBtn()}>
//         Focus Close
//       </button>
//       <button onClick={() => modelRef.current.focusConfirmBtn()}>
//         Focus Confirm
//       </button>
//       <button onClick={() => modelRef.current.focusDenyBtn()}>
//         Focus Deny
//       </button>

//       <CustomInputForUseImperativeHandle
//         ref={modelRef}
//         isOpen={open}
//         onClose={() => setOpen(false)}
//       />
//     </>
//   );
// }

// import React, { useRef, useState } from "react";
// import CustomInputForUseImperativeHandle from "./CustomInputForUseImperativeHandle.js";

// export default function UseImperativeHandle() {
//   const [value, setValue] = useState("red");
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }
//   return (
//     <>
//       <CustomInputForUseImperativeHandle
//         type="text"
//         ref={inputRef}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         style={{}}
//       />
//       <button onClick={handleClick}>Focus input</button>
//     </>
//   );
// }
