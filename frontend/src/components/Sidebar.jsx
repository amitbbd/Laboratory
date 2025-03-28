import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Assignment as TestPriceIcon,
  Category as CategoryIcon,
  Calculate as CalculateIcon,
  People as DoctorPatientsIcon,
  EmojiPeople as DoctorIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const menuItems = [
    { name: "Test Price", path: "/price-list", icon: <TestPriceIcon /> },
    { name: "Category", path: "/category", icon: <CategoryIcon /> },
    { name: "Calculate Test Price", path: "/calculator", icon: <CalculateIcon /> },
    { name: "Doctor List", path: "/doctor", icon: <DoctorIcon /> },
    { name: "Doctor Patients", path: "/doctor-patients", icon: <DoctorPatientsIcon /> },
  ];

  return (
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1A2332", // Custom color for sidebar
        color: "white",
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        marginTop: "64px", // Add margin to account for the header height
      }}
    >
      <List sx={{ padding: 0 }}> {/* Remove padding from the List */}
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.name}
            component={Link}
            to={item.path}
            sx={{
              "&:hover": {
                backgroundColor: "#2E3B55", // Hover color
              },
              paddingLeft: "16px", // Adjust padding for alignment (reduce to 0 if needed)
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: "40px" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }} />
    </Box>
  );
};

export default Sidebar;