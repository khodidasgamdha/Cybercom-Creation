// In JavaScript a Variable can be used before it has been declared

console.log(counter);
var counter = 1; // undefined

var abc;
console.log(abc); // undefined
abc = 1;

console.log(abcd); // ReferenceError: Cannot access 'counter' before initialization
let abcd = 1;

// function declaration
let x = 20,
    y = 10;

let result = add(x,y);
console.log(result); // 30

function add(a, b){
return a + b;
}

// function expression
let x = 20,
    y = 10;

let result = add(x,y);
console.log(result); // add not defined

var add = function() {
return x + y;
}

// function expression
let x = 20,
    y = 10;

var add = function() {
return x + y;
}

let result = add(x,y);
console.log(result); // 30

// this keyword
var john = {
    name :'John',
    age: 30,
    calculateAge: function(){
        console.log(this); // {name: 'John', age: 30, calculateAge: ƒ}
        
        // inner function
        function innerFunc(){
            console.log(this); // globle
        }
        innerFunc();
    }
}
john.calculateAge();


/*
forloop
for/of loop
for/in loop
while loop
*/