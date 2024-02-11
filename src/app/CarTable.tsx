import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CarModel } from "./types";

type Props = {
  cars: CarModel[];
};

const CarTable = ({ cars }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell align="right">Base Price</TableCell>
            <TableCell align="right">Destination Charge</TableCell>
            <TableCell align="right">Tax Credit</TableCell>
            <TableCell align="right">Battery Size (kWh)</TableCell>
            <TableCell align="right">EPA Range (miles)</TableCell>
            <TableCell align="right">0-60 mph (seconds)</TableCell>
            <TableCell align="right">Top Speed (mph)</TableCell>
            <TableCell align="right">Peak Output (kW)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow key={car.model}>
              <TableCell component="th" scope="row">
                {car.brand}
              </TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell align="right">{car.basePrice}</TableCell>
              <TableCell align="right">{car.destCharge}</TableCell>
              <TableCell align="right">{car.taxCredit}</TableCell>
              <TableCell align="right">{car.batterySize}</TableCell>
              <TableCell align="right">{car.epaRange}</TableCell>
              <TableCell align="right">{car.zeroToSixty}</TableCell>
              <TableCell align="right">{car.topSpeed}</TableCell>
              <TableCell align="right">{car.peakOutput}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarTable;
