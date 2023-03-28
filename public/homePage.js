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


