// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driverName) {
    drivers.push(driverName);
}

function destructivelyPrependDriver(driverName) {
    drivers.unshift(driverName);
}

function destructivelyRemoveLastDriver(driverName) {
    drivers.pop();
}

function destructivelyRemoveFirstDriver(driverName) {
    drivers.shift();
}

drivers = ["Milo", "Otis", "Garfield"];

function appendDriver(driverName) {
    const allDrivers = [...drivers, driverName];
    return allDrivers;
}

function prependDriver(driverName) {
    const allDrivers = [drivers, ...driverName];
    return allDrivers;
}

function removeLastDriver() {
    driversLength = drivers.length;
    return drivers.slice(0, driversLength-1)
}

function removeFirstDriver() {
    driversLength = drivers.length;
    return drivers.slice(1, driversLength)
}
