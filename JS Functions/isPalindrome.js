

/*A palindrome is a word that is the same forward or backward, like abba or 1551.

They are many ways to check for a palindrome, but I will show you two solutions in JavaScript.*/

const isPalindrome = (str) => {
	let strReverse = str.split('').reverse().join('');

	return strReverse !== str ? false : true;
};
isPalindrome("one");



function isPalindrome(str){
	let strReverse = str.split('').reverse().join('');

	return strReverse !== str ? false : true;
}
isPalindrome("one");


const palindrome = (str) => {

    // front of string
    let begin = 0;
    // back of string
    let end = str.length - 1;
    while (end > begin) {
        if(str[begin++] !== str[end--]) return false;
    }
    return true;
};