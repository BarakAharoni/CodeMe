var picture;

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

function validateForm(username, password) {
    if ((username == null || username == "") || (password == null || password == "")) {
        alert("Please Fill In All Required Fields");
        return false;
    }
    return true;
}

$("#submit").click(function (e) {
    var username = document
        .getElementById("username")
        .value;
    var password = document
        .getElementById("password")
        .value;
    if (validateForm(username, password)) {
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
            url: "/admins/register",
            data: {
                username: username,
                password: password,
                picture: picture
            },
            success: function () {
                alert("Your registration is successful!");
                window.location = "/admins/developers"
            },
            error: function () {
                alert("Something Went Worng...");
            }
        })
    }
});
