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


/*
//Mutations
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
*/

/*
//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;
  while(i < arr.length){
    newArr.push(arr.slice(i, i+size))
    i += size;
  }
  return newArr
}
 
chunkArrayInGroups(["a", "b", "c", "d"], 2)
*/
/*
class Bird {
  constructor(name) {
    this.name = name;
    this.numLegs = 2;
  }
}

let ownProps = [];

let duck = new Bird('justine')

for (let property in duck) {

  console.log(property)

}

var objectOne = {x: 5}

*/
/*
function sumAll(arr) {
  //extract the two numbers 
  //check which one is larger than the other
  //use for loop to add all the numbers in between
  let sortedArr = arr.sort((a,b)=>a-b)
  let sum = 0;
  for(let i = sortedArr[0]; i<=sortedArr[1]; i++){
    sum  += i;
  }
  return sum;
}

console.log(sumAll([10, 4]));
*/

/*
function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/

/*
//Diff Two Arrays
function diffArray(arr1, arr2) {

  return arr1.concat(arr2).filter(el => !arr1.includes(el) || !arr2.includes(el));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
*/

/*
function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < valsToRemove.length; j++){
      if(arr[i]===valsToRemove[j]){
         delete arr[i]
      }
    }
  }
  return arr.filter(el=>el!==null)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/

/*
function whatIsInAName(collection, source) {
  // Only change code below this line
  let srcKeys = Object.keys(source)
  return collection.filter((obj)=>{
    for(let i =0; i < srcKeys.length; i++){
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
        return false
      }
    }
    return true
  })
  // Only change code above this line
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
*/

/*
function translatePigLatin(str) {
   // Create variables to be used
   var pigLatin = "";
   var regex = /[aeiou]/gi;

   // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

console.log(translatePigLatin("glove"))
*/

/*

function myReplace(str, before, after) {
  if(/^[A-Z]/.test(before)){
    after = after[0].toUpperCase() + after.substr(1)
  }else{
    after = after[0].toLowerCase() + after.substr(1)
  }
  return str.replace(before,after)
}

console.log(myReplace("His name is Tom", "Tom", "john"));

*/

/*
function fearNotLetter(str) {
  let first = str.charCodeAt(0);
  let last = str.charCodeAt(str.length - 1)
  for(let i = first; i <= last; i++){
    let codeLetter = String.fromCharCode(i)
    let strLetter = str[i-first]
    if(codeLetter !== strLetter){
      return codeLetter
    }
  }
}

console.log(fearNotLetter("abce"));
*/

/*
function uniteUnique(arr) {
  let arrays = Object.keys(arguments).map((key) => arguments[key])
  for(let i = 0; i< arrays.length; i++){
    arrays[i].forEach(element => {
      if(!arr.includes(element)){
        arr.push(element)
      }
    })
  }
  return arr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
*/
/*
function sumPrimes(num) {
  let sum = 0;
  function isPrime(num) {
    if(num < 2) return false;
    for(var i = 2; i < num; i++) {
      if(num%i==0)
        return false;
    }
    return true;
  }
  
  for(var i = 0; i <= num; i++){
    if(isPrime(i)){
      sum+=i
    }
  }
  console.log(sum)
}

sumPrimes(977);

*/


function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-z\d]/g,"")
  console.log(str)
  console.log(newStr)
  return newStr.split('').reverse().join("");
}



console.log(palindrome("1 eye for of 1 eye."));
