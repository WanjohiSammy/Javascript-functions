// Write a function that reduce a number to a single digit
// by adding the digits e.g. 456 will be 4+5+6=15, then reduce 15 further like so: 1+5=6, return 6
function digitalRoot(number) {
    var numString = number.toString();
    if (numString.length > 1) {
        add(numString);
    } else {
        return number;
    }
}

function add(numString) {
    var numArray = [];
    var sum = 0;

    for (var i = 0; i < numString.length; i++) {
        numArray.push(+numString.charAt(i));
    }

    for (var i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    var sumQuantity = sum.toString();
    if (sumQuantity.length > 1) {


        add(sumQuantity);
    } else {
        return sum;
    }
}
digitalRoot(76);