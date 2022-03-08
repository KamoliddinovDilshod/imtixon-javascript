var numbers = [1 , 2, 0 , -1 , -2 , 3 , 4];

function numb() {
  var total= 0;
  for(var i =0 ; i<numbers.length; i++){
    if (numbers [i]>0){
      total += numbers[i];
    }
  }
  return total;
}

console.log(numb());