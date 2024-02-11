import { Typography } from "@mui/material";
import CarTable from "./CarTable";
import carData from "./data";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Home = () => (
  <>
    <Typography variant="h1">Electric Car Buyer</Typography>
    <CarTable cars={carData} />
  </>
);

export default Home;
