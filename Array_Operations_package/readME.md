# nikhil-goswami-array-hof-utils

## Introduction
This package extends the JavaScript `Array` prototype with 10 useful higher-order functions (HOFs), providing powerful utilities for common operations like sum, unique values, flattening, grouping, and more.

## Installation
You can install the package via npm:

```sh
npm install nikhil-goswami-array-hof-utils
```

## Usage
Import the package in your JavaScript project:

```javascript
require('nikhil-goswami-array-hof-utils');

const arr = [1, 2, 3, 4, 5];
console.log(arr.sum()); // Output: 15
```

## Features

### 1. `sum()`
Returns the sum of all elements in the array.
```javascript
[1, 2, 3, 4].sum(); // 10
```

### 2. `average()`
Returns the average of all elements in the array.
```javascript
[2, 4, 6].average(); // 4
```

### 3. `unique()`
Removes duplicate values from the array.
```javascript
[1, 2, 2, 3, 4, 4].unique(); // [1, 2, 3, 4]
```

### 4. `maxValue()`
Returns the maximum value in the array.
```javascript
[3, 7, 2, 9].maxValue(); // 9
```

### 5. `minValue()`
Returns the minimum value in the array.
```javascript
[3, 7, 2, 9].minValue(); // 2
```

### 6. `chunk(size)`
Splits the array into chunks of the specified size.
```javascript
[1, 2, 3, 4, 5, 6].chunk(2); // [[1, 2], [3, 4], [5, 6]]
```

### 7. `shuffle()`
Shuffles the elements in the array randomly.
```javascript
[1, 2, 3, 4].shuffle(); // Random order
```

### 8. `compact()`
Removes falsy values (`null`, `undefined`, `0`, `""`, `false`, `NaN`) from the array.
```javascript
[0, 1, false, 2, '', 3].compact(); // [1, 2, 3]
```

### 9. `flatten()`
Flattens a nested array into a single array.
```javascript
[1, [2, [3, 4], 5]].flatten(); // [1, 2, 3, 4, 5]
```

### 10. `groupBy(callback)`
Groups elements in the array based on a callback function.
```javascript
[6.2, 4.5, 3.1].groupBy(Math.floor);
// { '6': [6.2], '4': [4.5], '3': [3.1] }
```

## License
This project is licensed under the MIT License.

