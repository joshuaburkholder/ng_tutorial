//Typescript will set assumed time, 
//throwing a compiling error
var count = 5;
count = 'a';
//Declaring a var with let without assigning any value,
// will set the type to 'any'
var a;
a = 1;
// a = true;
// a = 'word';
//If you do not know the value of a variable, 
//you can still set the type
var b;
b = 1;
// b = true;
// b = 'word';
//Variable types:
var ab;
var cd;
var ef;
var gh;
var ij = [1, 2, 3];
var kl = [1, true, 'string', false];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
//enumerating containers; will be assigned(zero-based)
//example:
// enum Color {Red, Green, Blue };
// let backgroundColor = Color.Blue;
//Best to assign values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
