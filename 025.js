function solution(a, b) {
  let shortSring = a.length;
  let longSring = b.length;

  if (shortSring > longSring) {
    return b + a + b;
  }
  if (longSring > shortSring) {
    return a + b + a;
  }
}

//Ternary
// solution(a,b) => a.length > b.length ? b + a + b : a + b + a
