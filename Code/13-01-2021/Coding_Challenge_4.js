// Store name, mass and height in object
var person_A = {
    full_name: "Mark", 
    mass: 100, 
    height: 160,
    calculateBMI: function(){
        return this.mass/(this.height*this.height);
    }
};

var person_B = {
    full_name: "John", 
    mass: 80, 
    height: 180,
    calculateBMI: function(){
        return this.mass/(this.height*this.height);
    }
};

// Compare BMI and Store object value in result variable
var result;
if(person_A.calculateBMI() == person_B.calculateBMI()){
    result = "Same BMI";
}else if(person_A.calculateBMI() > person_B.calculateBMI()){
    result = person_A;
}else{
    result = person_B;
}

// Winner person data
if(result != "Same BMI")
    console.log(`Highest BMI Person Name is ${result.full_name}.\nHis mass is ${result.mass}, height is ${result.height} and BMI is ${result.calculateBMI()}.`);
else
    console.log("Both has same BMI !!");