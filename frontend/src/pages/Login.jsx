import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Checkbox, FormControlLabel, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(/microscopic.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
        },
      }}
    >
      {/* Transparent Header */}
      <Header hideHeader={true} />

      {/* Centered Login Block */}
      <Paper
        elevation={10}
        sx={{
          borderRadius: "16px",
          padding: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
          backdropFilter: "blur(8px)", // Blur effect
          width: "90%",
          maxWidth: "500px", // Adjust width for better focus
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Enhanced shadow
        }}
      >
        {/* Add a Logo or Icon */}
        <Box
          component="img"
          src="/pathology.png" // Replace with your logo path
          alt="Logo"
          sx={{ width: "80px", height: "80px", marginBottom: 2 }}
        />

        {/* Updated Color for "Atharv Pathology Lab" */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(45deg, #1976d2, #2196f3)", // Gradient color
            WebkitBackgroundClip: "text", // Apply gradient to text
            WebkitTextFillColor: "transparent", // Make text transparent
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Subtle text shadow
          }}
        >
          Atharv Pathology Lab
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ddd", // Light border color
                },
                "&:hover fieldset": {
                  borderColor: "#1976d2", // Highlight border on hover
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <Box sx={{ marginRight: 1, color: "#666" }}>👤</Box>
              ),
            }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ddd", // Light border color
                },
                "&:hover fieldset": {
                  borderColor: "#1976d2", // Highlight border on hover
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <Box sx={{ marginRight: 1, color: "#666" }}>🔒</Box>
              ),
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember Me"
            sx={{ marginTop: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: 2,
              padding: "12px",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #1976d2, #2196f3)",
              "&:hover": {
                background: "linear-gradient(45deg, #1565c0, #1e88e5)",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;