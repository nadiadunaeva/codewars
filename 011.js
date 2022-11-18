function removeChar(str) {
  let result = str.split('');
  result.shift();
  result.pop();

  return result.join('');
}
