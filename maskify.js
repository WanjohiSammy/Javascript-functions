
/*
*Usually when you buy something, you're asked whether your credit card number, 
*phone number or answer to your most secret question is still correct. However,
*since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
*Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

// return masked string
function maskify(cc) {
	var ccHolds = cc.split('');
	var maski = "";
	if(ccHolds.length > 4){
		for(let i = 0; i < ccHolds.length - 4; i++){
			maski += "#";
		}

		for(let i = ccHolds.length - 4; i < ccHolds.length; i++){
			maski += ccHolds[i];
		}

	}
	else{
		maski = cc;
	}
	
	return maski;
}
maskify("4556364607935616")

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

// return masked string
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

// return masked string
function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}


// return masked credit card number
function maskify(cc)
{
  var res = "";
  for(var i=0;i<cc.length-4;++i)
    res += '#';
  res += cc.substr(cc.length-4,cc.length)
  return res;  
}