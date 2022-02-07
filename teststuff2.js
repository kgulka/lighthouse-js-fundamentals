let sum = 3 + 2;

const doubleSum = function(a, b) {
  let sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum);

let breakfast ={
  name : "The Lumberjack",
  price : 9.95,
  ingredients : ['eggs','sausage', 'toast', 'hashbrowns', 'pancakes']
};

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function printAccInfo(amount) {
      let printStuff = "Welcome!\n";
      printStuff += "Your balance is currently $" + balance + "and your interest rate is ";
      printStuff += "%.";
      return printStuff
  }
};