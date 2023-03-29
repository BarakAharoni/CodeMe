$('#newAdmin').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: "/admin/register",
        dataType: 'text',
        success: window.location = "/admin/register"
    })
}));

$('#logout').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: "/logout",
        dataType: 'text',
        success: window.location = "/logout"
    })
}));


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
        success: window.location = '/developers/developers'
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

  $('#newAdmin').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: "/admin/register",
        dataType: 'text',
        success: window.location = "/admin/register"
    })
  }));

  $('#logout').on('click',(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: "/logout",
        dataType: 'text',
        success: window.location = "/logout"
    })
  }));



$("#logout").click(function () {window.location = "/logout"})


const onClick = (e) => {
    let t = e.target;
    if(String(t.id).includes("view") || String(t.id).includes("comment") || String(t.id).includes("deleteAdmin") || String(t.id).includes("editAdmin")){
        return;
    }
    if(!e.target.className.includes("btn")){
        while (t && !t.id) {
            if(String(t.id).includes("view") || String(t.id).includes("comment") || String(t.id).includes("deleteAdmin") || String(t.id).includes("editAdmin")){
                return;
            }
            t = t.parentNode;
        }
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
                    alert("Something Went Worng... " + t.id);
                }
            })
        }
    }
}
const devs = document.getElementsByClassName("devs");

for (let i = 0; i < devs.length; i++) {
    devs[i].addEventListener('click', onClick);
}
//$(".btn").removeEventListener("click", onClick, true);

// var ids = $('.clickableDivs')
//     .map(function (_, x) {
//         return x.id;
//     })
//     .get();
// document
//     .getElementById('datatable-search-input')
//     .addEventListener('input', (e) => {
//         for (var i = 0; i < ids.length; i++) {
//             let currDiv = document.getElementById(ids[i]);
//             if (currDiv.innerHTML.includes(e.target.value)) {
//                 currDiv.style.display = "block";
//             } else {
//                 currDiv.style.display = "none";
//             }
//         }
//     });

const urlRegister = "/developers/register";
$("#createBtn")
.on('click',(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'GET',
            url: urlRegister,
            dataType: 'text',
            success: window.location = urlRegister

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

$('#login').on('click',function (e) {
    const username = $('#username')[0].value
    const password = $('#psw')[0].value
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/login',
        dataType: 'text',
        data: {
            username: username,
            password: password,
            type: "developer"
        },
        success: function () {
            window.location = '/developers'
        },
        
    })
})

const deleteAdmin = $(".deleteAdmin");
deleteAdmin.each(function () {$(this).on('click',function () {
        let id = String($(this).attr('id')).substring(12)
        $.ajax({
            type: 'GET',
            url: "/developers/delete?id=" + id,
            dataType: 'text',
            success: function() {
                alert("profile has been successfully deleted")
                window.location = "/developers"
            }
        })
    })
})

const editAdmin = $(".editAdmin");
editAdmin.each(function () {$(this).on('click',function () {
    let id1 = String($(this).attr('id'))
    id1 = id1.replace("editAdmin-","")
    $.ajax({
        type: 'GET',
        url: "/developers/update?id=" + id1,
        dataType: 'text',
        success: function() {
            window.location = "/developers/update?id=" + id1;
        }
    })
})
})
