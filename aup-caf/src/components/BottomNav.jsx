import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useAuth } from "../util/AuthContext";

const BottomNav = () => {
  const { auth } = useAuth();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) navigate("/");
    else if (newValue === 1) navigate("/menu");
    else if (newValue === 2) {
      if (auth.isAuthenticated) navigate("/customer"); // or /admin, /staff depending on role
      else navigate("/login");
    }
  };

  return (
    <div className="navbar-mobile-screen">
      <Box sx={{ width: 500 }}>
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Menu" icon={<FavoriteIcon />} />
          <BottomNavigationAction
            label={auth.isAuthenticated ? "My Profile" : "Login"}
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default BottomNav;
