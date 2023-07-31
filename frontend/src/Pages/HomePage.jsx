import React, { Children, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import TopMenuBar from "../Components/TopMenuBar";
import BottomMenuBar from "../Components/BottomMenuBar";
// import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    Color: "#29b6f6",
    secondary: "",
  },
});

function HomePage({ children }) {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("token") !== null &&
  //     localStorage.getItem("username") !== undefined
  //   ) {
  //     checkLogin(true);
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TopMenuBar />
        <main>{children}</main>
        <BottomMenuBar />
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
