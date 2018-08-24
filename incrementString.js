

/*Your job is to write a function which increments a string, to create a new string. If the string already ends with a 
number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended 
to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/

function incrementString (strng) {
  // return incrementedString

  var dig = strng.match(/\d/g);

  var num = Number(strng);
  if(strng == "" || dig == null || dig == "null" || dig == ""){
      strng += "1";
      return strng;
  }
  else if(isNaN(dig) == false && isNaN(num) == false){
  	num += 1;
  	return num.toString();
  }else{
  	var holds = "";
    var nums = "";
  	strng = strng.split('');

  	for(let j = 0; j < strng.length; j++){
  		for(let i = 0; i < dig.length; i++){
  			if(strng[j] == dig[i].toString()){
  				strng.splice(j, 1);
  			}
  		}
  	}
    for(let i = 0; i < dig.length; i++){
      nums += dig[i];
    }
    nums = (parseInt(nums) + 1).toString();
    if(nums.length < dig.length){
      var zeros = "";
      for(let i = 0; i < dig.length - nums.length; i++){
        zeros += '0';
      }
      nums = zeros + nums;

    }

  	for(let i = 0; i < strng.length; i++){
  		holds += strng[i];
    }

    return holds += nums;
  }
}
incrementString("foo000");


function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
      return +d + 1 + ns.replace(/9/g, '0');
    });
}


function incrementString(input) {
  return input.replace(/\d*$/, function(n) {
    var x = ~~n + 1
    return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
  })
}


function incrementString (str) {
  str = str.split('');
  if (isNaN(str[str.length - 1]) === false) {
    for (var i = str.length - 1; i >= 0; --i) {
      if (isNaN(str[i]) === false) {
        var num = +str[i];
        if (num !== 9) {
          str.splice(i, 1, (++num).toString());
          break;
        }
        str.splice(i, 1, '0');
      } else if (isNaN(str[i + 1]) === false && str[i + 1] === '0') {
        str.splice(i + 1, 0, '1');
      } else {
        break;
      }
    }
  } else {
    str.push('1');
  }
  return str.join('');
}



function incrementString(str){
  var c = str[str.length-1];
    switch(c){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
            case '9': return incrementString(str.substring(0, str.length-1)) + 0;
            default: return str+"1";
                }
}




function incrementString (strng) {
  var str = strng.replace(/[0-9]/gi,'');
  var num = strng.replace(/[^0-9]/gi,'');
  num++;
  var t = str + num;
  if((strng.length - t.length) ==2)
    str +='00';
  if((strng.length - t.length) ==1)
    str +='0';
  return str+num;
}


function incrementString (strng) {
  if(!/\d+$/.test(strng)) return strng+'1'

  strng = strng.replace(/\d+$/, function (number){
    var len = number.length;
    number = (+number+1).toString();
    if(number.length >= len){
      return number;
    }else {
      return number.padStart(len,'0');
    }
  });
  
  return strng;
}