//var evenArray=[]
//var oddArray=[]
/*function range(start, end) {
  return Array(end - start ).fill().map((_, idx) => start + idx )
}
var result = range(0,100);

var results2=result.toString();
console.log(results2);*/

//create array for each assessment


var fizzBuzz = (a) => {
  for (var n =1; n <= a; n++){
    if (n%3===0 && n%5===0){
        console.log("FizzBuzz!");
                           }
    else if (n%3===0) {
        console.log("Fizz!");
                       }
    else if (n%5===0){
        console.log("Buzz!");
                      }
    else{
        console.log(n);
           }
                              }
        return ("finished!");
      }
fizzBuzz (100)




var evenArray = (b) => {
  var evenArray = []
  for (i=1; i<=b; i++) {
    if(i%2==0){evenArray.push(" even ");}
   else {evenArray.push(" odd ");}
;}
return (evenArray);
}




var primeLogger = n => {
var prime = [];
 for (var nmbr = 1; nmbr <= n; nmbr++) {

   var notPrime = false;
   for (var x = 2; x <= nmbr; x++) {
       if (nmbr%x===0 && x!==nmbr && nmbr!==1) {
           notPrime = true;
       }
   }
   if (notPrime === false && nmbr !== 1) {
     prime.push (" Prime ");
   } else {prime.push (" " );
 }
 ;}
 return (prime);
}
