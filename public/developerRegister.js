var picture;

$('#langs').on('change', function () {
    var allLangs = [];
    var $selectedOptions = $(this).find('option:selected');
    $selectedOptions.each(function () {
        allLangs.push($(this).text());

    });

    document
        .getElementById("sumLangs")
        .value = allLangs;
});

var input = document.getElementById("formFileLg");

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const uploadImage = async (event) => {
    var file = event
        .target
        .files[0];
    var allBase64 = await convertBase64(file);
    picture = (allBase64.split(",")).pop();
};

input.addEventListener("change", (e) => {
    uploadImage(e);
});

function validateForm(name, username, password, city, github, langs) {
    if ((name == null || name == "") || (username == null || username == "") || (password == null || password == "") || (city == null || city == "") || (github == null || github == "") || (langs == null || langs == "")) {
        alert("Please Fill In All Required Fields");
        return false;
    }
    return true;
}

var url = "/developers/";

$("#submit").click(function (e) {
    var name = document
        .getElementById("name")
        .value;
    var username = document
        .getElementById("username")
        .value;
    var password = document
        .getElementById("password")
        .value;
    var langs = document
        .getElementById("sumLangs")
        .value;
    var github = document
        .getElementById("github")
        .value;
    var city = document
        .getElementById("city")
        .value;
    if (validateForm(name, username, password, city, github, langs)) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                name: name,
                username: username,
                password: password,
                langs: langs,
                github: github,
                city: city,
                picture: picture
            },

            success: function () {
                alert("Your registration is successful!");
                window.location = url
            },
            error: function () {
                alert("Something Went Worng...");
            }
        })
    }
});
