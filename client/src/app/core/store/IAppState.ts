export interface IAppState{
    vehicle1?,
    vehicle2?,
    milesDriven?: number,
    percentHighway?: number,
    location? :{
        zipcode?: number,
        city?: string,
        state?: string
    }
}