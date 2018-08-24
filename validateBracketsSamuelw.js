

//A function that valdates brackets

function validatesBrackets(str){
	str = str.split("");

	for(let i = 0; i < str.length; i++){
			if(((str[i] == "(" && str[i + 1] == ")")) || ((str[i] == "[" && str[i + 1] == "]")) || ((str[i] == "{" && str[i + 1] == "}"))){
				str.splice(i, 1);
				str.splice(i, 1);
				i = -1;
			}
	}

	if(str.length <= 0 ){
		return true;
	}
	else{
		return false;
	}

}

validatesBrackets("(({[]}))");