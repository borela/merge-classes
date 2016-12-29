
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
      module1: 'src-file-module1.css',
      module2: 'src-file-module2.css'
    }

    let arrayOfSimpleClasses = [
      'simple-2',
      'simple-3'
    ]

    let arrayOfCssModules = [{
      module3: 'src-file-module3.css',
      module4: 'src-file-module4.css'
    },{
      module5: 'src-file-module5.css',
      module6: 'src-file-module6.css'
    }]

    assert.equal(
      mergeClasses(
        simpleClass,
        cssModule,
        arrayOfSimpleClasses,
        arrayOfCssModules
      ),[
        'simple-1',
        'src-file-module1.css',
        'src-file-module2.css',
        'simple-2',
        'simple-3',
        'src-file-module3.css',
        'src-file-module4.css',
        'src-file-module5.css',
        'src-file-module6.css'
      ].join(' ')
    )
  })
})
