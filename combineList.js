/*
 *Write a function that combines two lists by alternatingly taking elements. For example: 
 *given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
 *
 */

function combineList(list1, list2) {

    // list1 = list1.split('');
    // list2 = list2.split('');

    var arr = [];
    var all = (list1 + list2).split('');

    for (let i = 0; i < list1.length; i++) {
        arr.push(list1[i]);
        for (let j = i; j <= i; j++) {

            arr.push(list2[j]);
        }
    }

    return arr;
}

combineList(["a", "b", "c"], ["1", "2", "3"]);