function fuelCost(mpg, miles, costPerGallon){
    return miles/mpg*costPerGallon;
}

let miles = 140*5*4 + (140*4.2*3);
let costPerGallon = 2.75;
console.log("Sonata: $",fuelCost(26, miles, costPerGallon))
console.log("prius: $",fuelCost(45, miles, costPerGallon))