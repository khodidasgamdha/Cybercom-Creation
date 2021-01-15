// Initilize first and second 
var first = 0;
var second = 1;

console.log(`${first}\n${second}`);

function fibonacci(num){
    var third;
    while(num-2>0){
        third = first + second;
        first = second;
        second = third;
        console.log(second);
        num--;
    }
}

fibonacci(5);