import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Card, Typography } from "@mui/material";

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Card sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h6">User Profile</Typography>
      <Typography variant="body1"><strong>Name:</strong> {user.name || "N/A"}</Typography>
      <Typography variant="body1"><strong>Email:</strong> {user.email || "N/A"}</Typography>
      <Typography variant="body1"><strong>Address:</strong> {user.address || "N/A"}</Typography>
      <Typography variant="body1"><strong>Phone:</strong> {user.phone || "N/A"}</Typography>
    </Card>
  );
};

export default UserProfile;
