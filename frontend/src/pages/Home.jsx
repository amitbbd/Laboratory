import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Light background for contrast
          py: 8,
          textAlign: "center",
        }}
      >
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", color: "#2E3B55" }}>
            Welcome to Atharv Pathology Lab
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: "#2E3B55" }}>
            Your trusted partner in accurate and reliable diagnostic services.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Book a Test
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#2E3B55",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          © 2025 Atharv Pathology Lab. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;