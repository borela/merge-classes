# Merge CSS classes.

Function aware of CSS modules when merging CSS classes.

## Installation

```sh
npm install --save merge-classes
```

## Usage

```js
import mergeClasses from 'merge-classes';

let simpleClass = 'simple-1';

let cssModule = {
  module1: 'src-file-module1.css',
  module2: 'src-file-module2.css'
};

let arrayOfSimpleClasses = [
  'simple-2',
  'simple-3'
];

let arrayOfCssModules = [{
  module3: 'src-file-module3.css',
  module4: 'src-file-module4.css'
},{
  module5: 'src-file-module5.css',
  module6: 'src-file-module6.css'
}];

console.log(
  mergeClasses(
    simpleClass,
    cssModule,
    arrayOfSimpleClasses,
    arrayOfCssModules
  )
);

// Output (without line breaks):
// simple-1
// src-file-module1.css
// src-file-module2.css
// simple-2
// simple-3
// src-file-module3.css
// src-file-module4.css
// src-file-module5.css
// src-file-module6.css
```
