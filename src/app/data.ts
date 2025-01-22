import { CarModel } from "./types";

// Seeded random number generator
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // Simple random number generator with seed
  random(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  // Get random number within a range
  randomInRange(min: number, max: number, decimals = 0): number {
    const num = this.random() * (max - min) + min;
    return Number(num.toFixed(decimals));
  }
}

const rng = new SeededRandom(12345); // Fixed seed for consistent results

const brands = {
  luxury: ["Tesla", "Lucid", "BMW", "Mercedes-Benz", "Porsche", "Audi"],
  midRange: ["Volkswagen", "Hyundai", "Kia", "Ford", "Volvo", "Polestar"],
  economy: ["Chevrolet", "Nissan", "MG", "BYD", "Fiat", "Mini"],
};

const generateCarData = (): CarModel[] => {
  const cars: CarModel[] = [];
  const years = [2023, 2024];

  // Luxury segment
  brands.luxury.forEach((brand) => {
    // High-end models
    cars.push({
      brand,
      model: `Premium GT ${years[1]}`,
      basePrice: rng.randomInRange(80000, 130000),
      destCharge: rng.randomInRange(1200, 1500),
      taxCredit: rng.randomInRange(0, 7500),
      batterySize: rng.randomInRange(95, 120, 1),
      epaRange: rng.randomInRange(350, 520),
      zeroToSixty: rng.randomInRange(2.5, 3.5, 1),
      topSpeed: rng.randomInRange(155, 200),
      peakOutput: rng.randomInRange(500, 800),
      groundClearance: rng.randomInRange(5.0, 6.5, 1),
    });

    // Mid-range models
    cars.push({
      brand,
      model: `Sport ${years[1]}`,
      basePrice: rng.randomInRange(65000, 85000),
      destCharge: rng.randomInRange(1200, 1500),
      taxCredit: rng.randomInRange(0, 7500),
      batterySize: rng.randomInRange(85, 100, 1),
      epaRange: rng.randomInRange(300, 400),
      zeroToSixty: rng.randomInRange(3.5, 4.5, 1),
      topSpeed: rng.randomInRange(140, 165),
      peakOutput: rng.randomInRange(400, 600),
      groundClearance: rng.randomInRange(5.0, 6.5, 1),
    });

    // Base models
    cars.push({
      brand,
      model: `Standard ${years[1]}`,
      basePrice: rng.randomInRange(55000, 70000),
      destCharge: rng.randomInRange(1200, 1500),
      taxCredit: rng.randomInRange(0, 7500),
      batterySize: rng.randomInRange(75, 85, 1),
      epaRange: rng.randomInRange(250, 350),
      zeroToSixty: rng.randomInRange(4.5, 5.5, 1),
      topSpeed: rng.randomInRange(130, 150),
      peakOutput: rng.randomInRange(300, 450),
      groundClearance: rng.randomInRange(5.0, 6.5, 1),
    });
  });

  // Mid-range segment
  brands.midRange.forEach((brand) => {
    // Premium models
    cars.push({
      brand,
      model: `Premium EV ${years[1]}`,
      basePrice: rng.randomInRange(50000, 65000),
      destCharge: rng.randomInRange(1100, 1300),
      taxCredit: 7500,
      batterySize: rng.randomInRange(75, 85, 1),
      epaRange: rng.randomInRange(270, 350),
      zeroToSixty: rng.randomInRange(4.5, 5.5, 1),
      topSpeed: rng.randomInRange(125, 145),
      peakOutput: rng.randomInRange(250, 350),
      groundClearance: rng.randomInRange(6.0, 7.5, 1),
    });

    // Standard models
    cars.push({
      brand,
      model: `Standard EV ${years[1]}`,
      basePrice: rng.randomInRange(40000, 55000),
      destCharge: rng.randomInRange(1100, 1300),
      taxCredit: 7500,
      batterySize: rng.randomInRange(65, 75, 1),
      epaRange: rng.randomInRange(240, 300),
      zeroToSixty: rng.randomInRange(5.5, 6.5, 1),
      topSpeed: rng.randomInRange(115, 135),
      peakOutput: rng.randomInRange(200, 300),
      groundClearance: rng.randomInRange(6.0, 7.5, 1),
    });

    // Base models
    cars.push({
      brand,
      model: `Base EV ${years[1]}`,
      basePrice: rng.randomInRange(35000, 45000),
      destCharge: rng.randomInRange(1100, 1300),
      taxCredit: 7500,
      batterySize: rng.randomInRange(55, 65, 1),
      epaRange: rng.randomInRange(220, 280),
      zeroToSixty: rng.randomInRange(6.5, 7.5, 1),
      topSpeed: rng.randomInRange(110, 125),
      peakOutput: rng.randomInRange(150, 250),
      groundClearance: rng.randomInRange(6.0, 7.5, 1),
    });
  });

  // Economy segment
  brands.economy.forEach((brand) => {
    // Premium models
    cars.push({
      brand,
      model: `Premium EV ${years[1]}`,
      basePrice: rng.randomInRange(35000, 45000),
      destCharge: rng.randomInRange(1000, 1200),
      taxCredit: 7500,
      batterySize: rng.randomInRange(60, 70, 1),
      epaRange: rng.randomInRange(230, 280),
      zeroToSixty: rng.randomInRange(6.5, 7.5, 1),
      topSpeed: rng.randomInRange(110, 125),
      peakOutput: rng.randomInRange(150, 200),
      groundClearance: rng.randomInRange(6.5, 8.0, 1),
    });

    // Standard models
    cars.push({
      brand,
      model: `Standard EV ${years[1]}`,
      basePrice: rng.randomInRange(30000, 40000),
      destCharge: rng.randomInRange(1000, 1200),
      taxCredit: 7500,
      batterySize: rng.randomInRange(50, 60, 1),
      epaRange: rng.randomInRange(200, 250),
      zeroToSixty: rng.randomInRange(7.5, 8.5, 1),
      topSpeed: rng.randomInRange(100, 115),
      peakOutput: rng.randomInRange(125, 175),
      groundClearance: rng.randomInRange(6.5, 8.0, 1),
    });

    // Base models
    cars.push({
      brand,
      model: `Base EV ${years[1]}`,
      basePrice: rng.randomInRange(25000, 35000),
      destCharge: rng.randomInRange(1000, 1200),
      taxCredit: 7500,
      batterySize: rng.randomInRange(40, 50, 1),
      epaRange: rng.randomInRange(170, 220),
      zeroToSixty: rng.randomInRange(8.5, 9.5, 1),
      topSpeed: rng.randomInRange(90, 105),
      peakOutput: rng.randomInRange(100, 150),
      groundClearance: rng.randomInRange(6.5, 8.0, 1),
    });
  });

  // Add some special/limited editions
  brands.luxury.forEach((brand) => {
    cars.push({
      brand,
      model: `Performance Edition ${years[1]}`,
      basePrice: rng.randomInRange(120000, 180000),
      destCharge: rng.randomInRange(1300, 1600),
      taxCredit: 0,
      batterySize: rng.randomInRange(110, 130, 1),
      epaRange: rng.randomInRange(400, 550),
      zeroToSixty: rng.randomInRange(1.9, 2.5, 1),
      topSpeed: rng.randomInRange(175, 220),
      peakOutput: rng.randomInRange(750, 1000),
      groundClearance: rng.randomInRange(4.5, 5.5, 1),
    });
  });

  // Add some SUV variants
  [...brands.luxury, ...brands.midRange].forEach((brand) => {
    cars.push({
      brand,
      model: `SUV EV ${years[1]}`,
      basePrice: rng.randomInRange(55000, 90000),
      destCharge: rng.randomInRange(1200, 1500),
      taxCredit: brand in brands.luxury ? 0 : 7500,
      batterySize: rng.randomInRange(85, 105, 1),
      epaRange: rng.randomInRange(280, 380),
      zeroToSixty: rng.randomInRange(4.5, 6.0, 1),
      topSpeed: rng.randomInRange(130, 155),
      peakOutput: rng.randomInRange(350, 500),
      groundClearance: rng.randomInRange(8.0, 9.5, 1),
    });
  });

  // Add previous year models with slight discounts
  cars.push(
    ...cars.slice(0, 20).map((car) => ({
      ...car,
      model: car.model.replace(years[1].toString(), years[0].toString()),
      basePrice: Math.round(car.basePrice * 0.9),
    }))
  );

  return cars;
};

// Generate the data once and export it
const data: CarModel[] = generateCarData();
export default data;
