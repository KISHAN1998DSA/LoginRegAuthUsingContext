import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "./UserAuth/Auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  //const pages=['Home','SignIn','SignUp','Users'];
  const auth = useAuth();
  const nav = useNavigate();

  const handleSighOut = () => {
    auth.logout();
    nav("/");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MUI
            </Typography>

            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

            <Link to="/" underline="none">
              <Button color="inherit">{"Home"}</Button>
            </Link>
            {!auth.isAuth && (
              <Link to="/signup" underline="none">
                <Button color="inherit">{"SignUp"}</Button>
              </Link>
            )}
            <Link to="/users" color="white" underline="none">
              <Button color="inherit">{"Users"}</Button>
            </Link>
            {!auth.isAuth && (
              <Link to="/signin" color="white" underline="none">
                <Button color="inherit">{"SignIn"}</Button>
              </Link>
            )}
            {auth.isAuth && (
              <Button color="inherit" onClick={handleSighOut}>
                {"SignOut"}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Divider />
    </>
  );
};

export default Header;
