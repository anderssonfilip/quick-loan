
// https://gist.github.com/arch1t3ct/4174961
function lastBusinessDayOfCurrentMonth() {

  var date = new Date();
  var offset = 0;
  var result = null;

  var year = date.getFullYear();
  var month = date.getMonth() === 12 ? 1 : date.getMonth() + 1;

  do{
    result = new Date(year, month, offset);
    offset--;

  } while (0 === result.getDay() || 6 === result.getDay());

  return result;
}

// ordinal number
function nth(d) {
  if(d>3 && d<21) return 'th';
  switch (d % 10) {
    case 1:  return 'st';
    case 2:  return 'nd';
    case 3:  return 'rd';
    default: return 'th';
  }
}
