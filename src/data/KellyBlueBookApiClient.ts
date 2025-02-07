/**
 * KellyBlueBookApiClient.ts
 * A small TypeScript client for interacting with Kelley Blue Book API.
 */

export type Vehicle = {
  make: string;
  model: string;
  year: number;
  price: number;
};

export type SearchVehiclesResponse = {
  results: Vehicle[];
};

export type VehicleReviews = {
  overall_rating: number;
  comfort_rating: number;
  performance_rating: number;
  reliability_rating: number;
};

export type VehicleValue = Vehicle & {
  estimated_value: number;
};

export class KelleyBlueBookApiClient {
  constructor(
    private apiKey: string,
    // Replace with the actual base URL for the KBB API.
    private baseUrl: string = "https://api.kbb.com"
  ) {}

  /**
   * Helper method to build request headers
   */
  private getRequestHeaders(): Record<string, string> {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  /**
   * Get Vehicle Information
   * Endpoint: GET /vehicles/{vehicle_id}
   */
  public async getVehicle(vehicleId: string): Promise<Vehicle> {
    const url = `${this.baseUrl}/vehicles/${encodeURIComponent(vehicleId)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: this.getRequestHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch vehicle (id: ${vehicleId}) — ${response.status} ${response.statusText}`
      );
    }
    const data = (await response.json()) as Vehicle;
    return data;
  }

  /**
   * Search for Vehicles
   * Endpoint: GET /vehicles/search?make={make}&model={model}&year={year}
   * `year` is optional; pass undefined or an empty string if not needed
   */
  public async searchVehicles(
    make: string,
    model: string,
    year?: number
  ): Promise<SearchVehiclesResponse> {
    const queryParams = new URLSearchParams({
      make: make,
      model: model,
    });

    // Only append year if it's defined
    if (year !== undefined && year !== null) {
      queryParams.append("year", String(year));
    }

    const url = `${this.baseUrl}/vehicles/search?${queryParams.toString()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: this.getRequestHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to search vehicles (make: ${make}, model: ${model}) — ${response.status} ${response.statusText}`
      );
    }
    const data = (await response.json()) as SearchVehiclesResponse;
    return data;
  }

  /**
   * Get Vehicle Reviews
   * Endpoint: GET /vehicles/{vehicle_id}/reviews
   */
  public async getVehicleReviews(vehicleId: string): Promise<VehicleReviews> {
    const url = `${this.baseUrl}/vehicles/${encodeURIComponent(
      vehicleId
    )}/reviews`;
    const response = await fetch(url, {
      method: "GET",
      headers: this.getRequestHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch reviews (id: ${vehicleId}) — ${response.status} ${response.statusText}`
      );
    }
    const data = (await response.json()) as VehicleReviews;
    return data;
  }

  /**
   * Get Vehicle Value
   * Endpoint: GET /vehicles/{vehicle_id}/value
   */
  public async getVehicleValue(vehicleId: string): Promise<VehicleValue> {
    const url = `${this.baseUrl}/vehicles/${encodeURIComponent(
      vehicleId
    )}/value`;
    const response = await fetch(url, {
      method: "GET",
      headers: this.getRequestHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch vehicle value (id: ${vehicleId}) — ${response.status} ${response.statusText}`
      );
    }
    const data = (await response.json()) as VehicleValue;
    return data;
  }
}

// Example usage:
// (You'd typically put this in another file where you import the client.)
//
// const client = new KelleyBlueBookApiClient("YOUR_API_KEY_HERE");
// client.getVehicle("12345").then((vehicle) => console.log(vehicle));
