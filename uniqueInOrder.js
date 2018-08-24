//If common characters are followed each other, return one and remove the others
//e.g., ABBCC will become ABC
var uniqueInOrder = function(iterable) {
    var splitted = iterable.split("");

    for (var i = 0; i < splitted.length; i++) {

        if (splitted[i] == (splitted[i + 1])) {
            splitted.splice(i + 1, 1);
            i = -1;
        }
    }

    return splitted;
}
uniqueInOrder("ABBCCDDD");