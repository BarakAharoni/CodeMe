//navbar ajax
$('#home').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/',
        dataType: 'text',
        success: window.location = '/'
    })
  }));
  
  $('#devs').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/developers',
        dataType: 'text',
        success: window.location = '/developers'
    })
  }));
  
  $('#devsReg').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/developers/register',
        dataType: 'text',
        success: window.location = '/developers/register'
    })
  }));

  $('#job').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/jobOffers',
        dataType: 'text',
        success: window.location = '/jobOffers'
    })
  }));

  $('#chat').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: "/chat",
        dataType: 'text',
        success: window.location = "/chat"
    })
  }));



const onClick = (e) => {
    var t = e.target;
    while (t && !t.id) 
        t = t.parentNode;
    if (t) {
        var urlDev = "/developers/developerProfile/?id=" + t.id;
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: urlDev,
            success: function () {
                
                window.open(
                    urlDev,
                    "_blank",
                    "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=600,height=600"
                );
            },
            error: function () {
                alert("Something Went Worng...");
            }
        })

    }
}
var devs = document.getElementsByClassName("clickableDivs");

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
.on('click',(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'text',
            success: window.location = url

        })
    }));

    $(".addcomment").click(function ()
    {
        const val = $(this).val();
        $.ajax
        ({
            url: "/comments/addcomment/" + val,
            method: "GET",
            success: function (data)
            {
                window.location = "/comments/addcomment/" + val;
            }
        })
    });
    
    $(".viewcomments").click(function ()
    {
        const val = $(this).val();
        $.ajax
        ({
            url: "/comments/dev/" + val,
            method: "GET",
            success: function (data)
            {
                window.location = "/comments/dev/" + val;
            }
        })
        
    });


