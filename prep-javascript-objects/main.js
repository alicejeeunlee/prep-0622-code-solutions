var person = {
  firstName: 'Arielle',
  lastName: 'Loveheart',
  hobby: 'surfing'
};

console.log(person);

const fullName = `The person's name is: ${person.firstName} ${person.lastName}.`;
console.log(fullName);

person.job = 'actress';
console.log(`The person's current job is: ${person.job}.`);

person.previousJob = 'barista';
console.log(`The person's previous job is: ${person.previousJob}.`);

console.log('The complete person object:', person);
