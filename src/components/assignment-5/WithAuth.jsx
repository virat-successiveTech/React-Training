"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WithAuth(Component) {
  return function Auth(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    const authDetails = (e) => {
      e.preventDefault();
      if (!email || !name) {
        router.push("home");
      } else {
        alert("LOGGED IN SUCCESSFULLY");
      }
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "320px",
          margin: "2rem auto",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#fafafa",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
       
        <Component
          {...props}
          name={name}
          email={email}
          authDetails={authDetails}
        />
      </div>
    );
  };
}
