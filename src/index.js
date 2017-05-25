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

function* extractFromArray(targetArray) {
  for (let item of targetArray)
    yield* extractClasses(item)
}

function* extractFromObject(targetObject) {
  for (let property in targetObject) {
    const VALUE = targetObject[property]
    // CSS module.
    if (typeof VALUE === 'string') {
      yield VALUE
      continue
    }
    // Conditional CSS.
    if (VALUE)
      yield property
  }
}

function* extractClasses(targetItem) {
  if (Array.isArray(targetItem)) {
    yield* extractFromArray(targetItem)
    return
  }

  switch (typeof targetItem) {
  case 'string':
    yield targetItem
    return
  case 'object':
    yield* extractFromObject(targetItem)
  }

  // Ignore unrecognized types.
}

export default function mergeClasses(...items) {
  return items.map(item => Array.from(extractClasses(item)))
    .reduce((a, b) => a.concat(b))
    .join(' ')
}
