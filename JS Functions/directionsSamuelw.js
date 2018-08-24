
//function to get direction from a  given array of cordinal points to move
// <- PLAN ->
// 1. Get the array elements
// 2. if either N or S follows S or N remove both elements
// 3. if either E or W follows W or E remove both elements
// 4. return the remaining elements as an array or empty array

function getDirections(arr){
	for(let i = 0; i < arr.length; i++){
		if(((arr[i] == "NORTH") && (arr[i + 1] == "SOUTH")) || ((arr[i] == "SOUTH") && (arr[i + 1] == "NORTH"))){
			arr.splice(i, 2);
			i = i - 2;
		}
		if(((arr[i] == "WEST") && (arr[i + 1] == "EAST")) || ((arr[i] == "EAST") && (arr[i + 1] == "WEST"))){
			arr.splice(i, 2);
			i = i - 2;
		}
	}

	return arr;
}

getDirections(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
// getDirections(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "WEST"]);