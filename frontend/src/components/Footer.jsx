import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2023 My App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;