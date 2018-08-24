
/*
*Return a number if it is prime number
*/

//Defining a function that checks if a number is prime number or not
function isPrimeNumber(num){
	//variable to store remainder
	var rem = 0;
	//loop across num from 2 to num - 1
	for(let i = 2; i < num; i++){
		//divide num by i
		rem = num % i;

		//if there is no remainder
		if(rem == 0){
			return num + ": is not a prime number";
		}
	}
	//otherwise num is a prime number
	return num + ": is a prime number" 
}

isPrimeNumber(9);


/*
*List all prime numbers in the range provided in an array
*/

function allPrimeNumbers(a,b){
	//empty array to store prime numbers
	var arr = [];
	var holdsArr = [];
	//variable to store remainder

	for(let i = a; i <= b; i++){
		holdsArr.push(i);
	}
	console.log(holdsArr);

	var count = holdsArr.length;

	//loop through a to b
	for(let i = 0; i < count; i++){
		//loop through 2 to i + 1
		for(let j = 2; j <= count; j++){
			//if there is no remainder
			if(holdsArr[i] != j){
				if(holdsArr[i] % j == 0){
					//remove all elements with a rem == 0
					arr.push(holdsArr[i]);
					holdsArr.splice(i, 1);
				}
			}
		}
	}
	console.log(count);
	return holdsArr;
}

allPrimeNumbers(1, 10);
