export interface ElectricityData {
    name: string; //Primary key/identifier
    ACqty: number;
    AChrs: number;
    ACkWH: number;
    monthlyTotal: number;
    yearlyTotal: number;
    co2: number;
    notes?: string; //this is optional
}