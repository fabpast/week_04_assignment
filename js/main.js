$(document).ready(toDoWhenReady);

$('.readmore').click(showMore);
$('.readless').click(showLess);

function toDoWhenReady() {
  $('.readmore').click(showMore);
}

function showMore(event) {
  event.preventDefault();
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
  }

  function showLess(event) {
    event.preventDefault();
    $('#showThisOnClick').slideUp();
    $('.readmore').show();
    $('.readless').hide();
  }
