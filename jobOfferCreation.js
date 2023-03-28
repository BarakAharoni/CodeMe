
function validateForm(title, username, description, salary) {
    if ((title == null || title == "") || (username == null || username == "") || (description == null || description == "") || (salary == null || salary == "")) {
        alert("Please Fill In All Required Fields");
        return false;
    }
    return true;
}

var url = "/jobOffers/";
$("#submit").click(function (e) {
    var title = document.getElementById("inpTitle").value;
    var username = document.getElementById("username").value;
    var description = document.getElementById("inpDescription").value;
    var salary = document.getElementById("inpSalary").value;

    if (validateForm(title, username, description, salary)) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                title: title,
                username: username,
                description: description,
                salary: salary
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