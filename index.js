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






