

function validSolution(board){
	var inString = "";
	var holdThree = "";
	var requiredNums = "";
	var nineNine = [];
	var holds = "";
	let m = 0;
	for(let i = 0; i < board.length; i++){
		for(let j = 0; j < board[i].length; j++){
			inString += board[i][j];
		}
	}
	while(m < inString.length){
		for(let i = m; i < inString.length; i = i + 9){
			for(let j = i; j < i + 3; j++){
				holdThree += inString[j];
			}
		}
		m+=3;
	}
	for(let j = 0; j < 81; j++){
		requiredNums += holdThree[j];
	}

	for(let i = 0; i < requiredNums.length; i+=9){
		for(let j = i; j < i + 9; j++){
			holds += requiredNums[j];
		}
		nineNine.push(holds);
		holds = "";
	}

	for(let i = 0; i < nineNine.length; i++){
		holds = nineNine[i];
		console.log(holds);
		if(holds.match(/[0]/) == "0" || holds.match(/[0]/) == 0){
			return false;
		}

		if(holds.match(/[1]/) != "1" || holds.match(/[1]/) != 1){
			return false;
		}
		if(holds.match(/[2]/) != "2" || holds.match(/[2]/) != 2){
			return false;
		}
		if(holds.match(/[3]/) != "3" || holds.match(/[3]/) != 3){
			return false;
		}
		if(holds.match(/[4]/) != "4" || holds.match(/[4]/) != 4){
			return false;
		}
		if(holds.match(/[5]/) != "5" || holds.match(/[5]/) != 5){
			return false;
		}
		if(holds.match(/[6]/) != "6" || holds.match(/[6]/) != 6){
			return false;
		}
		if(holds.match(/[7]/) != "7" || holds.match(/[7]/) != 7){
			return false;
		}
		if(holds.match(/[8]/) != "8" || holds.match(/[8]/) != 8){
			return false;
		}
		if(holds.match(/[9]/) != "9" || holds.match(/[9]/) != 9){
			return false;
		}
	}

	return true;
}
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); 


function equals45(n){
  return n == 45;
}

function validSolution(board){
  var sumh = [0,0,0,0,0,0,0,0,0];
  var sumv = [0,0,0,0,0,0,0,0,0];
  osums = [[0,0,0],[0,0,0],[0,0,0]];
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
    }
  }
  for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
  return (sumh.every(equals45) && sumv.every(equals45));
}


function validSolution(board){
  var validSet = s => s.size == 9 && !s.has(0);
  var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
  var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
  var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
  var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
  for (var i = 0; i < 9; i++)
    if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
      return false;
  return true;
}


function validSolution(board){
  // check horizontal lines
  for(var j=0; j<9; j++){
    if(!check(board[j])) return false;
  }
  
  // check vertical lines
  for(var j=0; j<9; j++){
    var line = [];
    for(var k=0; k<9; k++){
      line.push(board[k][j]);
    }
    if(!check(line)) return false;
  }
  
  // check 3x3 squares
  for(var j=0; j<9; j+=3){
    for(var k=0; k<9; k+=3){
      var square = [];
      for(var l=j; l<j+3; l++){
        for(var m=k; m<k+3; m++){
          square.push(board[l][m]);
        }
      }
      if(!check(square)) return false;
    }
  }
  
  // if it hasn't returned false so far then we
  // have a valid 9x9 square, so return true
  return true;
}

// checks that an array of length 9 contains 
// exactly the numbers 1, 2, ..., 9
function check(numbers){
  return numbers.slice(0).sort().every(function(e, i){return e==i+1;});
}


function validSolution(board){
  for (var i=0; i<board.length; i++) {
    var col = [];
    var square = [];
    var startRow = Math.floor(i/3) * 3;
    var startCol = i%3 * 3;
    for (var j=0; j<board[0].length; j++) {
      col.push(board[j][i]);
      square.push(board[startRow+Math.floor(j/3)][startCol+j%3]);
    }
    if (!validRange(board[i]) || !validRange(col) || !validRange(square)) return false;
  }
  return true;
}

function validRange(arr) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] < 1 || arr[i] > 9 || arr.indexOf(arr[i]) !== i) return false
  }
  return true;
}