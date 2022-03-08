var countTrue = [false , true , false , true , true]

function bools(){
  var result = 0;
  for (var count =1; count<countTrue.length; count++){
    if (countTrue[count] !== false){
      countTrue[count] = 1;
      result += countTrue[count];
    }
  }
  return result;
}

console.log(bools());