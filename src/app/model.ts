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
export interface WaterHeaterData {
    name: string; //Primary key/identifier
    WHqty: number;
    WHhrs: number;
    WHkWH: number;
    WHmonthlyTotal: number;
    WHyearlyTotal: number;
    WHco2: number;
}
export interface DryerData {
    name: string; //Primary key/identifier
    CDqty: number;
    CDhrs: number;
    CDkWH: number;
    CDmonthlyTotal: number;
    CDyearlyTotal: number;
    CDco2: number;
}
