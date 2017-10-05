//in typescript there are two ways to declare variables:
var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally ' + i);
}
doSomething();
