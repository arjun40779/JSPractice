/* Semicolons

A semicolon may be omitted in most cases when a line break exists. */

/* But there are situations where JavaScript “fails” to assume a semicolon where it is really needed. */
/* An example of an error */
alert("Hello");

[1, 2].forEach(alert);

/* Comments
One-line comments start with two forward slash characters //. */
// This comment occupies a line of its own
alert("Hello");

alert("World"); // This comment follows the statement

/* Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */
/* An example with two messages.
This is a multiline comment.
*/
alert("Hello");
alert("World");
