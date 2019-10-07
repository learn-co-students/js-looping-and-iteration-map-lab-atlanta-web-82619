// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
    const collection = drivers.map(function(driver) {
        const names = driver.split(" ");
        const newNames = {
        "firstName": names[0],
        "lastName": names[1]
        }
        return newNames
    })
    return collection
}

function attributesToPhrase(drivers) {
    return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}