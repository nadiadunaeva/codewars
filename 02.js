function isDivideBy(number, a, b) {

    if (number % a === 0 && number % b === 0){
      return true;
    } else {
      return false
  }
  };
  
  isDivideBy(-12, 2, -6);
  isDivideBy(12, 2, -6);