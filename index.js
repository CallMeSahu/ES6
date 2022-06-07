//Power of a^b
const power = (a,b) => {
  let ans = a;
  for(let i = 1; i<b; i++){
    ans *= a;
  }
  return ans;
}

//Area of Hexagon
const areaOfHexagon = side =>  2.598 * side * side 


//Number of Words
const numberOfWords = sentence => {
  let count = 0;
  for(let i=0; i<=sentence.length; i++){
    if((sentence.charAt(i) === " ") && (sentence.charAt(i+1) !== (" "))){
      count++
    }
  }
  count++
  return count;
}

// Find Minimum
const findMin = (...numbers) =>{
  return numbers.reduce(function (a,b){
    return a<b?a:b;
  })
}

// Find Maximum
const findMax = (...numbers) => {
  return numbers.reduce(function (a,b){
    return a>b?a:b;
  })
}

//Type of Triangle
const typeOfTriangle = (a,b,c) =>{
  if(a+b+c !== 180){
    console.log("Not a Triangle")
  }
  else{
    if((a===b)&&(b===c)&&(c===a)){
      console.log("Equilateral Triangle");
    }
    else if((a===b)||(b===c)||(c===a)){
      console.log("Isoscales Triangle");
    }
    else{
      console.log("Scalene Triangle");
    }
  }
}

//Length of Array
const lengthOfArray = arr => arr.length;

//Index of Array
const indexOf = (arr, num) => {
  for(let i=0; i<arr.length; i++){
    if(num === arr[i]){
      return i;
    }
  }
}

//Replace element in an array
const replace = (arr, prev, next) => {
  for(let i=0; i<arr.length; i++){
    if(prev === arr[i]){
      arr[i] = next;
    }
  }
  return arr;
}

//Merge two array
const mergeArray = (arr1, arr2) => arr1.concat(arr2);

//Return specific character
const charAt = (str, index) => str.charAt(index)

// Which date comes before
const minDate = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  return date1>=date2?date2:date1;
  }
}





