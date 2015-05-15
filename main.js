// returns array with string representations of decimal rounded to two decimals.
// first element equals interest for the duration,
// second element equals repay (borrowing + interest)
function getInterestAndRepay(borrowing, duration){

  var interestRate = 0.008;
  var interest = parseInt(borrowing) * interestRate * parseInt(duration);

  return [interest.toFixed(2), (parseInt(borrowing) + interest).toFixed(2)];
}

function setBorrowing(borrowing){
  if(borrowing > 400){
    borrowing = 400;
  }
  else if (borrowing < 50)
  {
    borrowing = 50;
  }

  $('input[name=borrowing]').val(borrowing);
  $('span[name=borrowing]').text(borrowing);

  var interestAndRepay = getInterestAndRepay(borrowing, $('input[name=duration]').val());
  $('#interest').text(interestAndRepay[0]);
  $('#total').text(interestAndRepay[1]);
}

function setDuration(duration){
  if(duration > 30){
    duration = 30;
  }
  else if (duration < 1)
  {
    duration = 1;
  }

  $('input[name=duration]').val(duration);

  var today = new Date();
  var repayDate = new Date(today);
  repayDate.setDate(today.getDate() + parseInt(duration));

  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  $('#repaymentDate').text(days[repayDate.getDay()] + ' ' + repayDate.getDate() + nth(repayDate.getDate()) + ' ' + months[repayDate.getMonth()] + ' ' + repayDate.getFullYear());

  var interestAndRepay = getInterestAndRepay($('span[name=borrowing]').text(), duration);
  $('#interest').text(interestAndRepay[0]);
  $('#total').text(interestAndRepay[1]);
}


$(document).ready(function(){

  var borrowing = 111;
  var duration = parseInt(1 + (lastBusinessDayOfCurrentMonth() - new Date())/ (24 * 60 * 60 * 1000));

  setBorrowing(borrowing);
  setDuration(duration);

  var interestAndRepay = getInterestAndRepay(borrowing, duration);
  $('#interest').text(interestAndRepay[0]);
  $('#total').text(interestAndRepay[1]);;

  $('#decBorrowing').click(function() {
    var borrowing = parseInt($('span[name=borrowing]').text()) - 1;
    setBorrowing(borrowing);
  });

  $('#incBorrowing').click(function() {
    var borrowing = parseInt($('span[name=borrowing]').text()) + 1;
    setBorrowing(borrowing);
  });

  $('#decDuration').click(function() {
    var duration = parseInt($('input[name=duration]').val()) - 1;
    setDuration(duration);
  });

  $('#incDuration').click(function() {
    var duration = parseInt($('input[name=duration]').val()) + 1;
    setDuration(duration);
  });

  $('input[name=borrowing][type=number]').on('change', function(){
    setBorrowing(this.value)
  });

  $('input[name=borrowing][type=range]').on('input', function(){
    setBorrowing(this.value)
  });

  $('input[name=duration][type=number]').on('change', function(){
    setDuration(this.value)
  });

  $('input[name=duration][type=range]').on('input', function(){
    setDuration(this.value)
  });

});
