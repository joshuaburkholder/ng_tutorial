
//Typescript will set assumed time, 
//throwing a compiling error
let count = 5;
count = 'a';

//Declaring a var with let without assigning any value,
// will set the type to 'any'
let a;
a = 1;
// a = true;
// a = 'word';

//If you do not know the value of a variable, 
//you can still set the type
let b:number;

b = 1;
// b = true;
// b = 'word';

//Variable types:
let ab: number;
let cd: boolean;
let ef: string;
let gh: any;
let ij: number[] = [1, 2, 3];
let kl: any[] = [1, true, 'string', false];

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;

//enumerating containers; will be assigned(zero-based)
//example:
   // enum Color {Red, Green, Blue };
   // let backgroundColor = Color.Blue;

//Best to assign values
enum Color {Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Blue;


//TYPE ASSERTIONS

let message;
message = 'abc';

let endsWithC = (<string>message).endsWith('c');
let endsWithC2 = (message as string).endsWith('c');


let log = function(message){
    console.log(message);
}

let doLog = (message) => {
    console.log(message);
}
