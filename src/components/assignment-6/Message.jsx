const Message = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          fontFamily: "Arial, sans-serif",
          color: "#333",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontWeight: "600", fontSize: "1.5rem", lineHeight: "1.4" }}>
          All the test cases for the questions have been written. Please type <code>npm run test</code> to check.
        </h1>
      </div>
    </div>
  );
};

export default Message;
