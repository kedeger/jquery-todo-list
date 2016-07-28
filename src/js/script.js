$(document).ready(function(){

var xButton = '<a><button>X</button></a>;'

$('#toDoList').on('submit', function(elem) {
  elem.preventDefault();
  var input = $('#inputSpot').val();
  $('#taskList').append('<li>' + input + xButton + '</li>')
});


$(document).on('click', 'a', function(e) {
  e.preventDefault();
  $(this).parent().remove();
})

});
