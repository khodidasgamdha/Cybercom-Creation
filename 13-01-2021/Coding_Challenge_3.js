// Store Bill Amount in Array
var bill = [124, 48, 268];

// Tip calculator function
function tip_calculator(amount){
    if(amount<=50){
        return amount*1.2;
    }else if(50<amount && amount<=200){
        return amount*1.15;
    }else if(amount>200){
        return amount*1.1;
    }
}

var tips = [];
var final_bill = [];

// Store value in final bill and tip Array
for(var i=0; i<bill.length; i++){
    final_bill[i] = tip_calculator(bill[i]);
    tips[i] = final_bill[i] - bill[i];
}

console.log(tips);
console.log(final_bill);
