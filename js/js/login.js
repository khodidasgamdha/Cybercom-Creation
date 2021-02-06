var array = [];
var match = false;
var temp;

// check validation
function checkAuthentication() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (localStorage.getItem('array')) {
        array = JSON.parse(localStorage.getItem('array'));
    }

    function checkUser() {
        for (var index = 0; index < array.length; index++) {
            temp = array[index];
            if (array[index].email == email && array[index].password == password) {
                match = true;
                break;
            }
        }
    }

    checkUser();
    if (match == false) {

        // check for sun user
        if (localStorage.getItem('arrayUser')) {
            array = JSON.parse(localStorage.getItem('arrayUser'));
        }
        
        checkUser();
        if (match == false) {
            match = false;
            alert("Invalid email and password!");
        }
        else {
            sessionStorage.setItem("name", temp.name);
            window.location.href = "subUser.html";
        }
    }
    else {
        sessionStorage.setItem("name", temp.name);
        window.location.href = "index.html";
    }
};