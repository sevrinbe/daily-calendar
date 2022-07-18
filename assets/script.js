var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);
var timeBlock = $(".time-slot");

var now = parseInt(moment().format("H"));

$.each(timeBlock, function () {
    var hourId = $(this).attr("id");
    if (hourId == now) {
      $(this).addClass("present");
    } else if (hourId < now) {
      $(this).addClass("past");
    } else if (hourId > now) {
      $(this).addClass("future");
    }
  });

  console.log(now)


$(".saveBtn").on("click", function (event) {
    var calendarItem = event.target.parentElement.parentElement.children[1].children[0].value;
    localStorage.setItem(event.target.attributes[1].value, calendarItem);
  });
  
  $(document).ready(function () {
    if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
      var nineAm = $("<p>" + localStorage["9am"] + "</p>");
      $("#nineAm").append(nineAm[0].innerText);
    } else {
      ("");
    }
  });

  $(document).ready(function () {
    if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
      var tenAm = $("<p>" + localStorage["10am"] + "</p>");
      $("#tenAm").append(tenAm[0].innerText);
    } else {
      ("");
    }
  });
  
  $(document).ready(function () {
    if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
      var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
      $("#elevenAm").append(elevenAm[0].innerText);
    } else {
      ("");
    }
  });
  
  $(document).ready(function () {
    if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
      var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
      $("#twelvePm").append(twelvePm[0].innerText);
    } else {
      ("");
    }
  });
  
  $(document).ready(function () {
    if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
      var onePm = $("<p>" + localStorage["1pm"] + "</p>");
      $("#onePm").append(onePm[0].innerText);
    } else {
      ("");
    }
  });
  
  $(document).ready(function () {
    if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
      var twoPm = $("<p>" + localStorage["1pm"] + "</p>");
      $("#twoPm").append(twoPm[0].innerText);
    } else {
      ("");
    }
  });
  
  $(document).ready(function () {
    if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
      var threePm = $("<p>" + localStorage["3pm"] + "</p>");
      $("#threePm").append(threePm[0].innerText);
    } else {
      ("");
    }
  });
  
  $(document).ready(function () {
    if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
      var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
      $("#fourPm").append(fourPm[0].innerText);
    } else {
      ("");
    }
  });

  $(document).ready(function () {
    if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
      var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
      $("#fivePm").append(fivePm[0].innerText);
    } else {
      ("");
    }
  });