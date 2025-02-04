import { Container, Grid, Paper, Typography } from "@mui/material";
import Counter from "./Counter";
import UserProfileChart from "./UserProfileChart";
import UserProfile from "./UserProfile";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4, textAlign: "center" }}>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        {/* Counter Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Counter />
          </Paper>
        </Grid>

        {/* User Profile */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <UserProfile />
          </Paper>
        </Grid>

        {/* Profile Views Trend */}
        <Grid item xs={12} md={12}>
          <Paper sx={{ p: 4 }}>
            <UserProfileChart />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
