import { Container, Grid, Paper, Typography } from "@mui/material";
import Counter from "../components/Counter";

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

      
      </Grid>
    </Container>
  );
};

export default Home;
