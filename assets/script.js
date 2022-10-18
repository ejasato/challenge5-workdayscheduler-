$(document).ready(function () {
  //displays current day & time.
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  //calls the function that tracks and changes the color of the timeblocks according to past present and future
  hourTracker();
  //load any saved to dos data from LocalStorage and puts it into the right timeblock
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracker() {
      //gets current hour
      var currentHour = moment().hour();

      // loop over all 9 time blocks to change the color of the text area depending on what time it is
      $(".time-block").each(function () {
        //this gets the hour of the blocks by getting the first number in the string
          var blockHour = parseInt($(this).attr("id").split("hour")[1]);

          //changes the color of the timeblock columns 
          if (blockHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  //listener to save details of the planner and which time block it is in
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val(); // the text of the save button
    var time = $(this).parent().attr("id"); //the time block of the save button
    localStorage.setItem(time, text);
  })
})