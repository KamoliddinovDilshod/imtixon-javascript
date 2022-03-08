// Birinchi masala
var numbers = [1,3,0,5,0,7,0];
var number =[];
var zero= [];
var posit =[];

function zeroEnd(){
  for (var num of numbers ){
    if(numbers[num] > 0){
      var positive = numbers[num];
      posit.push(positive);
    }
    else{
      var zeros = numbers[num];
      zero.push(zeros);
    }
  }
  
  var total = posit.concat(zeros);
  number.push(total)
  return;
  
};
console.log(zeroEnd(numbers));