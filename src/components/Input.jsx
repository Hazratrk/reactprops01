import React from "react";

function Input({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }} />;
}

export default Input;
