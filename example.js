import smokeData from "./index";

// Obs: how to execute examples:
// node --experimental-specifier-resolution=node example.js 

// EXAMPLE 1: Simple string
const example1 = "Name of People";
console.log('\n\nExample 1 - Simple string:\n', smokeData(example1)); 
// Output: Na** ** ******


// EXAMPLE 2: Simple number
const example2 = 1336754321;
console.log('\n\nExample 2 - Simple number:\n', smokeData(example2)); 
// Output: 13********

// EXAMPLE 3: Object
const example3 = {
  name: 'Muzan kibutsuji Jackson',
  age: 'old, very old',
  favorite_foods: [
    'humans',
    'other onis',
    'peanut butter',
  ],
  contacts: {
    email: 'musanjackson2021@mail_example.com',
    phone: '(44) 223323221',
    fax: 'an fax for example ...',
  }
};
console.log('\n\nExample 3 - Object:\n', smokeData(example3)); 
// Output:
// {
//   name: 'Mu*** ********* *******',
//   age: 'ol** **** ***',
//   favorite_foods: [ 'hu****', 'ot*** ****', 'pe**** ******' ],
//   contacts: {
//     email: 'mu*******************************',
//     phone: '(4** *********',
//     fax: 'a* *** *** ******* ***'
//   }
// }

// Available settings:

// Set mask character:
console.log('\nSettings: Use $ as mask character:', smokeData(example1, '$'));
// Output: Na$$ $$ $$$$$$
