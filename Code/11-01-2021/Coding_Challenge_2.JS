// Store Match Score
var john = [899, 899, 899];
var mike = [116, 94, 123];

// Find Average Score
var john_total = 0;
var mike_total = 0;

// use john.lenght beacuse in this case all played 3 matches
for(var i=0; i<john.length; i++){
    john_total += john[i];
    mike_total += mike[i]
}

var john_avg = john_total/john.length;
var mike_avg = mike_total/mike.length;

// Find Winner
switch(true){
    case john_avg > mike_avg :
        console.log(`John's team is winner with Average Score ${john_avg}.`);
        break;
    case john_avg < mike_avg :
        console.log(`Mike's team is winner with Average Score ${mike_avg}.`);
        break;
    default :
        console.log("It's Draw !!");
        break;
}


// ----------------------------------------------- Extra -----------------------------------------------

// Store Match Score
var john = [89, 120, 103];
var mike = [116, 94, 123];
var mary = [97, 134, 105];

// Find Average Score
var john_total = 0;
var mike_total = 0;
var mary_total = 0;

// use john.lenght beacuse in this case all played 3 matches
for(var i=0; i<john.length; i++){
    john_total += john[i];
    mike_total += mike[i];
    mary_total += mary[i];
}

var john_avg = john_total/john.length;
var mike_avg = mike_total/mike.length;
var mary_avg = mary_total/mary.length;

// Find Winner
if(john_avg > mike_avg && john_avg > mary_avg){
    console.log(`John's team is winner with Average Score ${john_avg}.`)
}else if(mike_avg > john_avg && mike_avg > mary_avg){
    console.log(`Mike's team is winner with Average Score ${mike_avg}.`)
}else if(mary_avg > john_avg && mary_avg > mike_avg){
    console.log(`Mary's team is winner with Average Score ${mary_avg}.`)
}else {
    console.log("It's Draw !!")
}