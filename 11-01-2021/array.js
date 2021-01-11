// using array literal
var array = ["eat", "sleep", "run", "walk"];

// using new keyword
var array2 = new Array("eat", "sleep", "run", "walk");

// empty array
var array3 = [ ];

// array containing number values
var array4 = [ 2, 4, 6, 8];

// array containing string values
var array5 = [ 'eat', 'work', 'sleep', 'walk'];

// multiple data types array
var array6 = ['work', 'exercise', 1, false];

// array with array, function, object
var array7 = [
    {
        'task1': 'exercise',
        'task2': 'walk'
    },
    [1, 2 ,3],
    function hello() { 
        console.log('hello')
    }
];

// push method
var array8 = [1, 2];
array8.push(3);
// output : [1, 2, 3]

// pop method
var array9 = [1, 2, 3];
array8.pop();
// output : [1, 2]

/* 

concat()  : joins two or more array 
indexOf() : searches element of an array and returns its position
find()    : return first value of an array element that passes
sort()    : sort array elements alphabetically order
slice()   : selects the part of an array and returns the new array
splice()  : removes or replaces existing elements and adds new elements
unshift() : add item to beginnig of the array
shift()   : remove item to beginnig of the array

*/