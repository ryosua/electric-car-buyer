import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import {
  ArrowForward,
  BatteryChargingFull,
  CompareArrows,
  Speed,
} from "@mui/icons-material";
import Link from "next/link";
import FeatureCard from "./components/FeatureCard";

// For MUI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const LandingPage = () => (
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

      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FeatureCard
            title="Smart Comparison"
            description="Compare multiple electric vehicles side by side with our intuitive comparison tool. Analyze range, price, features, and more at a glance."
            icon={CompareArrows}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FeatureCard
            title="Range Insights"
            description="Get detailed information about real-world range performance under different conditions. Make sure your chosen EV meets your daily driving needs."
            icon={BatteryChargingFull}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FeatureCard
            title="Performance Metrics"
            description="Access comprehensive performance data including acceleration, top speed, and charging capabilities to find the perfect balance of power and efficiency."
            icon={Speed}
          />
        </Grid2>
      </Grid2>
    </Box>
  </Container>
);

export default LandingPage;
