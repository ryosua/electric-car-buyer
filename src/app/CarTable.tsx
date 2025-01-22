"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  ThemeProvider,
  Skeleton,
} from "@mui/material";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { CarModel } from "./types";
import { theme } from "./theme";

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

  const table = useReactTable({
    data: cars,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="electric cars table">
            <TableHead>
              <TableRow>
                {table
                  .getHeaderGroups()
                  .map((headerGroup) =>
                    headerGroup.headers.map((header) => (
                      <TableCell key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableCell>
                    ))
                  )}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};

export default CarTable;
