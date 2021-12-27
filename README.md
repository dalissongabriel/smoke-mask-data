# SMOKE DATA - MASK DATA - HIDE DATA WITH MASK
## Mascará para esconder dados sensíveis ou não disponíveis.


### Formas de uso
*Strings*
```js
import smokeData from "./index";

const example = "Name of People";

console.log(smokeData(example));
// Output: Na** ** ******
```

*Numbers*
```js
import smokeData from "./index";

const example = 1336754321;

console.log(smokeData(example));
// Output: 13********
```

*Complex Objects*
```js
import smokeData from "./index";

const example = {
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

console.log(smokeData(example));
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
```

