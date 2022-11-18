const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let milesToPump = mpg * fuelLeft;
  return milesToPump >= distanceToPump;

  if (milesToPump > distanceToPump) {
    return true;
  } else {
    return false;
  }
};
