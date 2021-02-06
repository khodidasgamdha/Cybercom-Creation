var array = [];
var match = false;

function addUser() {
    var sName = document.getElementById('name').value;
    var sEmail = document.getElementById('email').value;
    var sPwd = document.getElementById('password').value;
    var sCPwd = document.getElementById('confirmPassword').value;
    var sCity = document.getElementById('city').value;
    var sState = document.getElementById('state').value;

        
    // if(sPwd !== sCPwd) {
    //     alert("Does not match password and confirm password!");
    // }

    var admin = {
        name: sName,
        email: sEmail,
        password: sPwd,
        city: sCity,
        state: sState
    };
    if (localStorage.getItem('array')) {
        array = JSON.parse(localStorage.getItem('array'));
    }
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
