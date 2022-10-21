import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "./header.scss";

const pages = [
  {
    id: 1,
    heading: "UI Kits",
    link: "/",
  },
  {
    id: 2,
    heading: "Mockups",
    link: "/",
  },
  {
    id: 3,
    heading: "Icon Sets",
    link: "/",
  },
  {
    id: 4,
    heading: "Images",
    link: "/",
  },
  {
    id: 5,
    heading: "Vectors",
    link: "/",
  },
];
const settings = ["Account", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="navBar_main_container">
      <AppBar position="static" className="appBar_main_top">
        <Container maxWidth="xl" className="navBar__container">
          <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />
            <Box className="LeftNav_main">
              <Link
                to="/"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  textDecoration: "none",
                }}
                className="logoHeader_mobile"
              >
                <img width={155} src={"/assets/footerLogo.png"} />
              </Link>

              {/* For Pc */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
                className="middleNav_main"
              >
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                    to={page.link}
                  >
                    {page.heading}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* for mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.heading}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <img src={"/assets/logoNew.png"} />
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                justifyContent: "space-around",
                width: "10%",
              }}
              className="menuItemList_right_top"
            >
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <img src={"/assets/header/moon.png"} />
                </IconButton>
              </Tooltip>

              <Tooltip className="cartIcon_top" title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <img src={"/assets/header/shopping-cart.png"} />{" "}
                  <span className="cartItems">0</span>
                </IconButton>
              </Tooltip>

              <Button className="contact_buttonHeader" variant="outlined">
                Contact me
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
