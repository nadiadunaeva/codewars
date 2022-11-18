function rentalCarCost(days) {
  let costPerDay = 40;
  let totalCost = costPerDay * days;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}
