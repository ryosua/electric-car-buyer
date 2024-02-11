export type CarModel = {
  brand: string;
  model: string;
  basePrice: number;
  destCharge: number;
  taxCredit: number;
  /**
   * in kWh
   */
  batterySize: number;
  /**
   * in miles
   */
  epaRange: number;
  /**
   * in seconds
   */
  zeroToSixty: number;
  /**
   * in mph
   */
  topSpeed: number;
  /**
   * in kW
   */
  peakOutput: number;
};
