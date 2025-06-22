import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BottomNav = () => {
 
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Navigate based on which tab is clicked
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/menu");
        break;
      case 2:
        navigate("/login");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="navbar-mobile-screen">
        <Box sx={{ width: 500 }}>
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Menu" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Login" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
};

export default BottomNav;
