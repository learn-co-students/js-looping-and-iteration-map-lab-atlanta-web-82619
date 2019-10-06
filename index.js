function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const names = driver.split(" ");
    const new_driver = {
      firstName: names[0],
      lastName: names[1]
    };
    return new_driver;
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return driver.name + " is from " + driver.hometown
  });
}
