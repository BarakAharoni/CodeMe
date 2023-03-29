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


