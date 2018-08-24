

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses 
// is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens){
	if(0 < parens.length < 100){
		 //arrays to store parens
		  var arr1 = parens.split("");
		  var arr2 = parens.split("");
		  //to store ( and ) if both are found
		  var arr = [];

		  if(arr1[0] == ")" || arr1[arr1.length - 1] == "("){
		  	return false;
		  }

		  //compares arr1 and arr2
		  for(let i = 0; i < arr1.length; i++){
		  	for(let j = 0; j < arr2.length; j++){
		  		if(((arr1[i] == "(") && (arr2[j] == ")")) || ((arr1[i] == ")") && (arr2[j] == "("))){
		  			arr.push(arr1[i] + arr2[j]);
		  			arr2.splice(j, 1);
		  			j = arr2.length;
		  		}
		  		
		  	}

		  	// console.log(arr1[i]);
		  }

		  if(arr2.length == 0){
		  	return true;
		  }else{
		  	return false;
		  }
	}
}
validParentheses( "())" );


// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string){
   var tokenizer = /[()]/g, // ignores characters in between; parentheses are
       count = 0,           // pretty useless if they're not grouping *something*
       token;
   while(token = tokenizer.exec(string), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}


function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}


function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}


function validParentheses(parens){
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}


function validParentheses(parens) {
  var cmp = 0;
  parens.split('').forEach(function(v) {
    cmp += v==='(' ? 1 : -1;
    cmp = Math.abs(cmp);
  });
  return cmp === 0;
}


function validParentheses(parens){
  for (var i = 0, depth = 0; i < parens.length; i++) {
    if (parens[i] == '(') depth++;
    if (parens[i] == ')') depth--;
    if (depth < 0) return false;
  }
  return depth == 0;
}


function validParentheses(parens){
  return 0 == parens.split("").reduce(function (open, paren) {
    if (open >= 0) {
      open += paren == '(' ? 1 : 0;
      open -= paren == ')' ? 1 : 0;
    }
    return open;
  }, 0);
}



function validParentheses(parens){
  while(parens.indexOf('()') !== -1){
    parens = parens.split('()').join('');
  }
  return parens.length === 0;
}


function validParentheses(parens){
  var open = 0;
  var walk = parens.split('').every(function(s) {
    return (open += s === "(" ? 1 : -1) >= 0;
  });
  return walk && open === 0;
}