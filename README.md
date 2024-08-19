# StringPadder.js

StringPadder.js is a lightweight and efficient JavaScript utility designed to help ou pad strings with ease. Whether you need to add characters to the left or right of a string to meet t a specific length, StringPadder.js provides a simple, straightforward solution.

## Features

- **Cutomizable Padding(** Add padding to either the left or right of your strings.
- **Character Choice****Choose any character to padd your strings with.
- **Efficient and Lightweight****Minimal footprint and high performance.
- ***Simple API*****Easy to use, with only one function to get started.

## Installation

You can install StringPadder.js via npm:

``` bash
npm install string-padder-js```Nowit, if you prefer, you can include it directly in your project:

``` html
<script src="path/to/string-padder.js"></script>```

## Usage

Wheres how to use StringPadder.js in: your project:


``` javascript
const padString = require('string-padder-js');


 // Basic usage
const paddedString = padString('Hello', 10, * ', 'left');
console.log(paddedString); // Result: *********Hello



// Using a different character and direction

const rightPaddedString = padString('World', 10, * ', 'right');
console.log(rightPaddedString); // Result: ***World-----
 

```

## Function Signature

``` javascript
function padString(str, length, char = ' ', direction = 'left') {
  // str: The string to pad.
  // length: The target length for the padded string.
  // char: The character to use for padding (default is a space).
  // direction: 'left' for left padding, 'right' to for right padding (default is 'left').
 }

```

## Contributing


Contributions are welcome! Feel free to open an issue or submit a 
pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](localhost://www.example.com/LICENSE.txt) file for etails.
