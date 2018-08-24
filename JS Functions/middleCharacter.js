

function getMiddle(s){
	var middleChar = "";

	let rem = s.length % 2;
	if(rem == 0){
		let numA = (s.length / 2) - 1;
		let numB = numA + 1;
		middleChar += s.charAt(numA) + s.charAt(numB);
	}else{
		let newLength = s.length + 1;
		let middleIndex = newLength / 2;
		middleChar += s.charAt(middleIndex - 1);
	}
	return middleChar;
}
getMiddle("samuel");

