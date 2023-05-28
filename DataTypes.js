/* _______________Data types__________________
A value in JavaScript is always of a certain type. For example, a string or a number. */

/* ______________Number */
/* There are many operations for numbers, e.g. 
multiplication *, division /, addition +, subtraction -, and so on. */

/* Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: 
   Infinity, -Infinity and NaN. */

/* Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number. */
alert(1 / 0); // Infinity

/* NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance: */
alert("not a number" / 2); // NaN, such division is erroneous
/* NaN is sticky. Any further mathematical operation on NaN returns NaN: */
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN
/* Mathematical operations are safe
Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
*/

/* __________String
A string in JavaScript must be surrounded by quotes. */

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

/* In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`. */

/* ____________Boolean (logical type)
The boolean type has only two values: true and false. */
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
/* _____________The “null” value
The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value: */

let age = null;

/* In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.
The code above states that age is unknown. */

/* _____________The “undefined” value
The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined: */

let age2;

alert(age2); // shows "undefined"

/* __________Objects and Symbols */
