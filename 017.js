function updateLight(now, green, yellow, red) {
  if (now == 'green') {
    return 'yellow';
  } else if (now == 'yellow') {
    return 'red';
  } else {
    return 'green';
  }
}

// function updateLight(current) {
//     return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
//   }
