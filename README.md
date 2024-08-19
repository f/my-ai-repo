# My-AI-Repo

This project provides two functions for padding strings: strPadLeft and strPadRight. These functions add padding to the left or right of a string respectively. This can be useful in various conditions where string manipulation is required.

## Installation
Clone the project from the git hub repository:

  ``sh
git clone your_repo_link ``\nRun the following command to install dependencies:

```sh
npm install ``
[note: The project has no dependencies, so this would be useful if the project had any number of dependencies.]

## Usage

This project provides two main functions for padding strings:

 1. ``strPadLeft` {str, length, char = ' '}: Pads a string on the left until it reaches the specified length, using the given character.

- Input: str - The string to pad.
-
 Input: length - The desired length of the string after padding.
- Input: char - The character to use for padding. Defaults to ' '.

- Output: The padded string.

example:

``bjs
const { strPadLeft } = require('./index');

strPadLeft('Hello', 7);
// '_Hello'

strPadLeft('Hello', 7, '*');
// '*'Hello'
```

2. ``strPadRight`{str, length, char = ' '}: Pads a string on the right until it reaches the specified length, using the given character.

- Input: str - The string to pad.
- Input: length - The desired length of the string after padding.
- Input: char - The character to use for padding. Defaults to ' '.

- Output: The padded string.

example:

``bjs
const { strPadRight } = require('./index');

strPadRight('Hello', 7);
// 'Hello'_

strPadRight('Hello', 7, '*');
// 'Hello'*'
```

## Examples
The following are examples of how to use these functions:

 1. Pading a String to the Left

```javascript
const { strPadLeft } = require('./index');

// Add padding to the left using the default character
strPadLeft('Hello',7);
// Output: '_Hello'

// Add padding to the left using the * character
strPadLeft('Hello',7,'*');
// Output: '*'Hello'
```

2. Pading a String to the Right

```javascript
const { strPadRight } = require('./index');

// Add padding to the right using the default character
strPadRight('Hello', 7); // 'Hello'

// Add padding to the right using the * character
strPadRight('Hello', 7, '*'); // '*Hello'
```
