// Title Case a Sentence
function titleCase(str) {
    let capitlized = []
    str.split(' ').forEach(word => {
        capitlized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    });
    return capitlized.join(' ')
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))