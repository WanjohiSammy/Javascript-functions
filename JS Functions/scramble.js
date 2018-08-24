

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters 
// can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

function scramble(str1, str2) {
	//this variable stores every char that matches is string
	var holds = "";
	var str1Arr = str1.split("");
	var str2Arr = str2.split("");

 	//check if characters of str2 are in str1
 	for(let i = 0; i < str2Arr.length; i++){
 		for(let j = 0; j < str1Arr.length; j++){
 			if(str2Arr[i] == str1Arr[j]){
 				holds += str1Arr[j];
 				j = str1.length;
 			}
 		}
 	}
 	console.log(holds);

 	if(str2.toString() == holds.toString()){
 		return true;
 	}else{
 		return false;
 	}
}
scramble('rkqodlw','world');
scramble('jscripts','javascript')

scramble('scriptjava','javascript');
scramble('aabbcamaomsccdd','commas');
