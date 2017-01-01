# Merge CSS classes.

Function aware of CSS modules when merging CSS classes.

## Installation

```sh
npm install --save merge-classes
```

## Usage

```js
import mergeClasses from 'merge-classes'

let simpleClass = 'simple-1'

// In this example, the css module prepends the hash to the class.
let cssModule = {
  style1: 'hash-style1',
  style2: 'hash-style2'
}

let arrayOfSimpleClasses = [
  'simple-2',
  'simple-3'
]

// In this example, the css module prepends the hash to the class.
let arrayOfCssModules = [{
  style3: 'hash-style3.css',
  style4a 'hash-style4.css'
},{
  style5: 'hash-style5.css',
  style6: 'hash-style6.css'
}]

console.log(
  mergeClasses(
    simpleClass,
    cssModule,
    arrayOfSimpleClasses,
    arrayOfCssModules
  )
)

// Output (without line breaks):
// simple-1
// hash-style1.css
// hash-style2.css
// simple-2
// simple-3
// hash-style3.css
// hash-style4.css
// hash-style5.css
// hash-style6.css
```
