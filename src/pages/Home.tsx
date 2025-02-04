import { Container, Grid, Paper, Typography } from "@mui/material";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Home Page
      </Typography>

      <Grid container spacing={4}>
        {/* Counter Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Counter />
          </Paper>
        </Grid>

        {/* User Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <UserForm />
          </Paper>
        </Grid>

        {/* Rich Text Editor */}
        <Grid item xs={12}>
          <Paper sx={{ p: 4 }}>
            <RichTextEditor />
          </Paper>
        </Grid>

        {/* Dashboard Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 4 }}>
            <Dashboard />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
