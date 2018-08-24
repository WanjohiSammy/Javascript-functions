

/*Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, 
 regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature),
 we have this sequence:*/

 function tribonacci(signature, n){
 	let first;
 	let second;
 	let third;
 	let sum;

 	let finalArr = [];

 	if(n <= 3){
 		for(let i = 0; i < n; i++){
 			finalArr.push(signature[i]);
 		}
 		return finalArr;
 	}

 	for(let i = 0; i < signature.length; i++){
 		finalArr.push(signature[i]);
 	}

 	for(let i = 0; i < n - signature.length; i++){
 		first = finalArr[i];
 		second = finalArr[i + 1];
 		third = finalArr[i + 2];

 		sum = first + second + third;

 		finalArr.push(sum);
 	}

 	return finalArr;

 }
 tribonacci([1, 1, 1], 10);