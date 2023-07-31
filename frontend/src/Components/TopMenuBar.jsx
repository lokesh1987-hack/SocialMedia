import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import CreaterModal from "../Modals/CreaterModal";
import PostCreaterModal from "../Modals/PostCreaterModal";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));

function TopMenuBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [createrModal, SetCreaterModal] = useState(false);
  const [createPostModal, setCreatePostModal] = useState(false);

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleCreate = (data) => {
    SetCreaterModal(false);
    setCreatePostModal(true);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
              alt="not"
              sizes="small"
            />
          </IconButton>
          {showSearch ? (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginRight: "6%",
                width: "100%",
              }}
            >
              <SearchIcon onClick={() => handleSearch()} />
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            onClick={() => {
              SetCreaterModal(true);
            }}
            color="inherit"
            aria-label="createrModal drawer"
          >
            <AddBoxOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <CreaterModal
        open={createrModal}
        handleClose={() => {
          SetCreaterModal(false);
        }}
        handleCreate={handleCreate}
      />

      <PostCreaterModal
        open={createPostModal}
        handleClose={() => {
          setCreatePostModal(false);
          SetCreaterModal(true);
        }}
      />
    </div>
  );
}

export default TopMenuBar;
