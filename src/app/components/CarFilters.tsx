"use client";

import {
  Box,
  TextField,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid2,
  Typography,
} from "@mui/material";
import { CarModel } from "../types";
import { useState, useEffect } from "react";

export type FilterState = {
  search: string;
  minPrice: number;
  maxPrice: number;
  minRange: number;
  maxRange: number;
  brand: string;
};

type Props = {
  cars: CarModel[];
  onFilterChange: (filteredCars: CarModel[]) => void;
};

const getInitialPriceRange = (cars: CarModel[]) => {
  const prices = cars.map((car) => car.basePrice);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};

const getInitialRangeValues = (cars: CarModel[]) => {
  const ranges = cars.map((car) => car.epaRange);
  return {
    min: Math.min(...ranges),
    max: Math.max(...ranges),
  };
};

const CarFilters = ({ cars, onFilterChange }: Props) => {
  const priceRange = getInitialPriceRange(cars);
  const rangeValues = getInitialRangeValues(cars);

  const [mounted, setMounted] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
    minRange: rangeValues.min,
    maxRange: rangeValues.max,
    brand: "all",
  });

  const brands = ["all", ...Array.from(new Set(cars.map((car) => car.brand)))];

  // Only show client-side components after first render
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const filteredCars = cars.filter((car) => {
      const matchesSearch =
        car.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.model.toLowerCase().includes(filters.search.toLowerCase());

      const matchesPrice =
        car.basePrice >= filters.minPrice && car.basePrice <= filters.maxPrice;

      const matchesRange =
        car.epaRange >= filters.minRange && car.epaRange <= filters.maxRange;

      const matchesBrand =
        filters.brand === "all" || car.brand === filters.brand;

      return matchesSearch && matchesPrice && matchesRange && matchesBrand;
    });

    onFilterChange(filteredCars);
  }, [filters, cars, onFilterChange]);

  if (!mounted) {
    return null; // Prevent hydration errors by not rendering until client-side
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Search cars"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <Select
              value={filters.brand}
              label="Brand"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, brand: e.target.value }))
              }
            >
              {brands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Typography gutterBottom>Price Range ($)</Typography>
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onChange={(_, newValue: number | number[]) => {
              const [min, max] = newValue as number[];
              setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
            }}
            valueLabelDisplay="auto"
            min={priceRange.min}
            max={priceRange.max}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <Typography gutterBottom>EPA Range (miles)</Typography>
          <Slider
            value={[filters.minRange, filters.maxRange]}
            onChange={(_, newValue: number | number[]) => {
              const [min, max] = newValue as number[];
              setFilters((prev) => ({ ...prev, minRange: min, maxRange: max }));
            }}
            valueLabelDisplay="auto"
            min={rangeValues.min}
            max={rangeValues.max}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CarFilters;
