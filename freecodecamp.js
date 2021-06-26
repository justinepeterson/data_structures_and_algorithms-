/*
// Title Case a Sentence
function titleCase(str) {
    let capitlized = []
    str.split(' ').forEach(word => {
        capitlized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    });
    return capitlized.join(' ')
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
*/

/*
//Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let arrComb = [...arr2]
    arrComb.splice(n, 0, ...arr1)
    return arrComb;
  }
 console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
*/

//Falsy Bouncer
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));