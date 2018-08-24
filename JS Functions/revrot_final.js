
// The input is a string str of digits. Cut the string into chunks 
// (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk;
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

// <-- PLAN -->

function revrot(str, sz){
	str = str.split("");
	console.log(str);
	var holds = "";
	var finalStr = "";
	var sum = 0;
	var arr = [];
	//validates str, sz
	if((str.length <= 0) || (str == "") || (str.length < sz) || (sz <= 0)){
    	return "";
    }else{
    	if(str.length % sz == 0){
    		str = str;
    	}else{
    		str.length = str.length - (str.length % sz);
    	}

    	for(let i = 0; i < str.length; i = i + sz){
    		for(let j = i; j < sz + i; j++){
    			arr.push(str[j]);
    		}
    		for(let k = 0; k < arr.length; k++){
    			holds += arr[k];
    			sum += Math.pow(arr[k], 3);
    		}
    		if(sum % 2 == 0){
    			holds = holds.split("");
    			holds.reverse();
    			finalStr += holds;
    			holds = "";
    		}else{
    			holds = holds.split("");
    			var firstElem = holds[0];
    			holds.shift();
    			holds.push(firstElem);
    			finalStr += holds;
    			holds = "";
    		}
    		//empty the array
    		arr = [];

    	}
    	finalStr = finalStr.replace(/,/gi, "");
    	return finalStr;
    }
}
revrot("733049910872815764", 5);