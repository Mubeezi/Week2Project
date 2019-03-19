const main = (y) => {
  for (c=0; c<y+1; c++) {
    var types = [];
    if (odd(c)==true) {
      types.push("odd")
    } else {
      types.push("even")
    }
    if (prime(c)==true) {
      types.push("prime")
    }
    console.log(c, types);
  }
}



var odd = (n) => {
  if (n%2 == 0) {
    return false
  } else{
    return true
  }
}

var prime = (n) => {
     for (var x = 2; x < n; x++) {
       // console.log(x);
       if (n%x==0) {
         return false;
         }
    }
    if (n>1){
      return true;
}};




main(21);
