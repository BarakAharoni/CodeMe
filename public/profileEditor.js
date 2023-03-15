const iconName = $("#edit_name");
const name = $("#exampleModalLabel");


iconName.hide();
name.mouseenter(function () {
    if (document.getElementById("exampleModalLabel").contentEditable !== "true") {
        console.log(document.getElementById("exampleModalLabel").contentEditable)
        iconName.show();
    }
});
name.mouseleave(function () {
    iconName.hide();
});
iconName.click(function () {
    document.getElementById("exampleModalLabel").contentEditable = true;
    document.getElementById("exampleModalLabel").style.borderStyle = 'inherit';
    iconName.hide();
})
name.blur(function () {
    document.getElementById("exampleModalLabel").contentEditable = "false";
    document.getElementById("exampleModalLabel").style.borderStyle = 'unset';
});
var loadFile = function (event) {
    var image = document.getElementById("edit_img");
    image.src = URL.createObjectURL(event.target.files[0]);
};