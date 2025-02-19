# Custom Search

## Introduction
**Custom Search** is a highly efficient searching algorithm used to find an element in a sorted array. This package provides a simple implementation of binary search in JavaScript.

## Installation
You can install this package using npm:

```sh
npm install @nikhil_goswami/custom_search
```

## Usage
Import the module and use the `binarySearch` function:

```javascript
const binarySearch = require('@nikhil_goswami/custom_search');

const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;

const index = binarySearch(arr, target);
console.log(index); // Output: 3 (Zero-based index)
```

## Function Signature
```javascript
function binarySearch(arr, target)
```
- **arr** (Array): A sorted array of numbers.
- **target** (Number): The number to search for.
- **Returns** (Number): The index of the target in the array, or `-1` if not found.

## Example
```javascript
const arr = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(arr, 30)); // Output: 2
console.log(binarySearch(arr, 25)); // Output: -1
```

## License
This project is licensed under the MIT License.

