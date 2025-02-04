import { Button, Typography, Box, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { loginSuccess, logoutSuccess } from "../redux/authSlice";
import { signInWithGoogle, logout } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    const userData = await signInWithGoogle();
    if (userData) {
      dispatch(loginSuccess({ name: userData.displayName ?? '', email: userData.email ?? '', photoURL: userData.photoURL ?? '' }));
      navigate("/"); // Redirect to home after login
    }
  };

  const handleLogout = async () => {
    await logout();
    dispatch(logoutSuccess());
    navigate("/login"); //  Redirect to login page after logout
  };

  return (
    <Box textAlign="center" p={3}>
      {isAuthenticated ? (
        <>
          <Avatar src={user?.photoURL} sx={{ width: 60, height: 60, mx: "auto" }} />
          <Typography variant="h6">{user?.name}</Typography>
          <Typography variant="body2">{user?.email}</Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 2 }}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={handleLogin}>
          Sign In with Google
        </Button>
      )}
    </Box>
  );
};

export default Auth;
