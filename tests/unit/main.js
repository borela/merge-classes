
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

import 'babel-polyfill'
import assert from 'assert'

import mergeClasses from '../../src'

describe('Merging function', () => {
  it('lists a directory’s contents', () => {
    let simpleClass = 'simple-1'

    let cssModule = {
      style1: 'hash-style1.css',
      style2: 'hash-style2.css'
    }

    let arrayOfSimpleClasses = [
      'simple-2',
      'simple-3'
    ]

    let arrayOfCssModules = [{
      style3: 'hash-style3.css',
      style4: 'hash-style4.css'
    },{
      style5: 'hash-style5.css',
      style6: 'hash-style6.css'
    }]

    assert.equal(
      mergeClasses(
        simpleClass,
        cssModule,
        arrayOfSimpleClasses,
        arrayOfCssModules
      ),[
        'simple-1',
        'hash-style1.css',
        'hash-style2.css',
        'simple-2',
        'simple-3',
        'hash-style3.css',
        'hash-style4.css',
        'hash-style5.css',
        'hash-style6.css'
      ].join(' ')
    )
  })
})
