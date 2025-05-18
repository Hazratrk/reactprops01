import React from "react";

function Button({ type, text }) {
  return (
    <button type={type} style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", marginTop: "10px", borderRadius: "5px" }}>
      {text}
    </button>
  );
}

export default Button;
