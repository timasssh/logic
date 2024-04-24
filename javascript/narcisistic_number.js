function narcissistic(value) {
    const splitedValue = Array.from(value.toString(), Number);
    
    let counter = 0;
    splitedValue.forEach((number) => {
      counter += number ** splitedValue.length
    });
    
    return counter === value;
}

module.exports = narcissistic;