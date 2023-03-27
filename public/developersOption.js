const onClick = (e) => {
    var t = e.target;
    while (t && !t.id) 
        t = t.parentNode;
    if (t) {
        var urlDev = "./developerProfile/?id=" + t.id;
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: urlDev,
            success: function () {
                
                window.open(
                    urlDev,
                    "_blank",
                    "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=400,height=600"
                );
            },
            error: function () {
                alert("Something Went Worng...");
            }
        })

    }
}
var devs = document.getElementsByClassName("devs");

for (var i = 0; i < devs.length; i++) {
    devs[i].addEventListener('click', onClick);
}

var ids = $('.clickableDivs')
    .map(function (_, x) {
        return x.id;
    })
    .get();

document
    .getElementById('datatable-search-input')
    .addEventListener('input', (e) => {
        for (var i = 0; i < ids.length; i++) {
            let currDiv = document.getElementById(ids[i]);
            if (currDiv.innerHTML.includes(e.target.value)) {
                currDiv.style.display = "block";
            } else {
                currDiv.style.display = "none";
            }
        }
    });

var url = "/developers/register";
$("#createBtn")
    .click(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'text',
            success: window.location = url

        })
    });
