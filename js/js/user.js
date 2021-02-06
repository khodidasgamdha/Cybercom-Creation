var arrayUser = [];
var hasMatch = false;

// logout function
function logout() {
    sessionStorage.clear();
}

// fing age
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    return age;
}

// find age count
function ageUnder18() {
    var array = localStorage.getItem('arrayUser');
    var item = JSON.parse(array);
    var count = count1 = count2 =0;

    for (var i = 0; i < item.length; i++) {
        var age = getAge(item[i].userbirthDate);
        if (age < 18) count++;
        localStorage.setItem("ageUnder18", count);
        if (age > 18 && age < 50) count1++;
        localStorage.setItem("age18to50", count1);
        if (age > 50) count2++;
        localStorage.setItem("ageAbove50", count2);
    }
}

// add user
function addUser() {

    // if update data
    if (document.getElementById("addUser").value == "Update") {
        var array_user1 = localStorage.getItem('arrayUser');
        var item = JSON.parse(array_user1);
        let link = document.querySelector("#edit");
        let target1 = link.getAttribute('value');

        for (var i = 0; i < item.length; i++) {
            if (target1 == item[i].index) {
                item[i].name = document.getElementById('name1').value;
                item[i].email = document.getElementById('email').value;
                item[i].password = document.getElementById('password').value;
                item[i].userbirthDate = document.getElementById('birthDate').value;
                localStorage.setItem("arrayUser", JSON.stringify(item));
                alert("Record Updated");
                location.reload();
            }
        }
    }

    // if delete data
    if (document.getElementById("addUser").value == "Add User") {
        var index = 0;
        if (localStorage.getItem('arrayUser')) {
            arrayUser = JSON.parse(localStorage.getItem('arrayUser'));
        }

        for (var i = 0; i < arrayUser.length; i++) {
            index = arrayUser.indexOf(arrayUser[i]) + 1;
        }
        index;
        var name = document.getElementById('name1').value;
        var uemail = document.getElementById('email').value;
        var upwd = document.getElementById('password').value;
        var userbirthDate = document.getElementById('birthDate').value;

        var user = {
            index: index,
            name: name,
            email: uemail,
            password: upwd,
            userbirthDate: userbirthDate
        };

        // check exsiting user or not
        function check_user_register() {
            for (var index1 = 0; index1 < arrayUser.length; ++index1) {
                var temp = arrayUser[index1];
                if (temp.email == uemail) {
                    hasMatch = true;
                    alert("user already exist with same email");
                    break;
                }
            }
        }
        check_user_register();
        if (hasMatch === false) {
            arrayUser.push(user);
            console.log(arrayUser);
            localStorage.setItem("arrayUser", JSON.stringify(arrayUser));
            alert("User added");
            location.reload();
        }
    }
};




