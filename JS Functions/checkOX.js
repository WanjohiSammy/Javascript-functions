

//check for num of x and o in a string if are same
function checkOX(str){
  if(str.match(/o/gi) == null || str.match(/x/gi) == null){
    return false;
  }
  return str.match(/o/gi).length == str.match(/x/gi).length ? true : false;
}
checkOX("xoxoomx")
