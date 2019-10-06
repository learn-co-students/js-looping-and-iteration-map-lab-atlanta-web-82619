// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    //returns all drivers lowercased
    //does not modify the original array
    return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
    //returns list of objects with appropriate first and last names
    return drivers.map(function(driver){
        return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]};
    });
}

//WHY WAS DIDN'T THE ARROW FUNCTION WORK HERE?
// function nameToAttributes(drivers) {
//     //returns list of objects with appropriate first and last names
//     return drivers.map(driver => {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]});
// }

function attributesToPhrase(drivers) {
    //converts to list saying the name and where each individual is from
    return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}