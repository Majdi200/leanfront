import React from "react";

export default function MyButton({ text, clbk, elementClass }) {
  return (
    <button className={elementClass} onClick={clbk}>
      {text}
    </button>
  );
}
