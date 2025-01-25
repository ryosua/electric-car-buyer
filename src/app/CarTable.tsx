"use client";

import React, { useState, useEffect } from "react";
import { Typography, Box, ThemeProvider, Skeleton } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import { CarModel } from "./types";
import { theme } from "./theme";
import Table from "./components/Table";

type Props = {
  cars: CarModel[];
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CarTable = ({ cars }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const columns = React.useMemo<ColumnDef<CarModel>[]>(
    () => [
      {
        accessorKey: "brand",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Brand
          </Typography>
        ),
      },
      {
        accessorKey: "model",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Model
          </Typography>
        ),
      },
      {
        accessorKey: "basePrice",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Base Price
          </Typography>
        ),
        cell: (info) => formatCurrency(info.getValue<number>()),
      },
      {
        accessorKey: "destCharge",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Destination Charge
          </Typography>
        ),
        cell: (info) => formatCurrency(info.getValue<number>()),
      },
      {
        accessorKey: "taxCredit",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Tax Credit
          </Typography>
        ),
        cell: (info) => formatCurrency(info.getValue<number>()),
      },
      {
        accessorKey: "batterySize",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Battery Size
          </Typography>
        ),
        cell: (info) => `${info.getValue<number>()} kWh`,
      },
      {
        accessorKey: "epaRange",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            EPA Range
          </Typography>
        ),
        cell: (info) => `${info.getValue<number>()} miles`,
      },
      {
        accessorKey: "zeroToSixty",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            0-60 mph
          </Typography>
        ),
        cell: (info) =>
          info.getValue<number>() ? `${info.getValue<number>()} sec` : "N/A",
      },
      {
        accessorKey: "topSpeed",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Top Speed
          </Typography>
        ),
        cell: (info) =>
          info.getValue<number>() ? `${info.getValue<number>()} mph` : "N/A",
      },
      {
        accessorKey: "peakOutput",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Peak Output
          </Typography>
        ),
        cell: (info) => `${info.getValue<number>()} kW`,
      },
      {
        accessorKey: "groundClearance",
        header: () => (
          <Typography variant="subtitle1" fontWeight="bold">
            Ground Clearance
          </Typography>
        ),
        cell: (info) =>
          info.getValue<number>() ? `${info.getValue<number>()}"` : "N/A",
      },
    ],
    []
  );

  if (!mounted) {
    return (
      <Box sx={{ p: 3, maxWidth: "100%" }}>
        <Skeleton variant="rectangular" height={400} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 3, maxWidth: "100%" }}>
        <Typography variant="h2" gutterBottom>
          Electric Vehicle Comparison
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 4 }}>
          Compare specifications and prices of available electric vehicles
        </Typography>
        <Table data={cars} columns={columns} />
      </Box>
    </ThemeProvider>
  );
};

export default CarTable;
