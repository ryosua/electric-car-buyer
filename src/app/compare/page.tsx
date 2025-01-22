"use client";

import { Box, Container, Typography } from "@mui/material";
import CarTable from "../CarTable";
import CarFilters from "../components/CarFilters";
import carData from "../data";
import { useState } from "react";
import type { CarModel } from "../types";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const ComparePage = () => {
  const [filteredCars, setFilteredCars] = useState<CarModel[]>(carData);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Compare Electric Cars
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Compare specifications and features of different electric vehicles to
          find your perfect match.
        </Typography>

        <CarFilters cars={carData} onFilterChange={setFilteredCars} />
        <CarTable cars={filteredCars} />
      </Box>
    </Container>
  );
};

export default ComparePage;
