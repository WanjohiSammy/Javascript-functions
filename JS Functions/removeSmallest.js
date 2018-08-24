

function removeSmallest(numbers) {
  let numArray = numbers.slice();
  for (let i = 0; i < numArray.length; i++) {
    let count = 0;
    for (let k = 0; k < numArray.length; k++) {
      
      if (numArray[i] <= numArray[k]) {
        count += 1;
      }
      if (count === numArray.length) {
        numArray.splice(i, 1);
        return numArray;
      }
    }
  }
  return numArray;
}

function removeSmallest(numbers) {
  var tempArray = numbers.slice();
  
  if (tempArray.length == 0) return tempArray;
  
  var smallest = tempArray[0];
  var smallestNumber = 0;
  for (var i = 1; i < tempArray.length; i++)
  {
    if (tempArray[i] < smallest) {
      smallest = tempArray[i];
      smallestNumber = i;
    }
  }
  tempArray.splice(smallestNumber, 1);
  return tempArray;
}

function removeSmallest(numbers) {
  if(numbers.length <= 1)
    return [];
  let tmp = numbers.slice();
  let index = 0;
  let min = numbers[index];
  for(let i=1; i<numbers.length; i++) {
    if(min > numbers[i]) {
      index = i;
      min = numbers[i];
    }
  }
  tmp.splice(index, 1);
  return tmp;
}
