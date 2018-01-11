


let fuelCost = (vehicle, fuelPrice, milesDriven) => {
    //input validation
    //rewrite as promise

    let mpg = vehicle.mpg.combined
    
    return  milesDriven * fuelPrice / mpg
    
}
let prius = {
    mpg: {
        combined: 15
    }
}
console.log("prius: $", fuelCost(prius, 2.4, 15000));