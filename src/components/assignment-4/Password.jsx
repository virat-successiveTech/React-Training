"use client";

import { useState } from "react";

const Password = () => {
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");

  function checkSubmit(e) {
    e.preventDefault();

    if (pass === rePass) {
      alert("Form Submitted");
    } else {
      alert("Passwords don't match");
    }
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#fefefe",
      }}
    >
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPass(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="password"
        placeholder="Re-enter Password"
        onChange={(e) => setRePass(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={checkSubmit}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#005ac1")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0070f3")}
      >
        Submit
      </button>
    </div>
  );
};

export default Password;
