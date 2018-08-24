

// Write a function that takes an (unsigned) integer as input, and returns the number of bits that 
// are equal to one in the binary representation of that number.
// Example: The binary representation of 
// 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
  // Program Me

  var bits = (n >>> 0).toString(2);
  var bitsString = bits.split('');
  var count = 0;

  for(let i = 0; i < bitsString.length; i++){
  	if( bitsString[i] == 1){
  		count++;
  	}
  }

  return count;

};

countBits(0);


function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}



var countBits = function(n)
{
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};

var countBits = function(n) {
  return n !== 0 ? n.toString(2).match(/1/g).length:0;
};


var countBits = function (n) {
  var bits = 0;
  for (; n; n >>= 1) {
    if (n & 1) bits++;
  }
  
  return bits;
};


var countBits = function(n) {
  return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
};