var array = [];
var match = false;

// get value
function addUser() {
    var sName = document.getElementById('name').value;
    var sEmail = document.getElementById('email').value;
    var sPwd = document.getElementById('password').value;
    var sCPwd = document.getElementById('confirmPassword').value;
    var sCity = document.getElementById('city').value;
    var sState = document.getElementById('state').value;

    // creating object
    var admin = {
        name: sName,
        email: sEmail,
        password: sPwd,
        city: sCity,
        state: sState
    };

    // fetch array data
    if (localStorage.getItem('array')) {
        array = JSON.parse(localStorage.getItem('array'));
    }

    // check if exist or not
    function checkUser() {
        for (var index = 0; index < array.length; ++index) {
            var temp = array[index];
            if (temp.email == sEmail) {
                match = true;
                alert("Admin already exist with Same E-mail");
                break;
            }
        }
    }
    
    // if valid add data and redirect to login page
    checkUser();
    if (match === false) {
        array.push(admin);
        localStorage.setItem("array", JSON.stringify(array));
        var message = window.confirm("Registeration successfully");
        if (message) {
            window.location.href = "login.html";
        }
    }  
};
