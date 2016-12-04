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

function getClassesFromArray(targetArray) {
  let result = [];

  for (let item of targetArray) {
    let itemType = typeof item;

    // Normal CSS class.
    if (itemType === 'string') {
      result.push(item);
      continue;
    }

    // Array of normal CSS classes or modules.
    if (Array.isArray(item)) {
      result = result.concat(
        getClassesFromArray(item)
      );
      continue;
    }

    // Module.
    if (itemType === 'object') {
      result = result.concat(
        getClassesFromModule(item)
      );
      continue;
    }
  }

  return result;
}

function getClassesFromModule(module) {
  let result = [];

  for (let property in module) {
    result.push(module[property]);
  }

  return result;
}

export function mergeClasses(...parameters) {
  let result = [];

  for (let parameter of parameters) {
    let parameterType = typeof parameter;

    // Normal CSS class.
    if (parameterType === 'string') {
      result.push(parameter);
      continue;
    }

    // Array of normal CSS classes or modules.
    if (Array.isArray(parameter)) {
      result = result.concat(
        getClassesFromArray(parameter)
      );
      continue;
    }

    // Module.
    if (parameterType === 'object') {
      result = result.concat(
        getClassesFromModule(parameter)
      );
      continue;
    }
  }

  return result.join(' ');
}

export default mergeClasses;
