import { PhysicalLocation } from "../models/physical-location";

export interface IAppState{
    vehicle1?,
    vehicle2?,
    milesDriven?: number,
    percentHighway?: number,
    location? : PhysicalLocation
}