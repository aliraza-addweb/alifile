const ip = require('prompt-sync');
  const prompt = ip();
  let num1 = Number(prompt("enter number1 "));
  let num2 = Number(prompt("enter number2 "));
  let sum = (num1 + num2);
  console.log(`the sum is ${sum}`);