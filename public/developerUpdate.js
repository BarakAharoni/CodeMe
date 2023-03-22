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
$("#resetPic").click(function () {
    document.getElementById("edit_img").src = "/images/basicDev.png";
})

var loadFile = function (event) {
    var image = document.getElementById("edit_img");
    image.src = URL.createObjectURL(event.target.files[0]);
    uploadImage(event);
};
const uploadImage = async (event) => {
    var file = event
        .target
        .files[0];
    var allBase64 = await convertBase64(file);
    picture = (allBase64.split(",")).pop();
};
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


function validateForm(name, username, password, city, github, langs) {
    if ((name == null || name == "") || (username == null || username == "") || (password == null || password == "") || (city == null || city == "") || (github == null || github == "") || (langs == null || langs == "")) {
        alert("Please Fill In All Required Fields");
        return false;
    }
    return true;
}

var url = '/developers';

$("#cancel").click(function (e) {
    window.location = url
})
$("#submit").click(function (e) {
    var name = document
        .getElementById("nameText")
        .innerHTML;
    var username = document
        .getElementById("usernameText")
        .innerHTML;
    var password;
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
    var langs = document
        .getElementById("sumLangs")
        .value;
    var github = document
        .getElementById("githubText")
        .innerHTML;
    var city = document
        .getElementById("cityText")
        .innerHTML;
    if (validateForm(name, username, password, city, github, langs)) {
        if ((picture == null || picture == "")) {
            const imgElement = document.getElementById('defaultImg');
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imgElement.naturalWidth;
            canvas.height = imgElement.naturalHeight;
            ctx.drawImage(imgElement, 0, 0);
            const base64String = canvas
                .toDataURL('image/png')
                .split(',')[1];
            picture = base64String;

        }

        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: window.location.pathname  +  window.location.search,
            data: {
                name: name,
                username: username,
                password: password,
                langs: langs,
                github: github,
                city: city,
                picture: picture,
                title: "update profile" + name
            },

            success: function () {
                alert("Your registration is successful!");
                window.location = url
            },
            error: function () {
                alert("Something Went Worng...");
                console.log("---------------------------")
                console.log("name: " + name)
                console.log("username: " + username)
                console.log("password: " + password)
                console.log("langs: " + langs)
                console.log("github: " + github)
                console.log("city: " + city)
            }
        })
    }
});
