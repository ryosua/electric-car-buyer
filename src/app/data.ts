import { CarModel } from "./types";

// Not real data, just for testing.
const dummyData: CarModel[] = [
  {
    brand: "Tesla",
    model: "Model 3",
    basePrice: 39990,
    destCharge: 1200,
    taxCredit: 7500,
    batterySize: 75,
    epaRange: 263,
    zeroToSixty: 5.3,
    topSpeed: 140,
    peakOutput: 239,
  },
  {
    brand: "Chevrolet",
    model: "Bolt",
    basePrice: 39995,
    destCharge: 995,
    taxCredit: 7500,
    batterySize: 66,
    epaRange: 259,
    zeroToSixty: 6.5,
    topSpeed: 93,
    peakOutput: 200,
  },
  {
    brand: "Nissan",
    model: "Leaf",
    basePrice: 27490,
    destCharge: 925,
    taxCredit: 7500,
    batterySize: 40,
    epaRange: 149,
    zeroToSixty: 7.4,
    topSpeed: 89,
    peakOutput: 147,
  },
];

export default dummyData;
