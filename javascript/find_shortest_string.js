function findShortestString(arr) {
  let shortest = arr[0]
  for(let i=1; i<arr.length; i++){
    if(arr[i].length<shortest.length){
      shortest = arr[i]
    }
  }
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// set an shortest element variable to empty
// for loop the array
// for each element, check it's length
// if the elements length is shorter than the shortest element variable, set the variable
// if the element is same length as variable, do not reset it
// return the variable

// And a written explanation of your solution
