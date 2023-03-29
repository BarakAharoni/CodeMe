var jobId;

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

  

const onClick = (e) => {
    var t = e.target;
    while (t && !t.id)
        t = t.parentNode;
    if (t) {
        console.log("You clicked element #" + t.id);
        jobId = t.id;
        // window.open(
        //     "./jobOffer/?id=" + t.id,
        //     "_blank",
        //     "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=800,height=800"
        // );
    }
}
var jobs = document.getElementsByClassName("jobs");

for (var i = 0; i < jobs.length; i++) {
    jobs[i].addEventListener('click', onClick);
}


var ids = $('.clickableDivs').map(function(_, x) { return x.id; }).get();

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


var url = "/jobOffers/create";
$("#createBtn").click(function(e) {
    e.preventDefault();
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'text',
        success: window.location = url

  })
});



