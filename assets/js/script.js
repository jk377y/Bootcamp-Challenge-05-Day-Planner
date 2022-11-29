

// TODO: Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
  
  // TODO: Add code to display the current date in the header of the page.
  // I chose military time format.
  $(function () {
    var whatTimeIsIt = dayjs().format('ddd, MMM DD YYYY, HH:mm:ss');
    $('#currentDay').text(whatTimeIsIt);
  });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  var hourNine = document.getElementById('hourNine').textContent;
  var hourTen = document.getElementById('hourTen').textContent;
  var hourEleven = document.getElementById('hourEleven').textContent;
  var hourTwelve = document.getElementById('hourTwelve').textContent;
  var hourThirteen = document.getElementById('hourThirteen').textContent;
  var hourFourteen = document.getElementById('hourFourteen').textContent;
  var hourFifteen = document.getElementById('hourFifteen').textContent;
  var hourSixteen = document.getElementById('hourSixteen').textContent;
  var hourSeventeen = document.getElementById('hourSeventeen').textContent;
  var currentHour = dayjs().format('HH')
  
  // testing vars to make sure the correct items are being called
  // console.log(hourNine);
  // console.log(hourTen);
  // console.log(hourEleven);
  // console.log(hourTwelve);
  // console.log(hourThirteen);
  // console.log(hourFourteen);
  // console.log(hourFifteen);
  // console.log(hourSixteen);
  // console.log(hourSeventeen);
  // console.log(currentHour);
  // console.log(typeof currentHour);
  // console.log(typeof hourNine);
    

    // setting background to past, present, future colors based on the current hour
    // in hindsight i could have done this with add/remove class also
    if (hourNine < currentHour) {$("#hour_9").css("background", "#d3d3d3")} 
    else if (hourNine == currentHour) {$("#hour_9").css("background", "#ff6961")}
    else if (hourNine > currentHour) {$("#hour_9").css("background", "#77dd77")}

    if (hourTen < currentHour) {$("#hour_10").css("background", "#d3d3d3")} 
    else if (hourTen == currentHour) {$("#hour_10").css("background", "#ff6961")}
    else if (hourTen > currentHour) {$("#hour_10").css("background", "#77dd77")}

    if (hourEleven < currentHour) {$("#hour_11").css("background", "#d3d3d3")} 
    else if (hourEleven == currentHour) {$("#hour_11").css("background", "#ff6961")}
    else if (hourEleven > currentHour) {$("#hour_11").css("background", "#77dd77")}

    if (hourTwelve < currentHour) {$("#hour_12").css("background", "#d3d3d3")} 
    else if (hourTwelve == currentHour) {$("#hour_12").css("background", "#ff6961")}
    else if (hourTwelve > currentHour) {$("#hour_12").css("background", "#77dd77")}

    if (hourThirteen < currentHour) {$("#hour_13").css("background", "#d3d3d3")} 
    else if (hourThirteen == currentHour) {$("#hour_13").css("background", "#ff6961")}
    else if (hourThirteen > currentHour) {$("#hour_13").css("background", "#77dd77")}

    if (hourFourteen < currentHour) {$("#hour_14").css("background", "#d3d3d3")} 
    else if (hourFourteen == currentHour) {$("#hour_14").css("background", "#ff6961")}
    else if (hourFourteen > currentHour) {$("#hour_14").css("background", "#77dd77")}

    if (hourFifteen < currentHour) {$("#hour_15").css("background", "#d3d3d3")} 
    else if (hourFifteen == currentHour) {$("#hour_15").css("background", "#ff6961")}
    else if (hourFifteen > currentHour) {$("#hour_15").css("background", "#77dd77")}

    if (hourSixteen < currentHour) {$("#hour_16").css("background", "#d3d3d3")} 
    else if (hourSixteen == currentHour) {$("#hour_16").css("background", "#ff6961")}
    else if (hourSixteen > currentHour) {$("#hour_16").css("background", "#77dd77")}

    if (hourSeventeen < currentHour) {$("#hour_17").css("background", "#d3d3d3")} 
    else if (hourSeventeen == currentHour) {$("#hour_17").css("background", "#ff6961")}
    else if (hourSeventeen > currentHour) {$("#hour_17").css("background", "#77dd77")}
    


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  var btnNine = document.getElementById('btnNine');
  btnNine.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreNine = document.getElementById('block9').value;
    localStorage.setItem("9", valStoreNine);
  })

  var btnTen = document.getElementById('btnTen');
  btnTen.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreTen = document.getElementById('block10').value;
    localStorage.setItem("10", valStoreTen);
  })

  var btnEleven = document.getElementById('btnEleven');
  btnEleven.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreEleven = document.getElementById('block11').value;
    localStorage.setItem("11", valStoreEleven);
  })

  var btnTwelve = document.getElementById('btnTwelve');
  btnTwelve.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreTwelve = document.getElementById('block12').value;
    localStorage.setItem("12", valStoreTwelve);
  })
  
  var btnThirteen = document.getElementById('btnThirteen');
  btnThirteen.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreThirteen = document.getElementById('block13').value;
    localStorage.setItem("13", valStoreThirteen);
  })

  var btnFourteen = document.getElementById('btnFourteen');
  btnFourteen.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreFourteen = document.getElementById('block14').value;
    localStorage.setItem("14", valStoreFourteen);
  })

  var btnFifteen = document.getElementById('btnFifteen');
  btnFifteen.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreFifteen = document.getElementById('block15').value;
    localStorage.setItem("15", valStoreFifteen);
  })

  var btnSixteen = document.getElementById('btnSixteen');
  btnSixteen.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreSixteen = document.getElementById('block16').value;
    localStorage.setItem("16", valStoreSixteen);
  })

  var btnSeventeen = document.getElementById('btnSeventeen');
  btnSeventeen.addEventListener('click', function(event){
    event.preventDefault();
    var valStoreSeventeen = document.getElementById('block17').value;
    localStorage.setItem("17", valStoreSeventeen);
  })



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  block9.innerHTML = localStorage.getItem("9");
  block10.innerHTML = localStorage.getItem("10");
  block11.innerHTML = localStorage.getItem("11");
  block12.innerHTML = localStorage.getItem("12");
  block13.innerHTML = localStorage.getItem("13");
  block14.innerHTML = localStorage.getItem("14");
  block15.innerHTML = localStorage.getItem("15");
  block16.innerHTML = localStorage.getItem("16");
  block17.innerHTML = localStorage.getItem("17");


});

