# Merge CSS classes

Function aware of CSS modules when merging CSS classes.

## Installation

```sh
npm install --save merge-classes
```

## Usage

```js
import mergeClasses from 'merge-classes'

const SIMPLE_CLASS = 'simple-a'

const ARRAY_OF_SIMPLE_CLASSES = [
  'array-simple-1',
  'array-simple-2'
]

const CSS_MODULE = {
  style1: 'hash123-style-1',
  style2: 'hash123-style-2'
}

const ARRAY_OF_CSS_MODULES = [{
  style1: 'array-hash123-style-1',
  style2: 'array-hash123-style-2'
}, {
  style3: 'array-hash123-style-3',
  style4: 'array-hash123-style-4'
}]

// Properties with the value “false” will be skipped.
const CONDITIONAL = {
  'conditional-1': false,
  'conditional-2': true
}

console.log(
  mergeClasses(
    SIMPLE_CLASS,
    ARRAY_OF_SIMPLE_CLASSES,
    CSS_MODULE,
    ARRAY_OF_CSS_MODULES,
    CONDITIONAL
  )
)

// Output (without line breaks):
// simple-a
// array-simple-1
// array-simple-2
// hash123-style-1
// hash123-style-2
// array-hash123-style-1
// array-hash123-style-2
// array-hash123-style-3
// array-hash123-style-4
// conditional-2
```
