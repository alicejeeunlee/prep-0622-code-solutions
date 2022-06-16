const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwoNumbers(2, 2));

const convertHoursToMinutes = hours => {
  return hours * 60;
};
console.log(convertHoursToMinutes(2));

const getGreeting = name => {
  return 'Hello ' + name;
};
console.log(getGreeting('World'));

const addAndMultiplyBy5 = (num1, num2) => {
  return (num1 + num2) * 5;
};
console.log(addAndMultiplyBy5(10, 5));

const multiplyAndDivideBy5 = (num1, num2) => {
  return (num1 * num2) / 5;
};
console.log(multiplyAndDivideBy5(35, 10));

const subtractTwoNumbers = (num1, num2) => {
  return num1 - num2;
};
console.log(subtractTwoNumbers(22, 7));

const getCircleCircumference = radius => {
  return 2 * Math.PI * radius;
};
console.log(getCircleCircumference(5));

const getFullName = (firstName, lastName) => {
  return firstName + ' ' + lastName;
};
console.log(getFullName('Juan', 'Ramirez'));

const cube = number => {
  return Math.pow(number, 3);
};
console.log(cube(5));
