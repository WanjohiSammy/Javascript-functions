//Remove vowels from strings
function disemvowel(str) {
    var strString = str.toString();
    let myArr = [];
    let vowArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let holdVow = [];
    let arr = [];
    if (strString.length > 0) {
        for (let i = 0; i < strString.length; i++) {
            arr.push(strString.charAt(i));
        }
        console.log(arr);

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < vowArr.length; j++) {

                if (arr[i] == vowArr[j]) {
                    strString = strString.replace(arr[i], '');
                    holdVow.push(arr[i]);
                } else {
                    myArr.push(arr[i]);
                }
            }
        }
        console.log(myArr);
        console.log(holdVow);
        console.log(strString);
        return strString;
    }

}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

function disemvowel(str) {
    return (str || "").replace(/[aeiou]/gi, "");
}

function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter(function(el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
}

function disemvowel(str) {
    return str.replace(/[aeiouAEUIOU]/g, '');
}