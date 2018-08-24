

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an 
isogram. Assume the empty string is an isogram. Ignore letter case*/

function isIsogram(str){
	var strLower = str.toLowerCase();
	strLower = str.split("");
	if(str == ""){
		return true;
	}
	for(let i = 0; i < str.length; i++){
		for(let j = i + 1; j < str.length; j++){
			if(str[i].toLowerCase() == str[j].toLowerCase()){
				return false;
			}
		}
	}

	return true;
}

isIsogram("abcC");