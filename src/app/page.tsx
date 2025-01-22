import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import {
  ArrowForward,
  BatteryChargingFull,
  CompareArrows,
  Speed,
  SvgIconComponent,
} from "@mui/icons-material";
import Link from "next/link";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: SvgIconComponent;
};

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <Icon sx={{ fontSize: 48, mb: 2, color: "primary.main" }} />
    <Typography variant="h5" component="h3" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

const Home = () => (
  <Container maxWidth="lg">
    <Box sx={{ my: 8, textAlign: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Electric Car Buyer
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Make informed decisions about your next electric vehicle purchase
      </Typography>

      <Link href="/compare" passHref style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ mb: 8 }}
        >
          Compare Cars Now
        </Button>
      </Link>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Smart Comparison"
            description="Compare multiple electric vehicles side by side with our intuitive comparison tool. Analyze range, price, features, and more at a glance."
            icon={CompareArrows}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Range Insights"
            description="Get detailed information about real-world range performance under different conditions. Make sure your chosen EV meets your daily driving needs."
            icon={BatteryChargingFull}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            title="Performance Metrics"
            description="Access comprehensive performance data including acceleration, top speed, and charging capabilities to find the perfect balance of power and efficiency."
            icon={Speed}
          />
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default Home;
