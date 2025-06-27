"use client";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#f9fafb",
        }}
      >
        {/* Top Navigation Bar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
            gap: "20px",
          }}
        >
          <Link href="/assignment-4/question-1">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0059c1";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#0070f3";
              }}
            >
              Question 1
            </button>
          </Link>

          <Link href="/assignment-4/question-2">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0059c1";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#0070f3";
              }}
            >
              Question 2
            </button>
          </Link>

          <Link href="/assignment-4/question-3">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0059c1";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#0070f3";
              }}
            >
              Question 3
            </button>
          </Link>
    
  <Link href="/assignment-4/question-4">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0059c1";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#0070f3";
              }}
            >
              Question 4
            </button>
          </Link>

  <Link href="/assignment-4/question-5">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0059c1";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#0070f3";
              }}
            >
              Question 5
            </button>
          </Link>

        </nav>

        {/* Main content below navigation */}
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
