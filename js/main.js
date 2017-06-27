$(document).ready(toDoWhenReady);

function toDoWhenReady() {
  $('.readmore').click(showMore);
  $('.readless').click(showLess);
}

function showMore(event) {
  event.preventDefault();
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
}

function showLess(event) {
  event.preventDefault();
  $('#show-this-on-click').slideUp();
  $('.readmore').show();
  $('.readless').hide();
}
