//DAY 21
// 61.Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, 
// and motorcycles using enums, and show one example.
// solution:
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
    VehicleType[VehicleType["Bike"] = 3] = "Bike";
})(VehicleType || (VehicleType = {}));
// showing 1 type of vehicle from the list
console.log(VehicleType.Truck);
export {};
