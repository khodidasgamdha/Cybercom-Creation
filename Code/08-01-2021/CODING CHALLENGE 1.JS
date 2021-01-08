// Store Mark's mass and height
var mark_mass = 80;
var mark_height = 180;

// Store John's mass and height
var john_mass = 100;
var john_height = 160;

// Calculate Mark's BMI
var mark_BMI = mark_mass/mark_height^2;

// Calculate John's BMI
var john_BMI = john_mass/john_height^2;

// Compare BMI and Store boolean value in result variable
var result = mark_BMI > john_BMI;

console.log("Is Mark's BMI highter than John's? " + result);