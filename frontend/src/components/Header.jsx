import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, username, onLogout, transparent = false, hideHeader = false }) => {
  if (hideHeader) return null; // Hide the header if hideHeader is true

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        backgroundColor: "#2E3B55", // Custom color for header
        boxShadow: transparent ? "none" : "default",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Box
          component="img"
          src="/pathology.png" // Replace with your logo path
          alt="Logo"
          sx={{ height: "40px", marginRight: 2 }}
        />

        {/* App Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Atharv Pathology Lab
        </Typography>

        {/* User Info and Logout */}
        {isLoggedIn ? (
          <>
            <Typography variant="subtitle1" sx={{ marginRight: 2 }}>
              Welcome, {username}
            </Typography>
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;