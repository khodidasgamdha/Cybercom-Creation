var array = [];

function addElement() {
    
    // fetch values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    
    // check is null or not
    if (name.length != 0 && email.length != 0 && dob.length != 0) {
        var person = {
            name: name,
            email: email,
            birthdate: dob,
        };

        if (localStorage.getItem("array")) {
            array = JSON.parse(localStorage.getItem("array"));
        }

        array.push(person);
        localStorage.setItem("array", JSON.stringify(array));

        alert("Values Added to Database");
    }
}
