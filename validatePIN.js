
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain 
//anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pins){
	var pinStr = pins.split('');

	if(pinStr.length == 4 || pinStr.length == 6){
		for(let i = 0; i < pinStr.length; i++){
			if (isNaN(pinStr[i]) == true ){
				return false;
			}
		}
		return true;
	}else{
		return false;
	}
}

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}

function validatePIN (pin) {
  return  (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
}

function validatePIN (pin) {
  var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
  return reg.test(pin);
}

function validatePIN (pin) {
  //return true or false
  var n = pin.length;
  if( n != 4 && n != 6)
      return false;
  for (var i in pin)
      if (pin[i] > '9' || pin[i] < '0')
          return false;
  return true;
}