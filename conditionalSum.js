const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let value of values){
    let isEven = false;
    if(value % 2 === 0){
      isEven = true;
    }
    if (condition === "even" && isEven){
      sum += value;
    }
    else if (condition === "odd" && !isEven){
      sum += value;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
