// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers) {
  const drivers_as_objects = drivers.map(function(driver) { 
    const names = driver.split(" ");
    const driver_object = {
      "firstName": names[0],
      "lastName": names[1]
    }
    return driver_object;
  })
  return drivers_as_objects;
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
  return phrases;
}