"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { CarModel } from "./types";

type Props = {
  cars: CarModel[];
};

const CarTable = ({ cars }: Props) => {
  const columns = React.useMemo<ColumnDef<CarModel>[]>(
    () => [
      {
        accessorKey: "brand",
        header: () => <span>Brand</span>,
      },
      {
        accessorKey: "model",
        header: () => <span>Model</span>,
      },
      {
        accessorKey: "basePrice",
        header: () => <span>Base Price</span>,
      },
      {
        accessorKey: "destCharge",
        header: () => <span>Destination Charge</span>,
      },
      {
        accessorKey: "taxCredit",
        header: () => <span>Tax Credit</span>,
      },
      {
        accessorKey: "batterySize",
        header: () => <span>Battery Size (kWh)</span>,
      },
      {
        accessorKey: "epaRange",
        header: () => <span>EPA Range (miles)</span>,
      },
      {
        accessorKey: "zeroToSixty",
        header: () => <span>0-60 mph (seconds)</span>,
      },
      {
        accessorKey: "topSpeed",
        header: () => <span>Top Speed (mph)</span>,
      },
      {
        accessorKey: "peakOutput",
        header: () => <span>Peak Output (kW)</span>,
      },
      {
        accessorKey: "groundClearance",
        header: () => <span>Ground Clearance (inches)</span>,
      },
    ],
    []
  );

  const table = useReactTable({
    data: cars,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarTable;
