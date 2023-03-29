let picture;
$('#langs').on('change', function () {
    const allLangs = [];
    const $selectedOptions = $(this).find('option:selected');
    $selectedOptions.each(function () {
        allLangs.push($(this).text());

    });

    document
        .getElementById("sumLangs")
        .value = allLangs;
});
$("#resetPic").click(function () {
    document.getElementById("edit_img").src = "/basicDev.png";
})

const loadFile = function (event) {
    const image = document.getElementById("edit_img");
    image.src = URL.createObjectURL(event.target.files[0]);
    uploadImage(event);
};
const uploadImage = async (event) => {
    var file = event
        .target
        .files[0];
    const allBase64 = await convertBase64(file);
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
    if ((name == null || name === "") || (username == null || username === "") || (password == null || password === "") || (city == null || city === "") || (github == null || github === "") || (langs == null || langs === "")) {
        alert("Please Fill In All Required Fields");
        return false;
    }
    return true;
}

const url = '/developers';

$("#cancel").click(function () {
    window.location = url
})

function checkValidPassword(currentPas,newPas){
    if(currentPas === "" && newPas === ""){return  true;}
    if(currentPas !== "<%=dev.password%>"){return false;}
    else if (currentPas === newPas){return false;}
    else if (newPas === "" && currentPas !== ""){return false;}
    return true;
}

$("#submit").click(function (e) {
    const name = document
        .getElementById("nameText")
        .innerHTML;
    const username = document
        .getElementById("usernameText")
        .innerHTML;
    let password;
    if(((document.getElementById("passwordNew").value) != "") && !checkValidPassword((document.getElementById("passwordCurrent").value),document.getElementById("passwordNew").value)){
        alert("Invalid input on the password");
        return false;
    }
    if(document.getElementById("passwordNew").value !== ""){
        password = (document.getElementById("passwordNew").value);
    }
    else{
        password = getCurrentPassword();
    }
    const langs = document
        .getElementById("sumLangs")
        .value;
    const github = document
        .getElementById("githubText")
        .innerHTML;
    const city = document
        .getElementById("cityText")
        .innerHTML;
    const type = getTypeOfUser();
    if (validateForm(name, username, password, city, github, langs)) {
        if ((picture == null || picture === "")) {
            picture = null;
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
                title: "update profile" + name,
                type: type
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
