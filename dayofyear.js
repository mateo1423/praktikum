module.exports = {
    dayOfYear: function (year, month, day) {
      let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let days = day;
  
      for (var i = 0; i < month - 1; i++) {
        days += months[i];
      }
  
      if (month > 2 && isLeapYear(year)) days += 1;
      return days;
    },
  };
  
  function isLeapYear(year) {
    if (year % 4 == 0) return true;
    return false;
  }