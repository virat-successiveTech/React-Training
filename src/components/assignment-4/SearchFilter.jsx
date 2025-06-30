"use client";
import { useState } from "react";

const SearchFilter = () => {
  const items = [
    "Learn React Basics",
    "Build a To-Do App",
    "Understand useState & useEffect",
    "Work with Props and Components",
    "Handle Events in React",
    "Style Components with CSS",
    "Integrate an API",
    "Implement Routing with React Router",
    "Deploy the App",
  ];

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  function search() {
    const result = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
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
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#0070f3" }}>
        🔍 React Topics Search
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a topic..."
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
          onClick={search}
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
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0059c1";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#0070f3";
          }}
        >
          Search
        </button>
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {filtered.length === 0 ? (
          <li style={{ color: "#888", fontStyle: "italic", textAlign: "center" }}>
            No results found
          </li>
        ) : (
          filtered.map((item, index) => (
            <li
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
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
