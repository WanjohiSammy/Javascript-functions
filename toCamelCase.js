/*
*Complete the method/function so that it converts dash/underscore delimited words 
*into camel casing. The first word within the output should be capitalized only if the 
*original word was capitalized.
*/

function toCamelCase(str){
	var strSplit = str.split('');
	var arr = [];
	var holds;
	var res = "";

	for(let n = 0; n < strSplit.length; n++){
		if(strSplit[n] == "-" || strSplit[n] == "_"){

			holds = strSplit[n + 1].toUpperCase();

			arr.push(holds);
			n++;

		}else{
			arr.push(strSplit[n]);
		}
	}
	for(let j = 0; j < arr.length; j++){
		res += arr[j];
	}

	return res;

}
toCamelCase("the-stealth-warrior");


function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

function toCamelCase(str){
 str = str.split(/[-_]/);
 for(var i = 1;i < str.length;i++){
 
   str[i] = str[i].charAt(0).toUpperCase().concat(str[i].slice(1));
 
 }
 return str.join("");
}