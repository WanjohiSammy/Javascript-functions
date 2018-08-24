

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
// F(n) * F(n+1) = prod.
//Your function productFib takes an integer (prod) and returns an array:

//[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

function productFib(prod){
  //assume n = 20
  let n = 100;
  let prev = 0;
  let next = 1;
  let results;
  let arr = [];
  let trueArr = [];
  let falseArr = [];
 
	for(let i = 1; i <= n; i++){
		arr.push(prev);
		results = prev + next;
		prev = next;
		next = results;
	}

	for(let j = 0; j < arr.length; j++){
		if(prod == (arr[j] * arr[j+1])){
			trueArr.push(arr[j]);
			trueArr.push(arr[j+1]);
			trueArr.push(true);
		}else if((arr[j] * arr[j+1]) > prod){
			falseArr.push(arr[j]);
			falseArr.push(arr[j+1]);
			falseArr.push(false);
			j = arr.length;
		}
	}

	if(trueArr.length != 0){
		return trueArr;
	}else{
		return falseArr;
	}
}

productFib(714);


//Other example codes
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

function productFib(prod){
  var a = 1
  var b = 1;
  while (a*b < prod) {
    var next = a+b;
    a = b;
    b = next;
  }
  return [a, b, a*b===prod];
}

function productFib(prod){
  let a = 0;
  let b = 1;
  for (let i = 0; i < prod; i++) {
    if (a * b > prod) return [a, b, false];
    if (a * b === prod) return [a, b, true];
    [a, b] = [b, a + b];
  }
}

