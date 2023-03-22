let devId;

const onClick = (e) => {
    let t = e.target;
    while (t && !t.id) 
        t = t.parentNode;
    if (t) {
        console.log("You clicked element #" + t.id);
        devId = t.id;
        window.open(
            "./developers/developerProfile/?id=" + t.id,
            "_blank",
            "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=800,height=800"
        );
    }
}
const devs = document.getElementsByClassName("devs");

for (let i = 0; i < devs.length; i++) {
    devs[i].addEventListener('click', onClick);
}


const ids = $('.clickableDivs').map(function (_, x) {
    return x.id;
}).get();

document.getElementById('datatable-search-input').addEventListener('input', (e) => {
    for(var i = 0; i < ids.length; i++){
        let currDiv = document.getElementById(ids[i]);
        if (currDiv.innerHTML.includes(e.target.value)) {
            currDiv.style.display = "block";
        }
        else{
            currDiv.style.display = "none";
        }
    }
});


const urlRegister = "/developers/register";
$("#createBtn").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: urlRegister,
        dataType: 'text',
        success: window.location = urlRegister

  }) 
});

const urlUpdate = "/developers/update?id=" + document.getElementsByClassName('idOfDev')[0].id;
$("#updateBtn").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: urlUpdate,
        dataType: 'text',
        success: window.location = urlUpdate

    })
});


$("#removeBtn").click(function() {
    $.ajax({
        type: 'GET',
        url: "/developers/delete?id=" + document.getElementsByClassName('idOfDev')[0].id,
        dataType: 'text',
        success: function() {
            alert("Your profile has been successfully deleted")
            window.location = "/logout"
        }
    })
});



