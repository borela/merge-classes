
// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

import mergeClasses from '..'

const SIMPLE_CLASS_A = 'simple-a'
const SIMPLE_CLASS_B = 'simple-b'
const SIMPLE_CLASS_C = 'simple-c'
const SIMPLE_CLASS_D = 'simple-d'

const ARRAY_OF_SIMPLE_CLASSES_A = [
  'array-simple-1',
  'array-simple-2'
]

const ARRAY_OF_SIMPLE_CLASSES_B = [
  'array-simple-3',
  'array-simple-4'
]

const CSS_MODULE_A = {
  style1: 'hash123-style-1',
  style2: 'hash123-style-2'
}

const CSS_MODULE_B = {
  style3: 'hash123-style-3',
  style4: 'hash123-style-4'
}

const ARRAY_OF_CSS_MODULES_A = [{
  style1: 'array-hash123-style-1',
  style2: 'array-hash123-style-2'
}, {
  style3: 'array-hash123-style-3',
  style4: 'array-hash123-style-4'
}]

const ARRAY_OF_CSS_MODULES_B = [{
  style5: 'array-hash123-style-5',
  style6: 'array-hash123-style-6'
}, {
  style7: 'array-hash123-style-7',
  style8: 'array-hash123-style-8'
}]

const CONDITIONAL_A = {
  'conditional-1': false,
  'conditional-2': true
}

const CONDITIONAL_B = {
  'conditional-3': false,
  'conditional-4': true
}

describe('mergeClasses()', () => {
  it('Merges simple CSS', () => {
    const EXPECTED = [
      'simple-a',
      'simple-b',
      'simple-c',
      'simple-d'
    ].join(' ')
    expect(
      mergeClasses(
        SIMPLE_CLASS_A,
        SIMPLE_CLASS_B,
        SIMPLE_CLASS_C,
        SIMPLE_CLASS_D
      )
    ).toBe(EXPECTED)
  })

  it('Merges arrays of simple CSS', () => {
    const EXPECTED = [
      'array-simple-1',
      'array-simple-2',
      'array-simple-3',
      'array-simple-4'
    ].join(' ')
    expect(
      mergeClasses(
        ARRAY_OF_SIMPLE_CLASSES_A,
        ARRAY_OF_SIMPLE_CLASSES_B
      )
    ).toBe(EXPECTED)
  })

  it('Merges CSS modules', () => {
    const EXPECTED = [
      'hash123-style-1',
      'hash123-style-2',
      'hash123-style-3',
      'hash123-style-4'
    ].join(' ')
    expect(
      mergeClasses(
        CSS_MODULE_A,
        CSS_MODULE_B
      )
    ).toBe(EXPECTED)
  })

  it('Merges arrays of CSS modules', () => {
    const EXPECTED = [
      'array-hash123-style-1',
      'array-hash123-style-2',
      'array-hash123-style-3',
      'array-hash123-style-4',
      'array-hash123-style-5',
      'array-hash123-style-6',
      'array-hash123-style-7',
      'array-hash123-style-8'
    ].join(' ')
    expect(
      mergeClasses(
        ARRAY_OF_CSS_MODULES_A,
        ARRAY_OF_CSS_MODULES_B
      )
    ).toBe(EXPECTED)
  })

  it('Merges conditional styles', () => {
    const EXPECTED = [
      'conditional-2',
      'conditional-4'
    ].join(' ')
    expect(
      mergeClasses(
        CONDITIONAL_A,
        CONDITIONAL_B
      )
    ).toBe(EXPECTED)
  })

  it('Merges mixed content', () => {
    const EXPECTED = [
      'simple-a',
      'simple-b',
      'simple-c',
      'simple-d',
      'array-simple-1',
      'array-simple-2',
      'array-simple-3',
      'array-simple-4',
      'hash123-style-1',
      'hash123-style-2',
      'hash123-style-3',
      'hash123-style-4',
      'array-hash123-style-1',
      'array-hash123-style-2',
      'array-hash123-style-3',
      'array-hash123-style-4',
      'array-hash123-style-5',
      'array-hash123-style-6',
      'array-hash123-style-7',
      'array-hash123-style-8',
      'conditional-2',
      'conditional-4'
    ].join(' ')
    expect(
      mergeClasses(
        SIMPLE_CLASS_A,
        SIMPLE_CLASS_B,
        SIMPLE_CLASS_C,
        SIMPLE_CLASS_D,
        ARRAY_OF_SIMPLE_CLASSES_A,
        ARRAY_OF_SIMPLE_CLASSES_B,
        CSS_MODULE_A,
        CSS_MODULE_B,
        ARRAY_OF_CSS_MODULES_A,
        ARRAY_OF_CSS_MODULES_B,
        CONDITIONAL_A,
        CONDITIONAL_B
      )
    ).toBe(EXPECTED)
  })
})
