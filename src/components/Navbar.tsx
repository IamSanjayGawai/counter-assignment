import { AppBar, Toolbar, Button, Typography, Avatar, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {  logoutSuccess } from "../redux/authSlice";
import {  logout } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    await logout();
    dispatch(logoutSuccess());
    navigate("/login"); // Redirect to Login page after logout
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">My App</Typography>
        
        {isAuthenticated ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={user?.photoURL} sx={{ width: 40, height: 40 }} />
            <Typography>{user?.name}</Typography>
            <Button color="inherit" onClick={handleLogout}>Sign Out</Button>
          </Box>
        ) : (
""
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
