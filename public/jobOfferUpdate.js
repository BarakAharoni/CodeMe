
const urlCancel = '/jobOffers';

$("#cancel").click(function () {
    window.location = urlCancel
})

function validateForm(title, username, description, salary, password) {
    if ((title == null || title == "") || (username == null || username == "") || (password == null || password == "") || (description == null || description == "") || (salary == null || salary == "")) {
        alert("Please Fill In All Required Fields");
        return false;
    }
    return true;
}
$("#submit").click(function (e) {
    const title = document
        .getElementById("titleText")
        .innerHTML;
    const username = document
        .getElementById("usernameText")
        .innerHTML;
    const description = document
        .getElementById("descriptionText")
        .innerHTML;
    let salary = document
        .getElementById("salaryText")
        .innerHTML;
    salary = salary.slice(0,salary.length-1)
    let password;
    if(!checkValidPassword((document.getElementById("passwordCurrent").value),document.getElementById("passwordNew").value)){
        alert("Invalid input on the password");
        return false;
    }
    if(document.getElementById("passwordNew").value !== ""){
        password = (document.getElementById("passwordNew").value);
    }
    else{
        password = getCurrentPassword();
    }
    const type = getTypeOfUser();
    if (validateForm(title, username, description, salary, password)) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: window.location.pathname  +  window.location.search,
            data: {
                title: title,
                username: username,
                description: description,
                salary: salary,
                password: password,
                type: type
            },

            success: function () {
                alert("Your job offer update successfuly!");
                window.location = "/jobOffers"
            },
            error: function () {
                alert("Something Went Worng...");
            }
        })
    }

});