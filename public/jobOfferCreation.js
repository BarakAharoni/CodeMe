
function validateForm(title, username, description, salary, password) {
    if ((title == null || title == "") || (username == null || username == "") || (password == null || password == "") || (description == null || description == "") || (salary == null || salary == "")) {
        alert("Please Fill In All Required Fields");
        return false;
    }
    return true;
}

function showPass() {
    const x = document.getElementById("inpPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

let url = "/jobOffers/";
$("#submit").click(function (e) {
    let title = document.getElementById("inpTitle").value;
    let username = document.getElementById("username").value;
    let description = document.getElementById("inpDescription").value;
    let salary = document.getElementById("inpSalary").value;
    let password = document.getElementById("inpPassword").value;

    if (validateForm(title, username, description, salary, password)) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                title: title,
                username: username,
                description: description,
                salary: salary,
                password: password
            },

            success: function () {
                alert("Your job offer created successfuly!");
                window.location = url
            },
            error: function () {
                alert("Something Went Worng...");
            }
        })
    }

});