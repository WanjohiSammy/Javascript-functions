

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
  var results = [];
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
  		results.push(sec);
  	}else if(sec > 1){
  		sec = sec + " seconds";
  		results.push(sec);
  	}
  	
  	if(minutes >= MINS){
	  	hrs = parseInt(minutes / MINS);
	  	minutes = minutes % MINS;

	  	if(minutes == 1){
	  		minutes = minutes + " minute";
	  		results.push(minutes);
	  	}else if(minutes > 1){
	  		minutes = minutes + " minutes";
	  		results.push(minutes);
	  	}


	  	if(hrs >= HOURS){
		  	dys = parseInt(hrs / HOURS);
		  	hrs = hrs % HOURS;

		  	if(hrs == 1){
		  		hrs = hrs + " hour";
		  		results.push(hrs);
		  	}else if(hrs > 1){
		  		hrs = hrs + " hours";
		  		results.push(hrs);
		  	}

		  	 if(dys >= DAYS){
			  	years = parseInt(dys / DAYS);
			  	dys = dys % DAYS;

			  	if(dys == 1){
			  		dys = dys + " day";
			  		results.push(dys);
			  	}else if(dys > 1){
			  		dys = dys + " days";
			  		results.push(dys);
			  	}

			  	if(years > 0){
				  	if(years == 1){
				  		years = years + " year";
				  		results.push(years);
				  	}else if(years > 1){
				  		years = years + " years";
				  		results.push(years);
				  	}

				  }

			  }else{
			  	if(dys == 1){
			  		dys = dys + " day";
			  		results.push(dys);
			  	}else if(dys > 1){
			  		dys = dys + " days";
			  		results.push(dys);
			  	}
			  }

		  }else{
		  	if(hrs == 1){
		  		hrs = hrs + " hour";
		  		results.push(hrs);
		  	}else if(hrs > 1){
		  		hrs = hrs + " hours";
		  		results.push(hrs);
		  	}
		  }
	 
	  }else{
	  	if(minutes == 1){
	  		minutes = minutes + " minute";
	  		results.push(minutes);
	  	}else if(minutes > 1){
	  		minutes = minutes + " minutes";
	  		results.push(minutes);
	  	}
	  }

  }else{
  	 if(seconds == 1){
  		seconds = seconds + " second";
  		results.push(seconds);
  	}else if(seconds > 1){
  		seconds = seconds + " seconds";
  		results.push(seconds);
  	}
  }

  var finalAns = "";

  if(results.length == 1){

  	return results[0];

  }else{

  	for(let i = results.length - 1; i > 1; i--){
	  	finalAns += results[i] + ", ";
	  }
  }
  
  return finalAns + results[1] + " and " + results[0];

}
formatDuration(3662);


function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}


function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}


function formatDuration (seconds) {
  if(!seconds)return "now";
  var durations = {year:365*24*60*60,day:24*60*60,hour:60*60,minute:60,second:1};
  var english=[];
  for(var duration in durations){
    var nb = Math.floor(seconds/durations[duration]);
    if(nb)english.push(nb+" "+duration+(nb>1?'s':''));
    seconds%=durations[duration];
  }
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}


var formatDuration = function() {
  var unitsData = [
    {text:'year',seconds:31536000},
    {text:'day',seconds:86400},
    {text:'hour',seconds:3600},
    {text:'minute',seconds:60},
    {text:'second',seconds:1}
  ];
  
  return function (seconds) {
    if (seconds < 0) throw 'Invalid number';
    if (seconds == 0) return 'now';
    var results = [];
    unitsData.forEach(function(ud) {
      if (seconds >= ud.seconds) {
        var units = Math.floor(seconds / ud.seconds);
        seconds = seconds % ud.seconds;
        if (units > 0) {
          results.push(units + ' ' + ud.text + (units == 1 ? '' : 's'));
        }
      }
    });
    return (results.length == 1
        ? results[0]
        : (results.slice(0, results.length - 1).join(', ') + ' and ' + results[results.length - 1]));
  }
}();


function formatDuration(seconds) {
    var units = ['year', 'day', 'hour', 'minute', 'second'];
    var years = seconds / 60 / 60 / 24 / 365 < 1 ? 0 : seconds / 60 / 60 / 24 / 365;
    var days = seconds / 60 / 60 / 24 % 365;
    var hrs = seconds / 60 / 60 % 24;
    var mins = seconds / 60 % 60;
    return seconds ? [years, days, hrs, mins, seconds % 60].map(function(num, i) {
        num = parseInt(num, 10);
        return num && num + ' ' + units[i] + (num > 1 ? 's' : '');
    }).filter(Boolean).join(', ').replace(/,\s(?=[\d\s\w]+$)/, ' and ') : 'now';
}


function formatDuration (s) {
   if (s==0) return "now";
   r=""; y=s/31536000|0; s-=y*31536000; d=s/86400|0; s-=d*86400; h=s/3600|0; s-=h*3600|0; m=s/60|0; s-=m*60;
   if (y>0) r+=y+""+(y>1?" years, ":" year, ");
   if (d>0) r+=d+""+(d>1?" days, ":" day, ");
   if (h>0) r+=h+""+(h>1?" hours, ":" hour, ");
   if (m>0) r+=m+""+(m>1?" minutes, ":" minute, ");
   if (s>0) r+=s+""+(s>1?" seconds, ":" second, ");
   r=r.substring(0,r.length-2); if ((p=r.indexOf(','))!=(p1=r.lastIndexOf(','))||(p==p1&&p>0)) r=r.substring(0,p==p1?p:p1)+" and"+r.substring(1+(p==p1?p:p1));
   return r
}

 