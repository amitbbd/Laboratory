import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"; // Import Sidebar
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PriceList from "./pages/PriceList";
import Category from "./pages/Category";
import Calculator from "./pages/Calculator";
import Doctor from "./pages/Doctor";
import DoctorPatients from "./pages/DoctorPatients";
import Login from "./pages/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
      setUsername("");
  };

  return (
    <Router>
      <CssBaseline />
      {/* Render Header and Sidebar only if not on the Login page */}
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="*"
          element={
            <Box sx={{ display: "flex" }}>
              {/* Sidebar */}
              <Sidebar />

              {/* Main Content */}
              <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />

                {/* Page Content */}
                <Box sx={{ flex: 1, paddingTop: "64px" }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/price-list" element={<PriceList />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/doctor" element={<Doctor />} />
                    <Route path="/doctor-patients" element={<DoctorPatients />} />
                  </Routes>
                </Box>

                {/* Footer */}
                <Footer />
              </Box>
            </Box>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;