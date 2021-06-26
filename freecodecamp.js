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

/*
//Falsy Bouncer
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

*/

//Where do I Belong
/*
function getIndexToIns(arr, num) {
    //sort the array arr
    //find the the index of the element that is less than numm
    //return that index 
    let sorted = arr.sort((a,b)=>a - b)
    console.log(sorted)
    let index = sorted.findIndex((a)=>a >= num)
    if(index === -1){
       if(arr.length !== 0){
           return arr.length;
        }else{
            return 0
        }
    }
    return index;
  }

  //Or
  function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }
  
  console.log(getIndexToIns([2, 5, 10], 15));
  */