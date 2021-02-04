// sort data based on name
sort_name = (item1, item2) => {
    if(item1.name < item2.name) return -1;
    else if(item1.name > item2.name) return 1;
    else return 0;
}

// sort data based on qty
sort_qty = (item1, item2) => {
    if(item1.qty < item2.qty) return -1;
    else if(item1.qty > item2.qty) return 1;
    else return 0;
}

cart = [
        {name: "headset", qty: 5},
        {name: "earphone", qty: 3},
        {name: "sdcard", qty: 1}
    ];

console.log("sort by name: ",cart.sort(sort_name));
console.log("sort by qty: ",cart.sort(sort_qty));