function squareSum(numbers) {
  return numbers.map((x) => x * x).reduce((acc, current) => acc + current, 0);
}

// function squareSum(numbers) {
//   let totalSum = 0;
//   for (i=0;i<numbers.length;i++){
//     totalSum += Math.pow(numbers[i], 2);
//   }
//   return totalSum;
// }
