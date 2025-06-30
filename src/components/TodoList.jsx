"use client";
import { useState } from "react";

const TodoList = () => {
  const [state, setState] = useState("");
  const [list, setList] = useState([]);

  function HandleClick() {
    if (state.trim() !== "") {
      setList([...list, state]);
      setState(""); // Clear input after adding
    }
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "12px",
        backgroundColor: "#f5f7fa",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#0070f3", marginBottom: "20px" }}>
        📝 Todo List
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter a task..."
          style={{
            flexGrow: 1,
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          onClick={HandleClick}
          style={{
            padding: "10px 16px",
            fontSize: "16px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0059c1")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0070f3")}
        >
          Add
        </button>
      </div>

      <div>
        {list.length === 0 ? (
          <p style={{ color: "#777", fontStyle: "italic", textAlign: "center" }}>
            No tasks added yet.
          </p>
        ) : (
          list.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                marginBottom: "8px",
                backgroundColor: "#fff",
                borderRadius: "6px",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.03)",
              }}
            >
              ✅ {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
