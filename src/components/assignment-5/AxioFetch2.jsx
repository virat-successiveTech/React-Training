"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function AxioFetch2() {
  const [mydata, setmydata] = useState([]);
  const [error, seterror] = useState(null);

  const fetchdata = async () => {
    try {
      const fetchdata = await axios.get("https://jsonplaceholder.typicode.com/users");
      setmydata(fetchdata.data);
      seterror(false);
    } catch (error) {
      console.log("erorrrr");
      seterror(true);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <p style={{ color: "red", fontSize: 18 }}>Failed to fetch data.</p>
        <button
          onClick={fetchdata}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>User List</h2>
      {mydata.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              padding: 12,
              marginBottom: 12,
              backgroundColor: "#fff",
              borderRadius: 6,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              fontSize: 16,
              color: "#333",
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
