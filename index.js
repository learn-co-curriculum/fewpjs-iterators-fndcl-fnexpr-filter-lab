function findMatching(array, string) {
   return array.filter(element => 
        element.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch(array, substring) {
    return array.filter(string => string.startsWith(substring))
}

function matchName(array, string) {
    return array.filter(obj => obj.name === string)
}