// Fade out "Blue Flamingo when it gets to grey box"

$(document).ready(function() {
  console.log("DOM ready!");

  const greyBox = $('#grey-box');
  const mainHeader = $('#mainHeader');

  $.fn.inView = function() {
    //Window Object
    var win = $(window);
    //Object to Check
    obj = $(greyBox);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
  };


  $(window).scroll(function() {

    if (($("#obj").inView())) {
      console.log("grey-box in view");
      mainHeader.css('opacity', '0.1');
    } else if (($("#obj").inView() === false)) {
      console.log("grey-box not view");
      mainHeader.css('opacity', '0.8');
    };
  });
});