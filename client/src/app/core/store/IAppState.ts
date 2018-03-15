import { PhysicalLocation } from "../models/physical-location";

export interface IAppState {
    vehicle1?,
    vehicle2?,
    years?: number[],
    bodyStyles?: string[],
    
    milesDriven?: number,
    percentHighway?: number,
    location?: PhysicalLocation
}