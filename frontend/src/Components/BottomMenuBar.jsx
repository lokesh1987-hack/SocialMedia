import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { useNavigate } from "react-router-dom";

function BottomMenuBar() {
  const navigate = useNavigate();
  const handlerRoute = (route) => {
    navigate(route);
  };
  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="inherit" aria-label="open drawer">
            <HomeRoundedIcon
              onClick={() => {
                handlerRoute("/");
              }}
            />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <LocalPostOfficeIcon
              onClick={() => {
                handlerRoute("/posts");
              }}
            />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <SlowMotionVideoIcon
              onClick={() => {
                handlerRoute("/reels");
              }}
            />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <AccountCircleIcon
              onClick={() => {
                handlerRoute("/profile");
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BottomMenuBar;
