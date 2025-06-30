"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CssBaseline,
  Container,
} from "@mui/material";

export default function MuiForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      
      setFormData({ name: "", email: "" });
      setErrors({ name: "", email: "" });
    }
  };

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          p: 4,
          backgroundColor: "#f5f7fa",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" mb={3} color="#0070f3">
          📝 Contact Form
        </Typography>

        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#0070f3",
            "&:hover": {
              backgroundColor: "#0059c1",
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
