function narcissistic(value) {
    const splitedValue = value.toString().split("").map(parseFloat);
    
    let counter = 0;
    splitedValue.forEach((number) => {
      counter += Math.pow(number, splitedValue.length);
    });
    
    return counter === value;
}