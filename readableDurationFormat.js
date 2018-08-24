

// Your task in order to complete this Kata is to write a function which formats a duration, 
// given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is 
// expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and 
// one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated
//  by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year 
// is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, 
// but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds,
//  but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than 
//  any valid more significant unit of time.

function formatDuration (seconds) {
  // Complete this function
  var MINS = 60, SECS = 60, HOURS = 24, DAYS = 365;
  var years = "", dys = "", hrs = "", minutes = "", sec = "";
  if(seconds <= 0 || seconds == "" || seconds == null){
  	return "now";
  }

  if(seconds >= SECS){
  	minutes = parseInt(seconds / SECS);
  	sec = seconds % SECS;
  	if(sec == 1){
  		sec = sec + " second";
  	}else{
  		sec = sec + " seconds";
  	}

  	if(minutes >= MINS){
	  	hrs = parseInt(minutes / MINS);
	  	minutes = minutes % MINS;

	  	if(minutes == 1){
	  		minutes = minutes + " minute and ";
	  	}else{
	  		minutes = minutes + " minutes and ";
	  	}

	  	if(hrs >= HOURS){
		  	dys = parseInt(hrs / HOURS);
		  	hrs = hrs % HOURS;

		  	if(hrs == 1){
		  		hrs = hrs + " hour,";
		  	}else{
		  		hrs = hrs + " hours,";
		  	}

		  	if(dys >= DAYS){
			  	years = parseInt(dys / DAYS);
			  	dys = dys % DAYS;
			  }else{
			  	if(dys == 1){
			  		return (dys + " day, " + hrs + minutes + sec);
			  	}
			  	return (dys + " days, " + hrs + minutes + sec);
			  }

		  }else{
		  	if(hrs == 1){
		  		return (hrs + " hour, " + minutes + sec);
		  	}
		  	return (hrs + " hours, " + minutes + sec);
		  }

	  }else{
	  	if(minutes == 1){
	  		return (minutes + " minute and " + sec);
	  	}
	  	return (minutes + " minutes and " + sec);
	  }
  }else{
  	if(seconds == 1){
  		return seconds + " second";
  	}
  	return (seconds + " seconds");
  }

  return (years + " years, " + dys + " days, " + hrs + " hours, " + minutes + " minutes and " + sec + " seconds");

}
formatDuration(3662);