"use client";
import { useState } from "react";

const Show = () => {
  const [value, setValue] = useState(" ");
  const [state, setState] = useState(" ");

  function showMessage() {
    setValue(state);
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#fdfdfd",
      }}
    >
      <input
        placeholder="Enter the message to be displayed"
        onChange={(e) => {
          setState(e.target.value);
        }}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <div>
        <button
          onClick={showMessage}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005ac1")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0070f3")}
        >
          SHOW
        </button>

        <div
          style={{
            marginTop: "10px",
            fontSize: "18px",
            color: "#333",
          }}
        >
          The updated value: <strong>{value}</strong>
        </div>
      </div>
    </div>
  );
};

export default Show;
