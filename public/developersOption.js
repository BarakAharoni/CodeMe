var devId;
const onClick = (e) => {
    var t = e.target;
    while (t && !t.id) 
        t = t.parentNode;
    if (t) {
        console.log("You clicked element #" + t.id);
        devId = t.id;
        window.open(
            "./developerProfile/?id=" + t.id,
            "_blank",
            "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=800,height=800"
        );
    }
}
var devs = document.getElementsByClassName("devs");

for (var i = 0; i < devs.length; i++) {
    devs[i].addEventListener('click', onClick);
}

