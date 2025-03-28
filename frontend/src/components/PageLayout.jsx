import React from "react";
import { Box, Typography, TextField, IconButton, Tooltip, InputAdornment } from "@mui/material";
import { Add, Search } from "@mui/icons-material";

const PageLayout = ({ title, searchTerm, onSearchChange, onAddClick }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
      {/* Search Bar */}
      <Box sx={{ flex: 1, maxWidth: "300px" }}>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={onSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Box>

      {/* Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2E3B55", flex: 1, textAlign: "center" }}>
        {title}
      </Typography>

      {/* Add Button */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <Tooltip title="Add New Data">
          <IconButton
            color="primary"
            onClick={onAddClick}
            sx={{
              backgroundColor: "#2E3B55",
              "&:hover": { backgroundColor: "#1A2332" },
            }}
          >
            <Add sx={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default PageLayout;