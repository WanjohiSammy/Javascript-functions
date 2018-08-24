// The number 89 is the first integer with more than one digit that fulfills the property 
// partially introduced in the title of this kata. What's the use of saying "Eureka"? 
// Because this sum gives the same number.

function sumDigPow(a, b) {
    // Your code here
    var holds = "";
    var arr = [];
    var numArr = [];
    var moreArr = [];

    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    for (let j = 0; j < arr.length; j++) {
        let numString = arr[j].toString();

        if (numString.length == 1) {
            holds = Math.pow(arr[j], 1);
            if (holds == arr[j]) {
                numArr.push(holds);
            }
        } else {
            let anotherNum = arr[j].toString();
            let moreNum = 0;
            for (let k = 0; k < anotherNum.length; k++) {
                moreNum += Math.pow(parseInt(anotherNum.charAt(k)), k + 1);
                if (moreNum == arr[j]) {
                    numArr.push(moreNum);
                }
            }
        }

    }

    console.log(numArr);

}



// function sumDigPow(a, b) {
//   var ans = [];
//   while(a <= b){
//     if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
//       ans.push(a);
//     a++;
//   }
//   return ans;
// }



function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
        var sum = 0;
        for (var j = 0; j <= String(i).length; j++) {
            sum += Math.pow(parseInt(String(i)[j]), j + 1);
            if (sum == i) arr.push(i);
        }
    }
    return arr;
}


function sumDigPow(a, b) {
    var resultArr = [];
    var tempString = [];
    var sum;

    for (var i = a; i < b; i++) {
        sum = 0;
        tempString = ("" + i).split("");
        for (var j = 0; j < tempString.length; j++)
            sum += Math.pow(tempString[j], j + 1);
        if (sum === i)
            resultArr.push(i);
    }
    return resultArr;
}

function sumDigPow(a, b) {
    let result_arr = [];
    for (let i = a; i < b + 1; i++) {
        let result = 0;
        let string = i.toString();
        for (let k = 0; k < string.length + 1; k++) {
            result = result + Math.pow(string.charAt(k), k + 1);
        }
        if (result === i) {
            result_arr.push(result);
        }
    }

    return result_arr;
}

function sumDigPow(a, b) {
    let eurekas = [];
    while (a <= b) {
        let currentDigits = a.toString().split('').map(char => parseInt(char, 10));
        let powersValue = currentDigits.reduce((previousVal, currentVal, i) => previousVal + Math.pow(currentVal, i + 1));
        if (powersValue === a) {
            eurekas.push(a);
        }
        a++;
    }
    return eurekas;
}

function sumDigPow(a, b) {
    let result = [];

    for (let i = a; i <= b; i++) {
        if (i === i.toString().split('')
            .map((item, index) => {
                return Math.pow((+item), (index + 1))
            })
            .reduce((a, b) => {
                return a + b
            })) {
            result.push(i);
        }
    };

    return result;
}

function sumDigPow(a, b) {
    let values = [];
    for (let i = a; i <= b; i++) {
        let decas = i.toString().split("");
        if (i == decas
            .reduce(function(previousValue, currentValue, index, array) {
                return previousValue + Math.pow(currentValue, index + 1);
            }, 0)) {
            values.push(i);
        }
    }
    return values;
}

function sumDigPow(a, b) {
    // Your code here
    var curNum = a,
        result = [];
    while (curNum < b) {
        var sum = 0;
        (curNum + '').split('').forEach(function(v, i) {
            sum += Math.pow(v, i + 1);
        });
        if (curNum === sum) result.push(curNum);
        curNum++;
    }
    return result;
}

function sumDigPow(a, b) {
    var arr = [];
    for (var num = a; num <= b; num++) {
        if (num.toString().split('').reduce(
                function(sum, current, index) {
                    return +sum + Math.pow(current, index + 1);
                }, 0) == num) {
            arr.push(num);
        }
    }
    return arr;
}

function sumDigPow(a, b) {
    let ret = [];

    for (let n = a; n <= b; n++) {
        let d = Math.floor(Math.log10(n)) + 1;
        let m = 0;
        let p = n;
        for (let i = d; i >= 1 && m <= n; i--) {
            m += Math.pow(p % 10, i);
            p = Math.floor(p / 10);
        }

        if (m == n) {
            ret.push(m);
        }
    }

    return ret;

}

function sumDigPow(a, b) {
    let result = [];
    for (var i = a; i < b; ++i) {
        let ints = ('' + i).split('');
        let sum = 0;
        for (var j = 0; j < ints.length; j++) {
            sum += Math.pow(ints[j], j + 1);
        }
        if (sum === i) {
            result.push(i);
        }
    }
    return result;
}


function sumDigPow(a, b) {
    let output = []
    for (var i = a; i < b; i++) {
        let arr = i.toString().split('')
        let num = arr.reduce((acc, num, index) => {
            return acc += Math.pow(parseInt(num), index + 1)
        }, 0)
        if (num === i) {
            output.push(num)
        }
    }
    return output
}


function sumDigPow(a, b) {
    var isit = (number) => {
        var ints = number.toString().split('');
        var sum = 0;
        for (var i in ints) {
            sum += Math.pow(ints[i], parseInt(i) + 1);
        }
        return (sum == number);
    }
    var ret = [];
    while (a <= b) {
        if (isit(a)) {
            ret.push(a);
        }
        a++;
    }
    return ret;
}